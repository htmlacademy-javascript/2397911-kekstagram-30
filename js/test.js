const NAMES = [
  'Иван',
  'Хуан Себастьян',
];
const SURNAMES = [
  'да Марья',
  'Верон',
];
const COAT_COLORS = [
  'rgb(101, 137, 164)',
];
const EYES_COLORS = [
  'black',
];
const SIMILAR_WIZARD_COUNT = 4;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createWizard = () => ({
  name: `${getRandomArrayElement(NAMES) } ${ getRandomArrayElement(SURNAMES)}`,
  coatColor: getRandomArrayElement(COAT_COLORS),
  eyesColor: getRandomArrayElement(EYES_COLORS),
});

const similarWizards = Array.from({length: SIMILAR_WIZARD_COUNT}, createWizard);

console.log(similarWizards);
