const valueToHex = (value: number) => {
  return value.toString(16);
};

export const rgbToHex = (r: number, g: number, b: number) => {
  return valueToHex(r) + valueToHex(g) + valueToHex(b);
};
