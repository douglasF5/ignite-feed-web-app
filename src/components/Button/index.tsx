import React, { forwardRef } from 'react';
import { VariantOptions, VariantClassesList } from '../../@types/type-definitions.d';
import { composeVariant } from '../../utils/utils';
import s from './styles.module.css';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  variantOptions: VariantOptions;
  children: React.ReactNode;
  handleClick?: (event: React.PointerEvent<HTMLButtonElement>) => void;
  ref?: any;
}

export const Button = forwardRef(({ children, variantOptions, handleClick, type, ...props }: ButtonProps, forwardedRef) => {
  const variantClasses: VariantClassesList = {
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