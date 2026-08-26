export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/founder", label: "Founder" },
  { href: "/approach", label: "Approach" },
  { href: "/journey-academy", label: "Journey Academy" },
  { href: "/experiences", label: "Experiences" },
  { href: "/packages", label: "Packages" },
  { href: "/community", label: "Community" },
  { href: "/reserve", label: "Reserve" },
] as const;

/** Desktop bar and footer omit Home — the logo covers that role. */
export const primaryNavLinks = navLinks.filter((link) => link.href !== "/");

/** Secondary nav — shown separately from the primary menu (e.g. a smaller link near the CTA). */
export const secondaryNavLinks = [{ href: "/invest", label: "Invest" }] as const;
