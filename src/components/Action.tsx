import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

const styles = {
  primary:
    "group inline-flex min-h-12 items-center justify-center gap-3 border border-primary bg-primary px-6 py-3 text-center text-xs font-semibold uppercase text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
  outline:
    "group inline-flex min-h-12 items-center justify-center gap-3 border border-border bg-transparent px-6 py-3 text-center text-xs font-semibold uppercase text-foreground transition-colors hover:border-primary hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
  light:
    "group inline-flex min-h-12 items-center justify-center gap-3 border border-hero-border bg-hero-foreground px-6 py-3 text-center text-xs font-semibold uppercase text-hero transition-colors hover:bg-hero-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
} as const;

type Variant = keyof typeof styles;

type ActionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: Variant;
  showArrow?: boolean;
};

export function ActionLink({
  children,
  variant = "primary",
  showArrow = true,
  className = "",
  ...props
}: ActionLinkProps) {
  return (
    <a className={`${styles[variant]} ${className}`} {...props}>
      <span>{children}</span>
      {showArrow ? (
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      ) : null}
    </a>
  );
}

type ActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: Variant;
};

export function ActionButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: ActionButtonProps) {
  return (
    <button className={`${styles[variant]} ${className}`} {...props}>
      <span>{children}</span>
      <ArrowUpRight
        aria-hidden="true"
        className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </button>
  );
}
