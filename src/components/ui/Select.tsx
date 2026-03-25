"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  label?: string;
  required?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}

const wrapperVariants: Variants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      ease: "easeOut",
      duration: 0.3,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
      ease: "easeIn",
      duration: 0.3,
    },
  },
};

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      duration: 0.2,
    },
  },
};

export function Select({
  value,
  onChange,
  options,
  placeholder = "Select an option",
  label,
  required = false,
  onFocus,
  onBlur,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) handleFocus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    } else if (e.key === "ArrowDown" && isOpen) {
      e.preventDefault();
      const currentIndex = options.indexOf(value);
      const nextIndex = (currentIndex + 1) % options.length;
      onChange(options[nextIndex]);
    } else if (e.key === "ArrowUp" && isOpen) {
      e.preventDefault();
      const currentIndex = options.indexOf(value);
      const prevIndex = (currentIndex - 1 + options.length) % options.length;
      onChange(options[prevIndex]);
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full" ref={containerRef}>
      {label && (
        <label
          className={`text-xs uppercase tracking-[0.2em] font-bold transition-colors duration-300 ${
            isFocused || isOpen ? "text-primary-400" : "text-white/25"
          }`}
        >
          {label} {required && <span className="text-primary-500">*</span>}
        </label>
      )}
      <div className="relative">
        <button
          type="button"
          onClick={handleToggle}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className={`w-full bg-white/5 border rounded-xl px-5 py-4 text-sm text-left flex items-center justify-between transition-all duration-300 outline-none
            ${isOpen || isFocused ? "border-primary-500 bg-white/10 ring-1 ring-primary-500/20" : "border-white/10"}
            ${!value ? "text-white/20" : "text-white"}
          `}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span className="truncate">{value || placeholder}</span>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown
              className={`h-4 w-4 transition-colors duration-300 ${
                isOpen ? "text-primary-400" : "text-white/20"
              }`}
            />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              animate={isOpen ? "open" : "closed"}
              variants={wrapperVariants}
              style={{ originY: "top" }}
              className="absolute top-full left-0 right-0 mt-6 p-6 bg-[#050A19]/90 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] overflow-hidden z-[100]"
            >
              <div className="flex flex-col gap-3">
                {options.map((option, idx) => (
                  <motion.button
                    key={option}
                    variants={itemVariants}
                    onClick={() => {
                      onChange(option);
                      setIsOpen(false);
                    }}
                    className="group/item flex items-center justify-between px-12 py-10 rounded-[1.5rem] text-[15px] font-bold uppercase tracking-[0.3em] text-white/80 hover:text-white hover:bg-white/[0.05] transition-all duration-300 w-full text-left"
                  >
                    <div className="flex items-center gap-14">
                      <span className="font-mono text-[12px] text-primary-500/50 group-hover/item:text-primary-500 transition-colors">
                        / 0{idx + 1}
                      </span>
                      <span className="leading-relaxed">{option}</span>
                    </div>
                    {value === option ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2.5 h-2.5 rounded-full bg-primary-500 shadow-[0_0_15px_rgba(249,115,22,0.9)]"
                      />
                    ) : (
                      <div className="w-5 h-5 opacity-0 -translate-x-4 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-500 text-primary-500 flex items-center justify-center">
                        <ChevronDown className="w-5 h-5 rotate-[270deg]" />
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
