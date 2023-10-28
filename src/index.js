module.exports = function toReadable (number) {
    // Задаем объект чисел от 0 до 9 включительно 
            const numbUnits = {
              0: 'zero',
              1: 'one',
              2: 'two',
              3: 'three',
              4: 'four',
              5: 'five',
              6: 'six',
              7: 'seven',
              8: 'eight',
              9: 'nine'
            }
            
          // Задаем объект чисел с десятками
            const Numbdozens = {
              10: 'ten',
              11: 'eleven',
              12: 'twelve',
              13: 'thirteen',
              14: 'fourteen',
              15: 'fifteen',
              16: 'sixteen',
              17: 'seventeen',
              18: 'eighteen',
              19: 'nineteen',
              20: 'twenty',
              30: 'thirty',
              40: 'forty',
              50: 'fifty',
              60: 'sixty',
              70: 'seventy',
              80: 'eighty',
              90: 'ninety'
            }
             //Переменная выводящая результат
          
            let result = ''
           
          //Переменная преобразующая исходное значение в строковое
            let str = number.toString()
           
           // Возврат числа, являющегося единицей
            if (str.length === 1) {
              for (let numbUnit in numbUnits) {
                if (numbUnit == str[0]) {
                  return numbUnits[numbUnit]
                }
              }
            }
           
          // Возврат десятичного числа
            if (str.length === 2) {
              if (str[0] == 1) {
                for (let key in Numbdozens) {
                  if (key == str) {
                    return Numbdozens[key]
                  }
                }
              } else {
                for (let key in Numbdozens) {
                  if (str[0] == key[0]) {
                    result += Numbdozens[key]
                  }
                  if (str[0] == key[0] && str[1] != 0) {
                    for (let numbUnit in numbUnits) {
                      if (str[1] == numbUnit) {
                        return result += ' ' + numbUnits[numbUnit]
                      }
                    }
                  }
                }
              }
            }
            
        
            if (str.length === 3) {
              for (let numbUnit in numbUnits) {
                if (numbUnit == str[0]) {
                  result += numbUnits[numbUnit] + ' ' + 'hundred'
                }
              }
              
              if (str[1] == 0 && str[2] != 0) {
                for (let numbUnit in numbUnits) {
                  if (numbUnit == str[2]) {
                    return result += ' ' + numbUnits[numbUnit]
                  }
                }
              }
              
              if (str[1] == 1) {
                for (let key in Numbdozens) {
                  if (key[1] == str[2]) {
                    return result += ' ' + Numbdozens[key]
                  }
                }
              } else {
                for (let key in Numbdozens) {
                  if (str[1] == key[0]) {
                    result += ' ' + Numbdozens[key]
                  }
                  if (str[1] == key[0] && str[2] != 0) {
                    for (let numbUnit in numbUnits) {
                      if (str[2] == numbUnit) {
                        result += ' ' + numbUnits[numbUnit]
                      }
                    }
                  }
                }
              }
            }
          
            return (result);
        }