import { clsx } from 'clsx'
import { styleMap } from './styleMap';


export function GridContainer({
  // eslint-disable-next-line no-unused-vars
  as: Tag = "div",
  zIndex ="0",
  position ="static",
  column = "autofit",
  placement = "",
  overflow = "visible",
  height = "auto",
  backgroundColor = "transparent",
  gap ="0",
  padding = "0",
  children,
}) {
  return (
    <Tag
      className={clsx(
        "grid",
        styleMap.zIndexMap[zIndex],
        styleMap.positionMap[position],
        styleMap.positionPresetMap[placement],
        styleMap.overflowMap[overflow],
        styleMap.heightMap[height],
        styleMap.bgMap[backgroundColor],
        styleMap.gapMap[gap],
        styleMap.paddingMap[padding],
        column === "autofit"
          ? "grid-cols-[repeat(auto-fit,minmax(18rem,1fr))]"
          : styleMap.colMap[column] || "grid-cols-1"
      )}
    >
      {children}
    </Tag>
  );
}



