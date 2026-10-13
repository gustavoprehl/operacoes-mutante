# Mutantes da execução inicial do Stryker

## Resumo

| Métrica | Valor |
|---|---|
| Mutation score (total) | 73.71% |
| Mutation score (só código coberto) | 78.11% |
| Total de mutantes | 213 |
| Killed | 154 |
| Survived | 44 |
| NoCoverage | 12 |
| Timeout | 3 |
| RuntimeError | 0 |
| CompileError | 0 |

## Mutantes sobreviventes (44)

| ID | Arquivo | Linha:Col | Mutador | Código original | Código mutado |
|---|---|---|---|---|---|
| 11 | src/operacoes.js | 8:32 | StringLiteral | `if (b === 0) throw new Error('Divisão por zero não é permitida.');` | `if (b === 0) throw new Error("");` |
| 16 | src/operacoes.js | 13:7 | ConditionalExpression | `if (n < 0) throw new Error('Não é possível calcular a raiz quadrada de um número negativo.');` | `if (false) throw new Error('Não é possível calcular a raiz quadrada de um número negativo.');` |
| 17 | src/operacoes.js | 13:7 | EqualityOperator | `if (n < 0) throw new Error('Não é possível calcular a raiz quadrada de um número negativo.');` | `if (n <= 0) throw new Error('Não é possível calcular a raiz quadrada de um número negativo.');` |
| 25 | src/operacoes.js | 18:7 | ConditionalExpression | `if (n < 0) throw new Error('Fatorial não é definido para números negativos.');` | `if (false) throw new Error('Fatorial não é definido para números negativos.');` |
| 26 | src/operacoes.js | 18:7 | EqualityOperator | `if (n < 0) throw new Error('Fatorial não é definido para números negativos.');` | `if (n <= 0) throw new Error('Fatorial não é definido para números negativos.');` |
| 31 | src/operacoes.js | 19:7 | ConditionalExpression | `if (n === 0 \|\| n === 1) return 1;` | `if (false) return 1;` |
| 32 | src/operacoes.js | 19:7 | LogicalOperator | `if (n === 0 \|\| n === 1) return 1;` | `if (n === 0 && n === 1) return 1;` |
| 33 | src/operacoes.js | 19:7 | ConditionalExpression | `if (n === 0 \|\| n === 1) return 1;` | `if (false \|\| n === 1) return 1;` |
| 35 | src/operacoes.js | 19:18 | ConditionalExpression | `if (n === 0 \|\| n === 1) return 1;` | `if (n === 0 \|\| false) return 1;` |
| 45 | src/operacoes.js | 25:7 | ConditionalExpression | `if (numeros.length === 0) return 0;` | `if (false) return 0;` |
| 53 | src/operacoes.js | 34:7 | ConditionalExpression | `if (numeros.length === 0) throw new Error('Array vazio не possui valor máximo.');` | `if (false) throw new Error('Array vazio не possui valor máximo.');` |
| 60 | src/operacoes.js | 38:7 | ConditionalExpression | `if (numeros.length === 0) throw new Error('Array vazio не possui valor mínimo.');` | `if (false) throw new Error('Array vazio не possui valor mínimo.');` |
| 68 | src/operacoes.js | 43:28 | ConditionalExpression | `function isPar(n) { return n % 2 === 0; }` | `function isPar(n) { return true; }` |
| 73 | src/operacoes.js | 44:30 | ConditionalExpression | `function isImpar(n) { return n % 2 !== 0; }` | `function isImpar(n) { return true; }` |
| 76 | src/operacoes.js | 44:30 | ArithmeticOperator | `function isImpar(n) { return n % 2 !== 0; }` | `function isImpar(n) { return n * 2 !== 0; }` |
| 115 | src/operacoes.js | 73:7 | ConditionalExpression | `if (n <= 1) return false;` | `if (false) return false;` |
| 116 | src/operacoes.js | 73:7 | EqualityOperator | `if (n <= 1) return false;` | `if (n < 1) return false;` |
| 119 | src/operacoes.js | 74:19 | ConditionalExpression | `for (let i = 2; i < n; i++) {` | `for (let i = 2; false; i++) {` |
| 121 | src/operacoes.js | 74:19 | EqualityOperator | `for (let i = 2; i < n; i++) {` | `for (let i = 2; i >= n; i++) {` |
| 123 | src/operacoes.js | 74:31 | BlockStatement | `for (let i = 2; i < n; i++) { if (n % i === 0) return false; }` | `for (let i = 2; i < n; i++) {}` |
| 125 | src/operacoes.js | 75:9 | ConditionalExpression | `if (n % i === 0) return false;` | `if (false) return false;` |
| 127 | src/operacoes.js | 75:9 | ArithmeticOperator | `if (n % i === 0) return false;` | `if (n * i === 0) return false;` |
| 140 | src/operacoes.js | 84:7 | ConditionalExpression | `if (numeros.length === 0) return 1;` | `if (false) return 1;` |
| 146 | src/operacoes.js | 88:7 | ConditionalExpression | `if (valor < min) return min;` | `if (false) return min;` |
| 147 | src/operacoes.js | 88:7 | EqualityOperator | `if (valor < min) return min;` | `if (valor <= min) return min;` |
| 150 | src/operacoes.js | 89:7 | ConditionalExpression | `if (valor > max) return max;` | `if (false) return max;` |
| 151 | src/operacoes.js | 89:7 | EqualityOperator | `if (valor > max) return max;` | `if (valor >= max) return max;` |
| 154 | src/operacoes.js | 92:51 | ConditionalExpression | `function isDivisivel(dividendo, divisor) { return dividendo % divisor === 0; }` | `function isDivisivel(dividendo, divisor) { return true; }` |
| 160 | src/operacoes.js | 93:51 | ArithmeticOperator | `function celsiusParaFahrenheit(celsius) { return (celsius * 9/5) + 32; }` | `function celsiusParaFahrenheit(celsius) { return (celsius * 9 * 5) + 32; }` |
| 161 | src/operacoes.js | 93:51 | ArithmeticOperator | `function celsiusParaFahrenheit(celsius) { return (celsius * 9/5) + 32; }` | `function celsiusParaFahrenheit(celsius) { return (celsius / 9/5) + 32; }` |
| 163 | src/operacoes.js | 94:53 | ArithmeticOperator | `function fahrenheitParaCelsius(fahrenheit) { return (fahrenheit - 32) * 5/9; }` | `function fahrenheitParaCelsius(fahrenheit) { return (fahrenheit - 32) * 5 * 9; }` |
| 164 | src/operacoes.js | 94:53 | ArithmeticOperator | `function fahrenheitParaCelsius(fahrenheit) { return (fahrenheit - 32) * 5/9; }` | `function fahrenheitParaCelsius(fahrenheit) { return (fahrenheit - 32) / 5/9; }` |
| 168 | src/operacoes.js | 96:7 | ConditionalExpression | `if (n === 0) throw new Error('Não é possível inverter o número zero.');` | `if (false) throw new Error('Não é possível inverter o número zero.');` |
| 181 | src/operacoes.js | 104:36 | ConditionalExpression | `function isMaiorQue(a, b) { return a > b; }` | `function isMaiorQue(a, b) { return true; }` |
| 183 | src/operacoes.js | 104:36 | EqualityOperator | `function isMaiorQue(a, b) { return a > b; }` | `function isMaiorQue(a, b) { return a >= b; }` |
| 186 | src/operacoes.js | 105:36 | ConditionalExpression | `function isMenorQue(a, b) { return a < b; }` | `function isMenorQue(a, b) { return true; }` |
| 188 | src/operacoes.js | 105:36 | EqualityOperator | `function isMenorQue(a, b) { return a < b; }` | `function isMenorQue(a, b) { return a <= b; }` |
| 191 | src/operacoes.js | 106:33 | ConditionalExpression | `function isEqual(a, b) { return a === b; }` | `function isEqual(a, b) { return true; }` |
| 196 | src/operacoes.js | 108:7 | ConditionalExpression | `if (numeros.length === 0) throw new Error('Array vazio не possui mediana.');` | `if (false) throw new Error('Array vazio не possui mediana.');` |
| 200 | src/operacoes.js | 109:18 | MethodExpression | `const sorted = [...numeros].sort((a, b) => a - b);` | `const sorted = [...numeros];` |
| 202 | src/operacoes.js | 109:36 | ArrowFunction | `const sorted = [...numeros].sort((a, b) => a - b);` | `const sorted = [...numeros].sort(() => undefined);` |
| 203 | src/operacoes.js | 109:46 | ArithmeticOperator | `const sorted = [...numeros].sort((a, b) => a - b);` | `const sorted = [...numeros].sort((a, b) => a + b);` |
| 206 | src/operacoes.js | 111:7 | ConditionalExpression | `if (sorted.length % 2 === 0) {` | `if (false) {` |
| 208 | src/operacoes.js | 111:7 | ArithmeticOperator | `if (sorted.length % 2 === 0) {` | `if (sorted.length * 2 === 0) {` |

