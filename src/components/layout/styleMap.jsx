
export const styleMap = {
  colMap: { 1: "grid-cols-1", 2: "grid-cols-2", 3: "grid-cols-3", 4: "grid-cols-4", custom: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"},
  bgMap: {transparent: "bg-transparent", primary: "bg-[#0f0f0e]", secondary: "bg-purple-800", primaryVariant: "bg-[#1f1f1c]", hue2: "bg-[var(--color-hue2)]"},
  gapMap: {0: "gap-0", 2: "gap-2", 4: "gap-4", 6: "gap-6", 10: "gap-10"},
  paddingMap: {0: "p-0", 2: "p-2", 4: "p-4", 6: "p-6", 10: "p-10", 20: "p-20", 30: "p-30", 40: "p-40", px: "px-10", py: "py-10", sm: "px-12", custom: "px-0 sm:pl-10 sm:pr-10 sm:pt-30 md:px-20"},
  marginMap: {0:"m-0",2:"m-2",4:"m-4",6:"m-6",10:"m-10",20:"m-20",30:"m-30",40:"m-40",neg2:"-m-2",neg4:"-m-4",neg6:"-m-6",negX10:"-mx-6",neg20:"-m-20",neg30:"-m-30",neg40:"-m-40",x:"mx-10",y:"my-10",top:"mt-10",right:"mr-10",bottom:"mb-10",left:"ml-10",sm:"mx-6 sm:mx-12",custom:"mx-0 sm:ml-10 sm:mr-6 sm:mt-20 md:mx-20"},
  positionMap: {static: "static", relative: "relative", absolute: "absolute", fixed: "fixed", sticky: "sticky"},
  overflowMap: { visible: "overflow-visible", hidden: "overflow-hidden",auto: "overflow-auto", scroll: "overflow-scroll", overflowX: "overflow-x-hidden", overflowY: "overflow-y-hidden", custom: "overflow-x-hidden overflow-y-scroll scrollbar-hide"},
  justifyMap: { start: "justify-start", center: "justify-center", end: "justify-end",
                between: "justify-between", around: "justify-around", evenly: "justify-evenly"},
  alignMap: { start: "items-start", center: "items-center", end: "items-end", stretch: "items-stretch", baseline: "items-baseline"},
  positionPresetMap: { center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", centerTop: "top-0 left-1/2 -translate-x-1/2",
  centerBottom: "bottom-0 left-1/2 -translate-x-1/2", topLeft: "top-0 left-0", topRight: "top-0 right-0", bottomLeft: "bottom-0 left-0", bottomRight: "bottom-0 right-0", full: "inset-0"},
  zIndexMap: { auto: "z-auto", "-10": "-z-10", 0: "z-0", 10: "z-10", 20: "z-20", 30: "z-30", 40: "z-40", 50: "z-50" },
  heightMap: { auto: "h-auto", full: "h-full", screen: "h-screen", dvh: "h-dvh", min: "h-min", max: "h-max", fit: "h-fit"},
  widthMap: { auto: "w-auto", full: "w-full", screen: "w-screen", min: "w-min", max: "w-max", fit: "w-fit", minMd: "min-w-sm" }

}