export const getWidthOfIcon = (width: number) => {
  if (width < 430) return 48
  else if (width < 744 && width >= 430) return 64
  else return 80
}
