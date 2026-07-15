import { brandConfig } from "@/config/brand";

export const brandColors = brandConfig.colors;
export const brandTypography = brandConfig.typography;
export const brandSpacing = brandConfig.spacing;
export const brandBorders = brandConfig.borders;
export const brandShadows = brandConfig.shadows;
export const brandMotion = brandConfig.motion;

export const brandSystem = {
  colors: brandColors,
  typography: brandTypography,
  spacing: brandSpacing,
  borders: brandBorders,
  shadows: brandShadows,
  motion: brandMotion,
} as const;
