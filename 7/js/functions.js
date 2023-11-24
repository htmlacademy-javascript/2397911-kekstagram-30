function checkLengthString(str, maxLength) {
  return str.length <= maxLength;
}

checkLengthString('проверяемая строка', 20);
// console.log(checkLengthString('проверяемая строка', 20)); // true
// console.log(checkLengthString('проверяемая строка', 18)); // true
// console.log(checkLengthString('проверяемая строка', 10)); // false

function isPalindrome(str) {
  const strWithoutSpace = str.replaceAll(' ', '').toLowerCase();
  let strReverse = '';
  for (let i = strWithoutSpace.length - 1; i >= 0; i--) {
    strReverse += strWithoutSpace[i];
  }
  return strReverse === strWithoutSpace;
}

isPalindrome('топот');
// console.log(isPalindrome('топот')); // true
// console.log(isPalindrome('ДовОд')); // true
// console.log(isPalindrome('Кекс'));  // false
// console.log(isPalindrome('Лёша на полке клопа нашёл '));  // true

function toIntNumber(str) {
  const newStr = str.toString().replaceAll(' ', '');
  let res = '';
  for (let i = 0; i < newStr.length; i++) {
    if (!Number.isNaN(Number(newStr[i]))) {
      res += newStr[i];
    }
  }

  return parseInt(res, 10) || NaN;
}

toIntNumber('2023 год');
// console.log(toIntNumber('2023 год'));            // 2023
// console.log(toIntNumber('ECMAScript 2022'));     // 2022
// console.log(toIntNumber('1 кефир, 0.5 батона')); // 105
// console.log(toIntNumber('агент 007'));           // 7
// console.log(toIntNumber('а я томат'));           // NaN
// console.log(toIntNumber(2023)); // 2023
// console.log(toIntNumber(-1));   // 1
// console.log(toIntNumber(1.5));  // 15

function workTimeBalance(startWorkDay, endWorkDay, startMeeting, continueMeeting) { //eslint-disable-line no-unused-vars
  function timeinMinutes(stringTime) {
    const arrayTime = stringTime.split(':');
    return +arrayTime[0] * 60 + +arrayTime[1];
  }
  const startDayTime = timeinMinutes(startWorkDay);
  const endDayTime = timeinMinutes(endWorkDay);
  const startMeetingTime = timeinMinutes(startMeeting);
  const endMeetingTime = startMeetingTime + continueMeeting;

  if (startDayTime <= startMeetingTime && endDayTime >= endMeetingTime) {
    return true;
  }
  return false;
}

workTimeBalance('08:00', '17:30', '14:00', 90);
// console.log(workTimeBalance('08:00', '17:30', '14:00', 90)); // true
// console.log(workTimeBalance('8:0', '10:0', '8:0', 120)); // true
// console.log(workTimeBalance('08:00', '14:30', '14:00', 90)); // false
// console.log(workTimeBalance('14:00', '17:30', '08:0', 90)); // false
// console.log(workTimeBalance('8:00', '17:30', '08:00', 900)); // false

