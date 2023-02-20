

export const convertirPrecio = (price) => {

  const noTruncarDecimales = { maximumFractionDigits: 20 };
  let priceConvert = price.toLocaleString("en-US", noTruncarDecimales);
  return priceConvert;

}