## Mutantes sem cobertura (NoCoverage) (12)

| ID | Arquivo | Linha:Col | Mutador | Código original | Código mutado |
|---|---|---|---|---|---|
| 20 | src/operacoes.js | 13:30 | StringLiteral | `if (n < 0) throw new Error('Não é possível calcular a raiz quadrada de um número negativo.');` | `if (n < 0) throw new Error("");` |
| 29 | src/operacoes.js | 18:30 | StringLiteral | `if (n < 0) throw new Error('Fatorial não é definido para números negativos.');` | `if (n < 0) throw new Error("");` |
| 56 | src/operacoes.js | 34:45 | StringLiteral | `if (numeros.length === 0) throw new Error('Array vazio не possui valor máximo.');` | `if (numeros.length === 0) throw new Error("");` |
| 63 | src/operacoes.js | 38:45 | StringLiteral | `if (numeros.length === 0) throw new Error('Array vazio не possui valor mínimo.');` | `if (numeros.length === 0) throw new Error("");` |
| 118 | src/operacoes.js | 73:22 | BooleanLiteral | `if (n <= 1) return false;` | `if (n <= 1) return true;` |
| 128 | src/operacoes.js | 75:29 | BooleanLiteral | `if (n % i === 0) return false;` | `if (n % i === 0) return true;` |
| 171 | src/operacoes.js | 96:32 | StringLiteral | `if (n === 0) throw new Error('Não é possível inverter o número zero.');` | `if (n === 0) throw new Error("");` |
| 199 | src/operacoes.js | 108:45 | StringLiteral | `if (numeros.length === 0) throw new Error('Array vazio не possui mediana.');` | `if (numeros.length === 0) throw new Error("");` |
| 209 | src/operacoes.js | 111:32 | BlockStatement | `if (sorted.length % 2 === 0) { return (sorted[mid - 1] + sorted[mid]) / 2; }` | `if (sorted.length % 2 === 0) {}` |
| 210 | src/operacoes.js | 112:12 | ArithmeticOperator | `return (sorted[mid - 1] + sorted[mid]) / 2;` | `return (sorted[mid - 1] + sorted[mid]) * 2;` |
| 211 | src/operacoes.js | 112:13 | ArithmeticOperator | `return (sorted[mid - 1] + sorted[mid]) / 2;` | `return (sorted[mid - 1] - sorted[mid]) / 2;` |
| 212 | src/operacoes.js | 112:20 | ArithmeticOperator | `return (sorted[mid - 1] + sorted[mid]) / 2;` | `return (sorted[mid + 1] + sorted[mid]) / 2;` |

