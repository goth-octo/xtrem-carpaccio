// more of your code here

export function sayHello() {
  return 'Hello World';
}

export function calculeFacture(body: any): { total: number } {
  const total = accumulePrixEtQtt(body);

  const totalAvecTaxes = appliquerTaxe(total);

  return { total: totalAvecTaxes };
}

function appliquerTaxe(total: number) {
  return total * 1.2;
}

function accumulePrixEtQtt(body: any) {
  let total = 0;
  body.prices.forEach((price: number, index: number) => {
    total += price * body.quantities[index];
  });
  return total;
}
