const percentPromotionPrice = (price: number, promotionPrice: number) => {
  const percent = Number.parseInt((((price - promotionPrice) / price) * 100).toString());

  return percent;
};

export default percentPromotionPrice;