import { calculeFacture, sayHello } from './calc';

describe('Test calc', () => {
  it('say hello', () => {
    expect(sayHello()).toBe('Hello World');
  });

  //   test('Retourne une réponse valide', () => {
  //     expect(calculeFacture({})).toEqual({ total: 0 });
  //   });
});
