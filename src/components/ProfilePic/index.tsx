import { composeVariant } from '../../utils/utils';
import { VariantOptions } from '../../@types/type-definitions';
import s from './styles.module.css';

interface ProfilePicProps {
  resourcePath: string;
  variantOptions: VariantOptions;
  altText: string;
}

export function ProfilePic({ resourcePath, variantOptions, altText }: ProfilePicProps) {
  const variantClasses = {
    type: {
      default: s.container,
      highlighted: s.containerHighlighted
    },
    size: {
      S: s.small,
      M: s.medium,
      L: s.large
    },

  };

  return (
    <div className={composeVariant(variantClasses, variantOptions)}>
      <img className={s.profilePicImg} src={resourcePath} alt={altText} />
    </div>
  );
}