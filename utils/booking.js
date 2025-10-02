
export const PACKAGES = {
  basic: {
    name: "Basic",
    description: "Exterior only",
    price: 200,
  },
  premium: {
    name: "Premium",
    description: "Includes interior",
    price: 400,
  },
  luxury: {
    name: "Luxury",
    description: "Includes special services",
    price: 700,
  },
};

// 🧮 Function to calculate total price
export function calculatePrice(packageType, extras = []) {
  let basePrice = PACKAGES[packageType]?.price || 0;

  // Add price of extras (if any)
  const extrasTotal = extras.reduce((sum, extra) => sum + extra.price, 0);

  return basePrice + extrasTotal;
}
