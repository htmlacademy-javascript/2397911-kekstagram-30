const checkLengthString = (str, maxLength) => str.length <= maxLength;

checkLengthString('проверяемая строка', 20);

const isPalindrome = (str) => {
  const strWithoutSpace = str.replaceAll(' ', '').toLowerCase();
  let strReverse = '';
  for (let i = strWithoutSpace.length - 1; i >= 0; i--) {
    strReverse += strWithoutSpace[i];
  }
  return strReverse === strWithoutSpace;
};

isPalindrome('топот');

const toIntNumber = (str) => {
  const newStr = str.toString().replaceAll(' ', '');
  let res = '';
  for (let i = 0; i < newStr.length; i++) {
    if (!Number.isNaN(Number(newStr[i]))) {
      res += newStr[i];
    }
  }

  return parseInt(res, 10) || NaN;
};

toIntNumber('2023 год');

const workTimeBalance = (startWorkDay, endWorkDay, startMeeting, continueMeeting) => {
  const timeInMinutes = (stringTime) => {
    const arrayTime = stringTime.split(':');
    return +arrayTime[0] * 60 + +arrayTime[1];
  };
  const startDayTime = timeInMinutes(startWorkDay);
  const endDayTime = timeInMinutes(endWorkDay);
  const startMeetingTime = timeInMinutes(startMeeting);
  const endMeetingTime = startMeetingTime + continueMeeting;

  if (startDayTime <= startMeetingTime && endDayTime >= endMeetingTime) {
    return true;
  }
  return false;
};

workTimeBalance('08:00', '17:30', '14:00', 90);
