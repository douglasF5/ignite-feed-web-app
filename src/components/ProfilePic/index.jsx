import { composeVariant } from '../../utils/utils';
import s from './styles.module.css';

export function ProfilePic({ resourcePath, variantOptions, altText }) {
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