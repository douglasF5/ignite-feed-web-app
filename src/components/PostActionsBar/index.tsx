import { composeClasses } from '../../utils/utils';
import s from './styles.module.css';
import { Button } from '../Button';
import { HandsClap, HandsClapFill, TextBubble, TextBubbleFill } from '../Icons';

interface PostActionsBarProps {
  commentsCount: number | null;
  clapsCount: number;
  isCommentsSectionVisible: boolean;
  isClapped: boolean;
  updateClapsCount: () => void;
  toggleCommentsSection: () => void;
}

export function PostActionsBar({
  commentsCount,
  clapsCount,
  isCommentsSectionVisible,
  isClapped,
  updateClapsCount,
  toggleCommentsSection
}: PostActionsBarProps) {
  return (
    <div className={composeClasses([
      s.actionBar,
      isCommentsSectionVisible ? s.withCommentsSection : null
    ])}>
      <Button
        variantOptions={{
          type: isClapped ? 'textPrimary' : 'textNeutralVariant',
          label: 'L',
          padding: 'M'
        }}
        handleClick={updateClapsCount}
      >
        {isClapped
          ? <HandsClapFill size={24} />
          : <HandsClap size={24} />
        }
        Clap {`· ${clapsCount}`}
      </Button>
      <Button
        variantOptions={{
          type: isCommentsSectionVisible ? 'textPrimary' : 'textNeutralVariant',
          label: 'L',
          padding: 'M'
        }}
        handleClick={toggleCommentsSection}
      >
        {isCommentsSectionVisible
          ? <TextBubbleFill size={24} />
          : <TextBubble size={24} />
        }
        Comment {commentsCount && `· ${commentsCount}`}
      </Button>
    </div>
  );
};
