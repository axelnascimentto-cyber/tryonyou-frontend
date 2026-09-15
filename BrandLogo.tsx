type Variant = "header" | "mark" | "wordmark";

const SRC: Record<Variant, string> = {
  header: "/brand/logo-header.png",
  mark: "/brand/logo-mark.png",
  wordmark: "/brand/logo-wordmark.png",
};

const HEIGHT: Record<Variant, number> = {
  header: 52,
  mark: 280,
  wordmark: 36,
};

export function BrandLogo({
  variant = "header",
  height,
  className = "",
}: {
  variant?: Variant;
  height?: number;
  className?: string;
}) {
  const h = height ?? HEIGHT[variant];
  return (
    <img
      src={SRC[variant]}
      alt="TryOnYou"
      height={h}
      className={className}
      style={{
        height: h,
        width: "auto",
        display: "block",
        background: "transparent",
        mixBlendMode: "multiply",
        filter:
          "drop-shadow(0 10px 22px rgba(14,92,122,.14)) drop-shadow(0 1px 0 rgba(255,255,255,.35))",
      }}
    />
  );
}

export function BrandHeaderLink() {
  return (
    <a href="/" aria-label="TryOnYou home" style={{ display: "inline-flex", alignItems: "center" }}>
      <BrandLogo variant="header" />
    </a>
  );
}
