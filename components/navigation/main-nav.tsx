"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { brandConfig } from "@/config/brand";
import { navLinks, secondaryNavLinks } from "@/config/nav";
import { SymbolMark } from "@/components/brand/Logo";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label="Open menu"
        aria-hidden={open}
        tabIndex={open ? -1 : 0}
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:hidden"
      >
        <Menu className="h-5 w-5" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex flex-col"
            style={{ backgroundColor: brandConfig.colors.primary, color: brandConfig.colors.ivory }}
          >
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-10">
              <SymbolMark variant="mono-white" size={26} />
              <button
                ref={closeRef}
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                style={{ color: brandConfig.colors.ivory }}
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Primary" className="flex flex-1 flex-col items-start justify-center gap-1 overflow-y-auto px-6 py-4 sm:px-8 lg:px-10">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                const isHovered = hoveredHref === link.href;
                const dimmed = !isActive && !isHovered;

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.08 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      onMouseEnter={() => setHoveredHref(link.href)}
                      onMouseLeave={() => setHoveredHref(null)}
                      className={cn("font-serif text-3xl leading-[1.35] transition-opacity duration-300 sm:text-4xl")}
                      style={{ fontFamily: brandConfig.typography.display, color: brandConfig.colors.ivory, opacity: dimmed ? 0.62 : 1 }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-8 lg:px-10">
              <p className="text-[0.68rem] uppercase tracking-[0.32em]" style={{ color: `${brandConfig.colors.ivory}80` }}>
                {brandConfig.tagline}™
              </p>
              <nav aria-label="Secondary" className="flex gap-4">
                {secondaryNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[0.68rem] uppercase tracking-[0.32em] transition-colors hover:opacity-100"
                    style={{ color: `${brandConfig.colors.ivory}80` }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
