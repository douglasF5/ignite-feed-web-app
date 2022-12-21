export function composeVariant(variantClasses, options) {
  const classList = [];

  for (let option in options) {
    const variableAxisName = option;
    const variableAxisValue = options[option];

    classList.push(variantClasses[variableAxisName][variableAxisValue]);
  }

  return classList.join(" ");
};