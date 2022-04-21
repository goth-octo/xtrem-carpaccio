// more of your code here

export function sayHello() {
  return 'Hello World';
}

type Body = Readonly<{
  prices: number[];
  quantities: number[];
  country: string;
  reduction: string;
}>;

export function calculeFacture(body: Body): { total: number } {
  const total = accumulePrixEtQtt(body);

  const totalAvecTaxes = appliquerTaxeDePays(total, body.country);

  const totalAvecRéduction = appliquerReductionStandard(totalAvecTaxes);

  return { total: totalAvecRéduction };
}

function appliquerTaxeDePays(total: number, pays: string): number {
  const taxe = taxeParPays[pays];
  return total * taxe;
}

function appliquerReductionStandard(totalAprèsTaxes: number): number {
  if (totalAprèsTaxes >= 50000) {
    return (totalAprèsTaxes *= 1 - 0.15);
  } else if (totalAprèsTaxes >= 10000) {
    return (totalAprèsTaxes *= 1 - 0.1);
  } else if (totalAprèsTaxes >= 7000) {
    return (totalAprèsTaxes *= 1 - 0.07);
  } else if (totalAprèsTaxes >= 5000) {
    return (totalAprèsTaxes *= 1 - 0.05);
  } else if (totalAprèsTaxes >= 1000) {
    return (totalAprèsTaxes *= 1 - 0.03);
  } else {
    return totalAprèsTaxes;
  }
}

function accumulePrixEtQtt(body: Body): number {
  let total = 0;
  body.prices.forEach((price: number, index: number) => {
    total += price * body.quantities[index];
  });
  return total;
}

const taxeParPays: Record<string, number> = {
  DE: 1.2,
  UK: 1.21,
  FR: 1.2,
  IT: 1.25,
  ES: 1.19,
  PL: 1.21,
  RO: 1.2,
  NL: 1.2,
  BE: 1.24,
  EL: 1.2,
  CZ: 1.19,
  PT: 1.23,
  HU: 1.27,
  SE: 1.23,
  AT: 1.22,
  BG: 1.21,
  DK: 1.21,
  FI: 1.17,
  SK: 1.18,
  IE: 1.21,
  HR: 1.23,
  LT: 1.23,
  SI: 1.24,
  LV: 1.2,
  EE: 1.22,
  CY: 1.21,
  LU: 1.25,
  MT: 1.2,
};
