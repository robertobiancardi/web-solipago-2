export default function Header() {
  return (
    <header className="bg-[#0F2E4D]">
      <div className="max-w-[1400px] mx-auto px-12 py-6 flex items-center justify-between">
        <span className="text-white text-4xl font-semibold tracking-tight">
          Solipago
        </span>
        <svg viewBox="0 0 44 32" width="44" height="32">
          <rect x="2" y="22" width="5" height="8" fill="white" opacity="0.55" />
          <rect x="11" y="16" width="5" height="14" fill="white" opacity="0.7" />
          <rect x="20" y="10" width="5" height="20" fill="white" opacity="0.85" />
          <rect x="29" y="4" width="5" height="26" fill="white" />
          <path
            d="M2 20 L11 13 L20 8 L29 2 L38"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </header>
  );
}