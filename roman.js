export function decimalParaRomano(numero) {
  const romanos = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI'
  };

  return romanos[numero];
}