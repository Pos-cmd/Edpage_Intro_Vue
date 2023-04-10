/**
     * Formate un prix en dollars américains.
     * @param {number} price - Le prix à formater.
     * @returns {string} Le prix formaté en dollars américains.
     */
export const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  }