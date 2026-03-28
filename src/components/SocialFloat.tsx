import { motion } from "framer-motion";
import { Instagram, Twitter } from "lucide-react";

function TikTokIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  );
}

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/qscautomotive?igsh=MWllNDV1b3A4dHN2dg%3D%3D&utm_source=qr",
    icon: Instagram,
    color: "bg-gradient-to-br from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888]",
    shadow: "hover:shadow-[#e6683c]/40",
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    icon: null,
    color: "bg-[#010101]",
    shadow: "hover:shadow-black/30",
  },
  {
    label: "Twitter / X",
    href: "https://x.com/qscautomotive?s=11",
    icon: Twitter,
    color: "bg-[#1DA1F2]",
    shadow: "hover:shadow-[#1DA1F2]/40",
  },
];

export function SocialFloat() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {socials.map((social, idx) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className={`flex items-center justify-center w-10 h-10 rounded-full text-white shadow-lg ${social.color} ${social.shadow} hover:scale-110 hover:shadow-xl transition-all duration-300`}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 + idx * 0.15, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          {social.icon ? (
            <social.icon size={18} />
          ) : (
            <TikTokIcon size={18} />
          )}
        </motion.a>
      ))}
    </div>
  );
}