## Mutantes escolhidos para o relatório

### 1. Mutante #17 – EqualityOperator (src/operacoes.js:13:7) – `raizQuadrada`
- Original: `if (n < 0) throw ...` → Mutado: `if (n <= 0) throw ...`
- Por que sobreviveu: o único teste de `raizQuadrada` usa `n = 16`, valor longe da fronteira da condição. Para qualquer `n > 0` as duas versões se comportam igual; a diferença só aparece em `n = 0`, que deveria retornar `0` e, no mutante, lança erro. Falta o caso de borda — e também não há nenhum teste com negativo, por isso o mutante #16 (`if (false)`) também sobreviveu.
- Figura: `figuras/mutante-17-raiz.png`

### 2. Mutante #160 – ArithmeticOperator (src/operacoes.js:93:51) – `celsiusParaFahrenheit`
- Original: `(celsius * 9/5) + 32` → Mutado: `(celsius * 9 * 5) + 32`
- Por que sobreviveu: o teste usa `celsius = 0`, e zero anula qualquer fator multiplicativo: `0 * 9/5` e `0 * 9 * 5` dão `0`, então o resultado é `32` nas duas versões. A entrada escolhida mascara a mutação; o teste só verifica a parcela `+ 32`. O mesmo problema ocorre em `fahrenheitParaCelsius(32)` (mutantes #163 e #164).
- Figura: `figuras/mutante-160-celsius.png`

### 3. Mutante #191 – ConditionalExpression (src/operacoes.js:106:33) – `isEqual`
- Original: `return a === b;` → Mutado: `return true;`
- Por que sobreviveu: o único teste é `isEqual(7, 7) === true`, ou seja, só o caminho positivo é verificado. Uma função que sempre retorna `true` passa nesse teste. Falta o caso negativo (`isEqual(7, 8) === false`). O mesmo padrão (só caso positivo) explica os sobreviventes de `isPar`, `isImpar`, `isDivisivel`, `isMaiorQue`, `isMenorQue` e `isPrimo`.
- Figura: `figuras/mutante-191-isequal.png`
