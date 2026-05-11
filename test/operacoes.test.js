const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes Fraca para 50 Operações Aritméticas', () => {
  // === Testes para o Bloco 1 (1-10) ===
  test('1. deve somar dois números positivos', () => { 
    expect(soma(2, 3)).toBe(5);
    expect(soma(-2, 3)).toBe(1);
    expect(soma(0, 0)).toBe(0);
    expect(soma(10, 20)).toBe(30);
    expect(soma(-5, -3)).toBe(-8);
    expect(soma(100, 1)).toBe(101);
    expect(soma(2, 3)).toBe(5);
    expect(soma(-2, 3)).toBe(1);
  });
  test('2. deve subtrair dois números positivos', () => { 
    expect(subtracao(5, 2)).toBe(3);
    expect(subtracao(10, 3)).toBe(7);
    expect(subtracao(0, 5)).toBe(-5);
    expect(subtracao(-5, -3)).toBe(-2);
  });
  test('3. deve multiplicar dois números positivos', () => { 
    expect(multiplicacao(3, 4)).toBe(12);
    expect(multiplicacao(5, 5)).toBe(25);
    expect(multiplicacao(0, 100)).toBe(0);
    expect(multiplicacao(-2, 3)).toBe(-6);
    expect(multiplicacao(10, 2)).toBe(20);
  });
  test('4. deve dividir e lançar erro para divisão por zero', () => {
    expect(divisao(10, 2)).toBe(5);
    expect(() => divisao(5, 0)).toThrow();
    expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.')
    expect(divisao(10, 2)).toBe(5);
    expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
  });
  test('5. deve calcular a potência com expoente positivo', () => { 
    expect(potencia(2, 3)).toBe(8);
    expect(potencia(2, 0)).toBe(1);
    expect(potencia(5, 2)).toBe(25);
    expect(potencia(10, 1)).toBe(10);
    expect(potencia(2, 10)).toBe(1024);
  });
  test('6. deve calcular a raiz quadrada de um quadrado perfeito', () => { 
    expect(raizQuadrada(16)).toBe(4);
    expect(raizQuadrada(0)).toBe(0);
    expect(raizQuadrada(25)).toBe(5);
    expect(raizQuadrada(1)).toBe(1);
    expect(raizQuadrada(100)).toBe(10);
    expect(raizQuadrada(16)).toBe(4);
    expect(() => raizQuadrada(-1)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.');
  });
  test('7. deve retornar o resto da divisão', () => { 
    expect(restoDivisao(10, 3)).toBe(1);
    expect(restoDivisao(10, 2)).toBe(0);
    expect(restoDivisao(7, 3)).toBe(1);
    expect(restoDivisao(20, 6)).toBe(2);
    expect(restoDivisao(100, 7)).toBe(2);
    expect(fatorial(4)).toBe(24);
    expect(fatorial(0)).toBe(1);
    expect(fatorial(1)).toBe(1);
    expect(() => fatorial(-1)).toThrow('Fatorial não é definido para números negativos.');
    expect(fatorial(2)).toBe(2);
  });
  test('8. deve calcular o fatorial de um número maior que 1', () => { 
    expect(fatorial(4)).toBe(24);
    expect(fatorial(0)).toBe(1);
    expect(fatorial(1)).toBe(1);
    expect(fatorial(5)).toBe(120);
    expect(fatorial(6)).toBe(720);
  });
  test('9. deve calcular a média de um array com múltiplos elementos', () => { 
    expect(mediaArray([10, 20, 30])).toBe(20);
    expect(mediaArray([5, 5, 5])).toBe(5);
    expect(mediaArray([0, 0, 0])).toBe(0);
    expect(mediaArray([1])).toBe(1);
    expect(mediaArray([10, 20])).toBe(15);
    expect(mediaArray([10, 20])).toBe(15);
    expect(mediaArray([])).toBe(0);
  });
  test('10. deve somar um array com múltiplos elementos', () => { 
    expect(somaArray([1, 2, 3])).toBe(6);
    expect(somaArray([0, 0, 0])).toBe(0);
    expect(somaArray([5])).toBe(5);
    expect(somaArray([10, 20, 30])).toBe(60);
    expect(somaArray([-1, -2, -3])).toBe(-6);
  });

  // === Testes para o Bloco 2 (11-20) ===
  test('11. deve encontrar o valor máximo em um array', () => { 
    expect(maximoArray([1, 50, 10])).toBe(50);
    expect(maximoArray([5, 5, 5])).toBe(5);
    expect(maximoArray([100])).toBe(100);
    expect(maximoArray([-5, -10, -1])).toBe(-1);
    expect(maximoArray([0, 10, 5])).toBe(10);
    expect(maximoArray([1, 50, 10])).toBe(50);
    expect(() => maximoArray([])).toThrow('Array vazio не possui valor máximo.');
  });
  test('12. deve encontrar o valor mínimo em um array', () => { 
    expect(minimoArray([10, 2, 100])).toBe(2);
    expect(minimoArray([5, 5, 5])).toBe(5);
    expect(minimoArray([1])).toBe(1);
    expect(minimoArray([-5, -10, -1])).toBe(-10);
    expect(minimoArray([10, 0, 20])).toBe(0);
    expect(minimoArray([10, 2, 100])).toBe(2);
    expect(() => minimoArray([])).toThrow('Array vazio не possui valor mínimo.');
  });
  test('13. deve retornar o valor absoluto de um número negativo', () => { 
    expect(valorAbsoluto(-5)).toBe(5);
    expect(valorAbsoluto(5)).toBe(5);
    expect(valorAbsoluto(0)).toBe(0);
    expect(valorAbsoluto(-100)).toBe(100);
    expect(valorAbsoluto(-1)).toBe(1);
  });
  test('14. deve arredondar um número para cima', () => { 
    expect(arredondar(9.8)).toBe(10);
    expect(arredondar(9.4)).toBe(9);
    expect(arredondar(9.5)).toBe(10);
    expect(arredondar(1.5)).toBe(2);
    expect(arredondar(0.6)).toBe(1);
  });
  test('15. deve retornar true para um número par', () => { 
    expect(isPar(100)).toBe(true); 
    expect(isPar(7)).toBe(false);
    expect(isPar(2)).toBe(true);
    expect(isPar(1)).toBe(false);
    expect(isPar(0)).toBe(true);
    expect(isPar(-4)).toBe(true);
    expect(isPar(-3)).toBe(false);
  });
  test('16. deve retornar true para um número ímpar', () => { 
    expect(isImpar(7)).toBe(true);
    expect(isImpar(100)).toBe(false);
    expect(isImpar(1)).toBe(true);
    expect(isImpar(0)).toBe(false);
    expect(isImpar(-5)).toBe(true);
    expect(isImpar(-4)).toBe(false);
  });
  test('17. deve calcular uma porcentagem simples', () => { 
    expect(calcularPorcentagem(50, 200)).toBe(100);
    expect(calcularPorcentagem(25, 100)).toBe(25);
    expect(calcularPorcentagem(10, 100)).toBe(10);
    expect(calcularPorcentagem(0, 100)).toBe(0);
    expect(calcularPorcentagem(100, 50)).toBe(50);
  });
  test('18. deve aumentar um valor em uma porcentagem', () => { 
    expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110);
    expect(aumentarPorcentagem(100, 0)).toBeCloseTo(100);
    expect(aumentarPorcentagem(100, 50)).toBeCloseTo(150);
    expect(aumentarPorcentagem(200, 25)).toBeCloseTo(250);
    expect(aumentarPorcentagem(50, 100)).toBeCloseTo(100);
  });
  test('19. deve diminuir um valor em uma porcentagem', () => { 
    expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90);
    expect(diminuirPorcentagem(100, 0)).toBeCloseTo(100);
    expect(diminuirPorcentagem(100, 50)).toBeCloseTo(50);
    expect(diminuirPorcentagem(200, 25)).toBeCloseTo(150);
    expect(diminuirPorcentagem(50, 50)).toBeCloseTo(25);
  });
  test('20. deve inverter o sinal de um número positivo', () => { 
    expect(inverterSinal(42)).toBe(-42);
    expect(inverterSinal(-42)).toBe(42);
    expect(inverterSinal(100)).toBe(-100);
    expect(inverterSinal(-1)).toBe(1);
    expect(inverterSinal(1)).toBe(-1);
  });
  
  // === Testes para o Bloco 3 (21-30) ===
  test('21. deve calcular o seno de 0', () => { expect(seno(0)).toBe(0); });
  test('22. deve calcular o cosseno de 0', () => { expect(cosseno(0)).toBe(1); });
  test('23. deve calcular a tangente de 0', () => { expect(tangente(0)).toBe(0); });
  test('24. deve calcular o logaritmo natural de Euler', () => { expect(logaritmoNatural(Math.E)).toBe(1); });
  test('25. deve calcular o logaritmo na base 10', () => { expect(logaritmoBase10(100)).toBe(2); });
  test('26. deve arredondar para baixo', () => { 
    expect(arredondarParaBaixo(5.9)).toBe(5);
    expect(arredondarParaBaixo(5.1)).toBe(5);
    expect(arredondarParaBaixo(5.99)).toBe(5);
    expect(arredondarParaBaixo(0.99)).toBe(0);
    expect(arredondarParaBaixo(10.1)).toBe(10);
  });
  test('27. deve arredondar para cima', () => { 
    expect(arredondarParaCima(5.1)).toBe(6);
    expect(arredondarParaCima(5.9)).toBe(6);
    expect(arredondarParaCima(5.0)).toBe(5);
    expect(arredondarParaCima(0.1)).toBe(1);
    expect(arredondarParaCima(10.01)).toBe(11);
  });
  test('28. deve calcular a hipotenusa de um triângulo retângulo', () => { 
    expect(hipotenusa(3, 4)).toBe(5);
    expect(hipotenusa(0, 0)).toBe(0);
    expect(hipotenusa(5, 12)).toBe(13);
    expect(hipotenusa(6, 8)).toBe(10);
    expect(hipotenusa(1, 1)).toBeCloseTo(Math.sqrt(2));
  });
  test('29. deve converter graus para radianos', () => { expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); });
  test('30. deve converter radianos para graus', () => { expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); });

  // === Testes para o Bloco 4 (31-40) ===
  test('31. deve calcular o MDC de dois números', () => { 
    expect(mdc(10, 5)).toBe(5);
    expect(mdc(18, 12)).toBe(6);
    expect(mdc(7, 3)).toBe(1);
    expect(mdc(100, 50)).toBe(50);
    expect(mdc(48, 18)).toBe(6);
  });
  test('32. deve calcular o MMC de dois números', () => { 
    expect(mmc(10, 5)).toBe(10);
    expect(mmc(4, 6)).toBe(12);
    expect(mmc(3, 5)).toBe(15);
    expect(mmc(12, 18)).toBe(36);
    expect(mmc(7, 8)).toBe(56);
  });
  test('33. deve verificar que um número é primo', () => { 
    expect(isPrimo(7)).toBe(true);
    expect(isPrimo(2)).toBe(true);
    expect(isPrimo(4)).toBe(false);
    expect(isPrimo(1)).toBe(false);
    expect(isPrimo(13)).toBe(true);
    expect(isPrimo(15)).toBe(false);
  });
  test('34. deve calcular o 10º termo de Fibonacci', () => { 
    expect(fibonacci(10)).toBe(55);
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(8)).toBe(21);
  });
  test('35. deve calcular o produto de um array', () => { 
    expect(produtoArray([2, 3, 4])).toBe(24);
    expect(produtoArray([1, 1, 1])).toBe(1);
    expect(produtoArray([5])).toBe(5);
    expect(produtoArray([0, 10, 20])).toBe(0);
    expect(produtoArray([2, 2, 2, 2])).toBe(16);
  });
  test('36. deve manter um valor dentro de um intervalo (clamp)', () => { 
    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(15, 0, 10)).toBe(10);
    expect(clamp(-5, 0, 10)).toBe(0);
    expect(clamp(0, 0, 10)).toBe(0);
    expect(clamp(10, 0, 10)).toBe(10);
    expect(clamp(50, 20, 40)).toBe(40);
    expect(clamp(15, 0, 10)).toBe(10);
    expect(clamp(-5, 0, 10)).toBe(0);
    expect(clamp(0, 0, 10)).toBe(0);
    expect(clamp(10, 0, 10)).toBe(10);
  });
  test('37. deve verificar se um número é divisível por outro', () => { 
    expect(isDivisivel(10, 2)).toBe(true);
    expect(isDivisivel(10, 3)).toBe(false);
    expect(isDivisivel(100, 10)).toBe(true);
    expect(isDivisivel(7, 2)).toBe(false);
    expect(isDivisivel(0, 5)).toBe(true);
  });
  test('38. deve converter Celsius para Fahrenheit', () => { 
    expect(celsiusParaFahrenheit(0)).toBe(32);
    expect(celsiusParaFahrenheit(100)).toBe(212);
    expect(celsiusParaFahrenheit(-40)).toBe(-40);
    expect(celsiusParaFahrenheit(10)).toBe(50);
    expect(celsiusParaFahrenheit(37)).toBeCloseTo(98.6);
  });
  test('39. deve converter Fahrenheit para Celsius', () => { 
    expect(fahrenheitParaCelsius(32)).toBe(0);
    expect(fahrenheitParaCelsius(212)).toBe(100);
    expect(fahrenheitParaCelsius(68)).toBe(20);
    expect(fahrenheitParaCelsius(98.6)).toBeCloseTo(37);
    expect(fahrenheitParaCelsius(-40)).toBe(-40);
  });
  test('40. deve calcular o inverso de um número', () => { 
    expect(inverso(4)).toBe(0.25);
    expect(inverso(2)).toBe(0.5);
    expect(inverso(1)).toBe(1);
    expect(inverso(5)).toBe(0.2);
    expect(inverso(10)).toBe(0.1);
    expect(inverso(4)).toBe(0.25);
    expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.');
  });

  // === Testes para o Bloco 5 (41-50) ===
  test('41. deve calcular a área de um círculo', () => { 
    expect(areaCirculo(10)).toBeCloseTo(314.159);
    expect(areaCirculo(0)).toBe(0);
    expect(areaCirculo(5)).toBeCloseTo(78.539);
    expect(areaCirculo(1)).toBeCloseTo(Math.PI);
    expect(areaCirculo(2)).toBeCloseTo(12.566);
  });
  test('42. deve calcular a área de um retângulo', () => { 
    expect(areaRetangulo(5, 4)).toBe(20);
    expect(areaRetangulo(10, 10)).toBe(100);
    expect(areaRetangulo(1, 1)).toBe(1);
    expect(areaRetangulo(0, 5)).toBe(0);
    expect(areaRetangulo(100, 2)).toBe(200);
  });
  test('43. deve calcular o perímetro de um retângulo', () => { 
    expect(perimetroRetangulo(5, 4)).toBe(18);
    expect(perimetroRetangulo(10, 10)).toBe(40);
    expect(perimetroRetangulo(1, 1)).toBe(4);
    expect(perimetroRetangulo(5, 5)).toBe(20);
    expect(perimetroRetangulo(100, 0)).toBe(200);
  });
  test('44. deve verificar se um número é maior que outro', () => { 
    expect(isMaiorQue(10, 5)).toBe(true);
    expect(isMaiorQue(5, 10)).toBe(false);
    expect(isMaiorQue(5, 5)).toBe(false);
    expect(isMaiorQue(100, 1)).toBe(true);
    expect(isMaiorQue(-1, -2)).toBe(true);
  });
  test('45. deve verificar se um número é menor que outro', () => { 
    expect(isMenorQue(5, 10)).toBe(true);
    expect(isMenorQue(10, 5)).toBe(false);
    expect(isMenorQue(5, 5)).toBe(false);
    expect(isMenorQue(1, 100)).toBe(true);
    expect(isMenorQue(-2, -1)).toBe(true);
  });
  test('46. deve verificar se dois números são iguais', () => { 
    expect(isEqual(7, 7)).toBe(true);
    expect(isEqual(7, 8)).toBe(false);
    expect(isEqual(0, 0)).toBe(true);
    expect(isEqual(-5, -5)).toBe(true);
    expect(isEqual(100, 100)).toBe(true);
    expect(isEqual(100, 99)).toBe(false);
  });
  test('47. deve calcular a mediana de um array ímpar e ordenado', () => { 
    expect(medianaArray([1, 2, 3, 4, 5])).toBe(3);
    expect(medianaArray([1, 2, 3])).toBe(2);
    expect(medianaArray([5])).toBe(5);
    expect(medianaArray([10, 20, 30, 40, 50])).toBe(30);
    expect(medianaArray([1, 3, 5, 7, 9])).toBe(5);
    expect(medianaArray([10, 1, 5])).toBe(5);
    expect(medianaArray([1, 2, 3, 4])).toBe(2.5);
    expect(() => medianaArray([])).toThrow('Array vazio не possui mediana.');
  });
  test('48. deve calcular o dobro de um número', () => { 
    expect(dobro(10)).toBe(20);
    expect(dobro(5)).toBe(10);
    expect(dobro(0)).toBe(0);
    expect(dobro(-5)).toBe(-10);
    expect(dobro(100)).toBe(200);
  });
  test('49. deve calcular o triplo de um número', () => { 
    expect(triplo(10)).toBe(30);
    expect(triplo(5)).toBe(15);
    expect(triplo(0)).toBe(0);
    expect(triplo(-3)).toBe(-9);
    expect(triplo(7)).toBe(21);
  });
  test('50. deve calcular a metade de um número', () => { 
    expect(metade(20)).toBe(10);
    expect(metade(10)).toBe(5);
    expect(metade(0)).toBe(0);
    expect(metade(-20)).toBe(-10);
    expect(metade(100)).toBe(50);
  });
});