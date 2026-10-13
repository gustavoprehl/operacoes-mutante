# Mutantes da execução final do Stryker

## Resumo

| Métrica | Valor |
|---|---|
| Mutation score (total) | 98.12% |
| Mutation score (só código coberto) | 98.12% |
| Total de mutantes | 213 |
| Killed | 206 |
| Survived | 4 |
| NoCoverage | 0 |
| Timeout | 3 |
| RuntimeError | 0 |
| CompileError | 0 |

## Mutantes sobreviventes (4)

| ID | Arquivo | Linha:Col | Mutador | Código original | Código mutado |
|---|---|---|---|---|---|
| 31 | src/operacoes.js | 19:7 | ConditionalExpression | `if (n === 0 \|\| n === 1) return 1;` | `if (false) return 1;` |
| 32 | src/operacoes.js | 19:7 | LogicalOperator | `if (n === 0 \|\| n === 1) return 1;` | `if (n === 0 && n === 1) return 1;` |
| 33 | src/operacoes.js | 19:7 | ConditionalExpression | `if (n === 0 \|\| n === 1) return 1;` | `if (false \|\| n === 1) return 1;` |
| 35 | src/operacoes.js | 19:18 | ConditionalExpression | `if (n === 0 \|\| n === 1) return 1;` | `if (n === 0 \|\| false) return 1;` |

## Mutantes sem cobertura (NoCoverage) (0)

Nenhum.

## Mutantes equivalentes restantes

Os 4 sobreviventes estão todos na guarda `if (n === 0 || n === 1) return 1;` de `fatorial` (linha 19).
São equivalentes: se a guarda for removida ou enfraquecida, para `n = 0` ou `n = 1` o laço
`for (let i = 2; i <= n; i++)` não executa nenhuma iteração e a função retorna `resultado = 1`,
exatamente o mesmo valor. Nenhuma entrada distingue o mutante do original, então nenhum teste
consegue matá-los. A guarda é só um atalho de desempenho.

## Antes × depois

| Métrica | Antes | Depois |
|---|---|---|
| Testes | 50 | 79 |
| Cobertura de linhas | 98,64% | 100% |
| Cobertura de branches | 58,82% | 100% |
| Cobertura de statements | 85,41% | 100% |
| Mutation score (total) | 73,71% | 98,12% |
| Killed | 154 | 206 |
| Timeout | 3 | 3 |
| Survived | 44 | 4 (equivalentes) |
| No coverage | 12 | 0 |
| Total de mutantes | 213 | 213 |

Observação: os mutantes #140, #147 e #151 só puderam ser mortos com entradas de borda
(zero com sinal em `clamp` e array-like vazio em `produtoArray`). Sem esses três testes, o score
final seria 96,71% (206/213).
