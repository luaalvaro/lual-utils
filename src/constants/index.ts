export const maskPhoneNumbersFormats: {
  [key: string]: (number: string) => string
} = {
  '1': (number) =>
    `+${number[0]} (${number.slice(1, 4)}) ${number.slice(4, 7)}-${number.slice(7)}`, // Estados Unidos e Canadá
  '20': (number) =>
    `+20 ${number.slice(2, 4)} ${number.slice(4, 7)} ${number.slice(7)}`, // Egito
  '27': (number) =>
    `+27 ${number.slice(2, 4)} ${number.slice(4, 7)} ${number.slice(7)}`, // África do Sul
  '30': (number) =>
    `+30 ${number.slice(2, 4)} ${number.slice(4, 7)} ${number.slice(7)}`, // Grécia
  '33': (number) =>
    `+33 ${number.slice(2, 3)} ${number.slice(3, 5)} ${number.slice(5, 7)} ${number.slice(7)}`, // França
  '34': (number) =>
    `+34 ${number.slice(2, 4)} ${number.slice(4, 7)} ${number.slice(7)}`, // Espanha
  '39': (number) =>
    `+39 ${number.slice(2, 4)} ${number.slice(4, 7)} ${number.slice(7)}`, // Itália
  '44': (number) =>
    `+44 ${number.slice(2, 4)} ${number.slice(4, 8)} ${number.slice(8)}`, // Reino Unido
  '49': (number) =>
    `+49 ${number.slice(2, 4)} ${number.slice(4, 8)} ${number.slice(8)}`, // Alemanha
  '52': (number) =>
    `+52 ${number.slice(2, 4)} ${number.slice(4, 8)} ${number.slice(8)}`, // México
  '55': (number) => {
    const DDD = number.slice(2, 4)
    const part1 = number.length === 12 ? number.slice(4, 8) : number.slice(4, 9)
    const part2 = number.length === 12 ? number.slice(8) : number.slice(9)
    return `+55 ${DDD} ${part1} ${part2}`
  }, // Brasil
  '61': (number) =>
    `+61 ${number.slice(2, 3)} ${number.slice(3, 7)} ${number.slice(7)}`, // Austrália
  '62': (number) =>
    `+62 ${number.slice(2, 4)} ${number.slice(4, 8)} ${number.slice(8)}`, // Indonésia
  '66': (number) =>
    `+66 ${number.slice(2, 4)} ${number.slice(4, 7)} ${number.slice(7)}`, // Tailândia
  '81': (number) =>
    `+81 ${number.slice(2, 3)} ${number.slice(3, 7)} ${number.slice(7)}`, // Japão
  '82': (number) =>
    `+82 ${number.slice(2, 4)} ${number.slice(4, 8)} ${number.slice(8)}`, // Coreia do Sul
  '84': (number) =>
    `+84 ${number.slice(2, 4)} ${number.slice(4, 7)} ${number.slice(7)}`, // Vietnã
  '90': (number) =>
    `+90 ${number.slice(2, 4)} ${number.slice(4, 7)} ${number.slice(7)}`, // Turquia
  '91': (number) =>
    `+91 ${number.slice(2, 4)} ${number.slice(4, 8)} ${number.slice(8)}`, // Índia
  '92': (number) =>
    `+92 ${number.slice(2, 4)} ${number.slice(4, 7)} ${number.slice(7)}`, // Paquistão
  '98': (number) =>
    `+98 ${number.slice(2, 4)} ${number.slice(4, 7)} ${number.slice(7)}`, // Irã
  '351': (number) =>
    `+351 ${number.slice(3, 5)} ${number.slice(5, 8)} ${number.slice(8)}`, // Portugal
  '352': (number) =>
    `+352 ${number.slice(3, 5)} ${number.slice(5, 8)} ${number.slice(8)}`, // Luxemburgo
  '353': (number) =>
    `+353 ${number.slice(3, 5)} ${number.slice(5, 8)} ${number.slice(8)}`, // Irlanda
  '354': (number) =>
    `+354 ${number.slice(3, 5)} ${number.slice(5, 8)} ${number.slice(8)}`, // Islândia
  '355': (number) =>
    `+355 ${number.slice(3, 5)} ${number.slice(5, 8)} ${number.slice(8)}`, // Albânia
  '966': (number) =>
    `+966 ${number.slice(3, 5)} ${number.slice(5, 8)} ${number.slice(8)}`, // Arábia Saudita
  '972': (number) =>
    `+972 ${number.slice(3, 5)} ${number.slice(5, 8)} ${number.slice(8)}`, // Israel
  '973': (number) =>
    `+973 ${number.slice(3, 5)} ${number.slice(5, 8)} ${number.slice(8)}`, // Bahrain
  '974': (number) =>
    `+974 ${number.slice(3, 5)} ${number.slice(5, 8)} ${number.slice(8)}`, // Catar
}
