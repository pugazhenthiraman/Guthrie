import Image from "next/image";
import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/home" className={`flex items-center gap-3 group ${className}`}>
      <div className="relative w-14 h-20 sm:w-16 sm:h-24">
        <Image
          src="/logo-trans-bg-212x300.png"
          alt="Guthrie Engineering Logo"
          fill
          className="object-contain invert hue-rotate-180 brightness-[1.1]"
        />
      </div>
    </Link>
  );
}
