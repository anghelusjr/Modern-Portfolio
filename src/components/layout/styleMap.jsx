
export const styleMap = {
  colMap: { 1: "grid-cols-1", 2: "grid-cols-2", 3: "grid-cols-3", 4: "grid-cols-4"},
  bgMap: {transparent: "bg-transparent", primary: "bg-[var(--color-primary)]", secondary: "bg-[var(--color-secondary)]", hue1: "bg-[var(--color-hue1)]", hue2: "bg-[var(--color-hue2)]"},
  gapMap: {0: "gap-0", 2: "gap-2", 4: "gap-4", 6: "gap-6", 10: "gap-10"},
  paddingMap: {0: "p-0", 2: "p-2", 4: "p-4", 10: "p-10", 20: "p-20", 30: "p-30", 40: "p-40"},
  positionMap: {static: "static", relative: "relative", absolute: "absolute", fixed: "fixed", sticky: "sticky"},
  overflowMap: { visible: "overflow-visible", hidden: "overflow-hidden",auto: "overflow-auto", scroll: "overflow-scroll", overflowX: "overflow-x-auto", overflowY: "overflow-y-auto"},
  justifyMap: { start: "justify-start", center: "justify-center", end: "justify-end",
                between: "justify-between", around: "justify-around", evenly: "justify-evenly"},
  alignMap: { start: "items-start", center: "items-center", end: "items-end", stretch: "items-stretch", baseline: "items-baseline"},
  positionPresetMap: { center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", centerTop: "top-0 left-1/2 -translate-x-1/2",
  centerBottom: "bottom-0 left-1/2 -translate-x-1/2", topLeft: "top-0 left-0", topRight: "top-0 right-0", bottomLeft: "bottom-0 left-0", bottomRight: "bottom-0 right-0", full: "inset-0"},
  zIndexMap: { auto: "z-auto", "-10": "-z-10", 0: "z-0", 10: "z-10", 20: "z-20", 30: "z-30", 40: "z-40", 50: "z-50" },
  heightMap: { auto: "h-auto", full: "h-full", screen: "h-screen", min: "h-min", max: "h-max", fit: "h-fit"},
  widthMap: { auto: "w-auto", full: "w-full", screen: "w-screen", min: "w-min", max: "w-max", fit: "w-fit", minMd: "min-w-sm" }

}