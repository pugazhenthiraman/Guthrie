import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/home" className={`flex items-center gap-3 group ${className}`}>
      <div className="relative w-20 h-20">
        <img
          src="/logo-v2.png"
          alt="Guthrie Engineering Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Company name */}
      <div className="flex flex-col gap-1">
        <span className="text-3xl font-black text-white tracking-tighter uppercase leading-none">
          Guthrie
        </span>
        <span className="text-[13px] font-bold text-primary-400 uppercase tracking-[0.25em] leading-none">
          Engineering
        </span>
      </div>
    </Link>
  );
}
