import { composeVariant } from '../../utils/utils';
import s from './styles.module.css';

export function Button({ children, variantOptions, ...rest }) {
  const variantClasses = {
    type: {
      filledPrimary: s.filledPrimary,
      textNeutral: s.textNeutral,
      textNeutralVariant: s.textNeutralVariant,
      textPrimary: s.textPrimary
    },
    label: {
      M: s.buttonLabelMedium,
      L: s.buttonLabelLarge
    },
    padding: {
      MN: s.paddingMini,
      S: s.paddingSmall,
      M: s.paddingMedium,
      L: s.paddingLarge
    },
  };

  return (
    <button className={composeVariant(variantClasses, variantOptions)} {...rest}>{children}</button>
  );
}