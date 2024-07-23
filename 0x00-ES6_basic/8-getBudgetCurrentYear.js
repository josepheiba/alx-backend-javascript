function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const year = getCurrentYear();
  const budget = {};

  budget[`income-${year}`] = income;
  budget[`gdp-${year}`] = gdp;
  budget[`capita-${year}`] = capita;

  return budget;
}
