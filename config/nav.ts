export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/founder", label: "Founder" },
  { href: "/approach", label: "Approach" },
  { href: "/journey-academy", label: "Journey Academy" },
  { href: "/experiences", label: "Experiences" },
  { href: "/community", label: "Community" },
  { href: "/reserve", label: "Reserve" },
] as const;

/** Desktop bar and footer omit Home — the logo covers that role. */
export const primaryNavLinks = navLinks.filter((link) => link.href !== "/");
