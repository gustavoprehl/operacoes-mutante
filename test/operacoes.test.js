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
  test('1. deve somar dois números positivos', () => { expect(soma(2, 3)).toBe(5); });
  test('2. deve subtrair dois números positivos', () => { expect(subtracao(5, 2)).toBe(3); });
  test('3. deve multiplicar dois números positivos', () => { expect(multiplicacao(3, 4)).toBe(12); });
  test('4. deve dividir e lançar erro para divisão por zero', () => {
    expect(divisao(10, 2)).toBe(5);
    expect(() => divisao(5, 0)).toThrow();
  });
  test('5. deve calcular a potência com expoente positivo', () => { expect(potencia(2, 3)).toBe(8); });
  test('6. deve calcular a raiz quadrada de um quadrado perfeito', () => { expect(raizQuadrada(16)).toBe(4); });
  test('7. deve retornar o resto da divisão', () => { expect(restoDivisao(10, 3)).toBe(1); });
  test('8. deve calcular o fatorial de um número maior que 1', () => { expect(fatorial(4)).toBe(24); });
  test('9. deve calcular a média de um array com múltiplos elementos', () => { expect(mediaArray([10, 20, 30])).toBe(20); });
  test('10. deve somar um array com múltiplos elementos', () => { expect(somaArray([1, 2, 3])).toBe(6); });

  // === Testes para o Bloco 2 (11-20) ===
  test('11. deve encontrar o valor máximo em um array', () => { expect(maximoArray([1, 50, 10])).toBe(50); });
  test('12. deve encontrar o valor mínimo em um array', () => { expect(minimoArray([10, 2, 100])).toBe(2); });
  test('13. deve retornar o valor absoluto de um número negativo', () => { expect(valorAbsoluto(-5)).toBe(5); });
  test('14. deve arredondar um número para cima', () => { expect(arredondar(9.8)).toBe(10); });
  test('15. deve retornar true para um número par', () => { expect(isPar(100)).toBe(true); });
  test('16. deve retornar true para um número ímpar', () => { expect(isImpar(7)).toBe(true); });
  test('17. deve calcular uma porcentagem simples', () => { expect(calcularPorcentagem(50, 200)).toBe(100); });
  test('18. deve aumentar um valor em uma porcentagem', () => { expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110); });
  test('19. deve diminuir um valor em uma porcentagem', () => { expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90); });
  test('20. deve inverter o sinal de um número positivo', () => { expect(inverterSinal(42)).toBe(-42); });
  
  // === Testes para o Bloco 3 (21-30) ===
  test('21. deve calcular o seno de 0', () => { expect(seno(0)).toBe(0); });
  test('22. deve calcular o cosseno de 0', () => { expect(cosseno(0)).toBe(1); });
  test('23. deve calcular a tangente de 0', () => { expect(tangente(0)).toBe(0); });
  test('24. deve calcular o logaritmo natural de Euler', () => { expect(logaritmoNatural(Math.E)).toBe(1); });
  test('25. deve calcular o logaritmo na base 10', () => { expect(logaritmoBase10(100)).toBe(2); });
  test('26. deve arredondar para baixo', () => { expect(arredondarParaBaixo(5.9)).toBe(5); });
  test('27. deve arredondar para cima', () => { expect(arredondarParaCima(5.1)).toBe(6); });
  test('28. deve calcular a hipotenusa de um triângulo retângulo', () => { expect(hipotenusa(3, 4)).toBe(5); });
  test('29. deve converter graus para radianos', () => { expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); });
  test('30. deve converter radianos para graus', () => { expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); });

  // === Testes para o Bloco 4 (31-40) ===
  test('31. deve calcular o MDC de dois números', () => { expect(mdc(10, 5)).toBe(5); });
  test('32. deve calcular o MMC de dois números', () => { expect(mmc(10, 5)).toBe(10); });
  test('33. deve verificar que um número é primo', () => { expect(isPrimo(7)).toBe(true); });
  test('34. deve calcular o 10º termo de Fibonacci', () => { expect(fibonacci(10)).toBe(55); });
  test('35. deve calcular o produto de um array', () => { expect(produtoArray([2, 3, 4])).toBe(24); });
  test('36. deve manter um valor dentro de um intervalo (clamp)', () => { expect(clamp(5, 0, 10)).toBe(5); });
  test('37. deve verificar se um número é divisível por outro', () => { expect(isDivisivel(10, 2)).toBe(true); });
  test('38. deve converter Celsius para Fahrenheit', () => { expect(celsiusParaFahrenheit(0)).toBe(32); });
  test('39. deve converter Fahrenheit para Celsius', () => { expect(fahrenheitParaCelsius(32)).toBe(0); });
  test('40. deve calcular o inverso de um número', () => { expect(inverso(4)).toBe(0.25); });

  // === Testes para o Bloco 5 (41-50) ===
  test('41. deve calcular a área de um círculo', () => { expect(areaCirculo(10)).toBeCloseTo(314.159); });
  test('42. deve calcular a área de um retângulo', () => { expect(areaRetangulo(5, 4)).toBe(20); });
  test('43. deve calcular o perímetro de um retângulo', () => { expect(perimetroRetangulo(5, 4)).toBe(18); });
  test('44. deve verificar se um número é maior que outro', () => { expect(isMaiorQue(10, 5)).toBe(true); });
  test('45. deve verificar se um número é menor que outro', () => { expect(isMenorQue(5, 10)).toBe(true); });
  test('46. deve verificar se dois números são iguais', () => { expect(isEqual(7, 7)).toBe(true); });
  test('47. deve calcular a mediana de um array ímpar e ordenado', () => { expect(medianaArray([1, 2, 3, 4, 5])).toBe(3); });
  test('48. deve calcular o dobro de um número', () => { expect(dobro(10)).toBe(20); });
  test('49. deve calcular o triplo de um número', () => { expect(triplo(10)).toBe(30); });
  test('50. deve calcular a metade de um número', () => { expect(metade(20)).toBe(10); });
});

