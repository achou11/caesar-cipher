const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
const alphabetMap = alphabet.reduce((m, letter, index) => {
  m[letter] = index
  return m
}, {})

const isAlphabetCharacter = char => /^[a-z]+$/i.test(char)

const convertInput = input => input.toLowerCase().split('')

const cipherize = (input, getShiftedValue) => convertInput(input).map(character => {
  if (isAlphabetCharacter(character)) {
    return getShiftedValue(character)
  }
  return character
}).join('')

const encrypt = (input, key) => cipherize(input, char => alphabet[(alphabetMap[char] + key) % alphabet.length])

const decrypt = (input, key) => cipherize(input, char => {
  const shiftedIndex = alphabetMap[char] - key
  return alphabet[(shiftedIndex >= 0 ? shiftedIndex : shiftedIndex + alphabet.length) % alphabet.length]
})

