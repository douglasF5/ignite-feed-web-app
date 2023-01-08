import { forwardRef } from 'react';
import { composeVariant } from '../../utils/utils';
import s from './styles.module.css';

export const Button = forwardRef(({ children, variantOptions, handleClick, ...props }, forwardedRef) => {
  const variantClasses = {
    type: {
      filledPrimary: s.filledPrimary,
      textNeutral: s.textNeutral,
      textNeutralVariant: s.textNeutralVariant,
      textPrimary: s.textPrimary,
      filledTonalNegative: s.filledTonalNegative
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
    hover: {
      withNegative: s.negativeHover
    }
  };

  return (
    <button
      className={composeVariant(variantClasses, variantOptions)}
      onClick={handleClick}
      ref={forwardedRef}
      {...props}
    >
      {children}
    </button>
  );
});