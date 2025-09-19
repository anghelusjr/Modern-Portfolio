import {clsx} from 'clsx'
import {styleMap} from "./styleMap"

export function FlexContainer({
  // eslint-disable-next-line no-unused-vars
  as: Tag = "div",
  zIndex ="0",
  height ="auto",
  width ="auto",
  position = "static",
  placement = "",
  overflow = "visible",
  flexDirection = "column",
  justifyContent = "start",
  alignItems = "start",
  backgroundColor = "transparent",
  gap = "0",
  padding = "0",
  children,
}) {
  return (
    <Tag
      className={clsx(
        "flex",
        styleMap.zIndexMap[zIndex],
        styleMap.heightMap[height],
        styleMap.widthMap[width],
        styleMap.positionMap[position],
        styleMap.positionPresetMap[placement],
        styleMap.overflowMap[overflow],
        styleMap.bgMap[backgroundColor],
        styleMap.gapMap[gap],
        styleMap.paddingMap[padding],
        flexDirection === "column"
          ? `flex-col ${styleMap.justifyMap[justifyContent]} ${styleMap.alignMap[alignItems]}`
          : `flex-row ${styleMap.justifyMap[justifyContent]} ${styleMap.alignMap[alignItems]}`
      )}
    >
      {children}
    </Tag>
  );
}