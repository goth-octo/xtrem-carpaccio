// more of your code here

export function sayHello() {
  return 'Hello World';
}

export function calculeFacture(body: any): { total: number } {
  const total = accumulePrixEtQtt(body);

  const totalAvecTaxes = appliquerTaxe(total);

  const totalAvecRéduction = appliquerReductionStandard(totalAvecTaxes);

  return { total: totalAvecRéduction };
}

function appliquerTaxe(total: number) {
  return total * 1.2;
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

function accumulePrixEtQtt(body: any) {
  let total = 0;
  body.prices.forEach((price: number, index: number) => {
    total += price * body.quantities[index];
  });
  return total;
}
