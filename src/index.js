module.exports = function toReadable(number) {
    const arrFirst = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 
                    'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',];
    
    const arrSecond = ['hundred', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',];


// Задаем условие для чисел от 1 до 19
if (number >= 0 && number < 20) return arrFirst[number];


// Задаем условие для чисел от 20 до 99
if (number >= 20 && number < 100) {
    let resFirst = Math.floor(number / 10);
        if (number % 10 != 0) return `${arrFirst[resFirst]} ${arrFirst[number % 10]}`;
    
else return arrSecond[resFirst];
}

// Задаем условие для чисел от 99 до 999
else if (number > 99 && number < 1000) {
    let resFirst = Math.floor(number / 100);
    let resSecond = Math.floor(number % 100 / 10);
    let resThird = number % 10;
}
if (resSecond != 0 && resThird != 0) {
    if (resSecond == 1) return `${arrFirst[resFirst]} ${arrSecond[0]} ${arrFirst[[resThird + 10]]}`;
    else return `${arrFirst[resFirst]} ${arrSecond[0]} ${arrSecond[resSecond]} ${arrFirst[resThird]}`;
};

if (resSecond == 0 && resThird != 0) return `${arrFirst[resFirst]} ${arr_2[0]} ${arrFirst[resThird]}`;
        if (resSecond != 0 && resThird == 0) return `${arrFirst[resFirst]} ${arrSecond[0]} ${arrSecond[resSecond]}`;
        if (resSecond == 0 && resThird == 0) return `${arrFirst[resFirst]} ${arrSecond[0]}`;
}