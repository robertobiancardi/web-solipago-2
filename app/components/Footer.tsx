export default function Footer() {
  return (
    <footer className="bg-[#FDFDFB]">
      <div className="max-w-[1400px] mx-auto px-12 py-8 flex items-center gap-3">
        <svg viewBox="0 0 44 32" width="22" height="16">
          <rect x="2" y="22" width="5" height="8" fill="#8B9AA8" opacity="0.55" />
          <rect x="11" y="16" width="5" height="14" fill="#8B9AA8" opacity="0.7" />
          <rect x="20" y="10" width="5" height="20" fill="#8B9AA8" opacity="0.85" />
          <rect x="29" y="4" width="5" height="26" fill="#8B9AA8" />
          <path
            d="M2 20 L11 13 L20 8 L29 2 L38"
            fill="none"
            stroke="#8B9AA8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[#8B9AA8] text-sm">
          © 2026 Solipago — Buenos Aires, Argentina
        </span>
      </div>
    </footer>
  );
}