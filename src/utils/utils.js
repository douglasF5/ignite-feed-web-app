export function composeVariant(variantClasses, options) {
  const classList = [];

  for (let option in options) {
    const variableAxisName = option;
    const variableAxisValue = options[option];

    classList.push(variantClasses[variableAxisName][variableAxisValue]);
  }

  return classList.join(" ");
};

export function composeClasses(classList) {
  return classList.filter(className => className !== null).join(" ");
};

export function generateQuickId(prefix) {
  const lettersMap = ['q', 'u', 'i', 'c', 'k'];
  const loopRounds = Math.floor(Math.random() * (6 - 3) + 3);
  let idTail = '';

  for (let i = 1; i <= loopRounds; i++) {
    const optionIndex = Math.floor(Math.random() * 2);
    let character = '';

    if (optionIndex) {
      character = lettersMap[Math.floor(Math.random() * lettersMap.length)];
    } else {
      character = String(Math.floor(Math.random() * 10));
    }

    idTail += character;
  }

  return prefix + idTail.padStart(5, '0');
}