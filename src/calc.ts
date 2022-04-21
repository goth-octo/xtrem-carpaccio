// more of your code here

export function sayHello() {
  return 'Hello World';
}

export function calculeFacture(body: any) {
  let total = accumulePrixEtQtt(body);
  total *= 1.2;

  return { total };
}
function accumulePrixEtQtt(body: any) {
  let total = 0;
  body.prices.forEach((price: number, index: number) => {
    total += price * body.quantities[index];
  });
  return total;
}