// ============================================================================
// Testes adicionados para matar mutantes sobreviventes do StrykerJS.
// Cada comentário indica: mutante #id (linha:coluna em src/operacoes.js, mutador).
// ============================================================================

describe('Bloco 1 – fronteiras e mensagens de erro', () => {
  test('divisão por zero lança a mensagem exata', () => {
    // mata #11 (8:32 StringLiteral): mensagem trocada por ""
    expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
  });

  test('raiz quadrada de zero é zero (fronteira de n < 0)', () => {
    // mata #17 (13:7 EqualityOperator): n < 0 -> n <= 0 lançaria erro para 0
    expect(raizQuadrada(0)).toBe(0);
  });

  test('raiz quadrada de negativo lança a mensagem exata', () => {
    // mata #16 (13:7 ConditionalExpression -> false, retornaria NaN)
    // e #20 (13:30 StringLiteral, mensagem vazia)
    expect(() => raizQuadrada(-4)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.');
  });

  test('fatorial de zero é 1 (fronteira de n < 0)', () => {
    // mata #26 (18:7 EqualityOperator): n < 0 -> n <= 0 lançaria erro para 0
    expect(fatorial(0)).toBe(1);
  });

  test('fatorial de negativo lança a mensagem exata', () => {
    // mata #25 (18:7 ConditionalExpression -> false, retornaria 1)
    // e #29 (18:30 StringLiteral, mensagem vazia)
    expect(() => fatorial(-1)).toThrow('Fatorial não é definido para números negativos.');
  });

  test('média de array vazio é 0, não NaN', () => {
    // mata #45 (25:7 ConditionalExpression -> false): 0 / 0 daria NaN
    expect(mediaArray([])).toBe(0);
  });
});

describe('Bloco 2 – arrays vazios e casos negativos de paridade', () => {
  test('máximo de array vazio lança a mensagem exata', () => {
    // mata #53 (34:7 ConditionalExpression -> false, retornaria -Infinity)
    // e #56 (34:45 StringLiteral, mensagem vazia)
    expect(() => maximoArray([])).toThrow('Array vazio не possui valor máximo.');
  });

  test('mínimo de array vazio lança a mensagem exata', () => {
    // mata #60 (38:7 ConditionalExpression -> false, retornaria Infinity)
    // e #63 (38:45 StringLiteral, mensagem vazia)
    expect(() => minimoArray([])).toThrow('Array vazio не possui valor mínimo.');
  });

  test('isPar retorna false para número ímpar', () => {
    // mata #68 (43:28 ConditionalExpression -> true)
    expect(isPar(7)).toBe(false);
  });

  test('isImpar retorna false para número par diferente de zero', () => {
    // mata #73 (44:30 ConditionalExpression -> true)
    // e #76 (44:30 ArithmeticOperator n % 2 -> n * 2: 4 * 2 !== 0 seria true)
    expect(isImpar(4)).toBe(false);
  });
});

describe('Bloco 4 – primos, clamp, conversões e inverso', () => {
  test('1 não é primo (fronteira de n <= 1)', () => {
    // mata #115 (73:7 ConditionalExpression -> false), #116 (73:7 EqualityOperator n <= 1 -> n < 1)
    // e #118 (73:22 BooleanLiteral false -> true)
    expect(isPrimo(1)).toBe(false);
  });

  test('número composto não é primo', () => {
    // mata #119 (74:19 ConditionalExpression -> false), #121 (74:19 EqualityOperator i < n -> i >= n),
    // #123 (74:31 BlockStatement), #125 (75:9 ConditionalExpression -> false),
    // #127 (75:9 ArithmeticOperator n % i -> n * i) e #128 (75:29 BooleanLiteral false -> true)
    expect(isPrimo(4)).toBe(false);
  });

  test('clamp devolve o mínimo quando o valor está abaixo do intervalo', () => {
    // mata #146 (88:7 ConditionalExpression -> false)
    expect(clamp(-5, 0, 10)).toBe(0);
  });

  test('clamp devolve o máximo quando o valor está acima do intervalo', () => {
    // mata #150 (89:7 ConditionalExpression -> false)
    expect(clamp(15, 0, 10)).toBe(10);
  });

  test('isDivisivel retorna false quando há resto', () => {
    // mata #154 (92:51 ConditionalExpression -> true)
    expect(isDivisivel(10, 3)).toBe(false);
  });

  test('converte 100 °C para 212 °F (entrada diferente de zero)', () => {
    // mata #160 (93:51 ArithmeticOperator 9/5 -> 9*5: daria 932)
    // e #161 (93:51 ArithmeticOperator celsius*9 -> celsius/9: daria 34,22...)
    expect(celsiusParaFahrenheit(100)).toBe(212);
  });

  test('converte 212 °F para 100 °C (entrada diferente de 32)', () => {
    // mata #163 (94:53 ArithmeticOperator 5/9 -> 5*9: daria 8100)
    // e #164 (94:53 ArithmeticOperator (f-32)*5 -> (f-32)/5: daria 4)
    expect(fahrenheitParaCelsius(212)).toBe(100);
  });

  test('inverso de zero lança a mensagem exata', () => {
    // mata #168 (96:7 ConditionalExpression -> false, retornaria Infinity)
    // e #171 (96:32 StringLiteral, mensagem vazia)
    expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.');
  });
});
