// alpha.ts

export function alpha(hexColor, alphaPercentage) {
  var hexPart = hexColor.substring(1);
  var hexOfAlpha = (~~(alphaPercentage * 255)).toString(16);
  return `#${hexOfAlpha}${hexPart}`;
}