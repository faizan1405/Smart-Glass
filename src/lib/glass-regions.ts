/**
 * Percentage-based outlines of the glass surfaces inside each photograph.
 * Effects (frosting, tinting) are clipped to these outlines so only the glass
 * ever changes — never walls, floors, ceilings or furniture.
 */
export type GlassRegion = string[]; // list of CSS polygon() values

/** Interior glass partition seen in perspective (hero-glass / experience-clear). */
export const PARTITION_GLASS: GlassRegion = [
  "polygon(22.2% 25.6%, 47.4% 3.6%, 86.4% 12.2%, 86.4% 82.8%, 47.4% 90.0%, 22.2% 79.0%)",
];

/** Front-on meeting cabin with three panes (TintCabin / glass-cabin). */
export const CABIN_GLASS: GlassRegion = [
  "polygon(16.4% 9.6%, 39.7% 9.6%, 39.7% 82.7%, 16.4% 82.7%)",
  "polygon(39.7% 9.6%, 66.9% 9.6%, 66.9% 82.7%, 39.7% 82.7%)",
  "polygon(66.9% 9.7%, 83.8% 9.7%, 83.8% 82.7%, 66.9% 82.7%)",
];

/** Architectural corner conference room partition. */
export const ARCHITECTURAL_GLASS: GlassRegion = [
  "polygon(14.8% 16.5%, 69.8% 3.6%, 88.5% 12.8%, 88.5% 82.5%, 69.8% 89.2%, 14.8% 74.5%)",
];

/** Panoramic roof sections of luxury vehicle interior. */
export const AUTOMOTIVE_GLASS: GlassRegion = [
  "polygon(18.0% 0%, 82.0% 0%, 78.5% 28.5%, 21.5% 28.5%)",
  "polygon(25.0% 32.5%, 75.0% 32.5%, 72.0% 43.5%, 28.0% 43.5%)",
];

/** Backward compatibility alias for automotive glass. */
export const CAR_GLASS: GlassRegion = AUTOMOTIVE_GLASS;

/** Executive office smart-glass partition wall behind desk. */
export const SMART_GLASS_PANELS: GlassRegion = [
  "polygon(4.2% 1.5%, 82.5% 1.5%, 82.5% 76.5%, 4.2% 76.5%)",
];
