function checkLengthString(str, maxLength) {
  return str.length <= maxLength;
}

checkLengthString('проверяемая строка', 20);

function isPalindrome(str) {
  const strWithoutSpace = str.replaceAll(' ', '').toLowerCase();
  let strReverse = '';
  for (let i = strWithoutSpace.length - 1; i >= 0; i--) {
    strReverse += strWithoutSpace[i];
  }
  return strReverse === strWithoutSpace;
}

isPalindrome('топот');

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
