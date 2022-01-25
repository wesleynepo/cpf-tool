
const randomDigit = () => Math.floor(Math.random() * 10)

const generateVerifyDigit = (numbers: number[]) => {
    const sum = numbers.reduce((previous, current, index) => previous += current * (numbers.length + 1 - index), 0)
    const remainder = 11 - (sum % 11)
    
    return remainder < 10 ? remainder : 0
}

export const randomCPF = () => {
    const digits = Array(9).fill(0).map( _ => randomDigit())

    digits.push(generateVerifyDigit(digits))
    digits.push(generateVerifyDigit(digits))

    return digits.join('')
}
