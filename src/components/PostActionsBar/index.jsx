import { useState } from 'react';
import { composeClasses } from '../../utils/utils';
import s from './styles.module.css';
import { Button } from '../Button';
import { HandsClap, HandsClapFill, TextBubble, TextBubbleFill } from '../Icons';

export function PostActionsBar({ commentsCount, clapsCount, toggleCommentsSection, isCommentsSectionVisible }) {
  const [isClapped, setIsClapped] = useState(false);
  const clapsTotalCount = isClapped ? clapsCount + 1 : clapsCount;

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
        handleClick={() => setIsClapped(!isClapped)}
      >
        {isClapped
          ? <HandsClapFill size={24} />
          : <HandsClap size={24} />
        }
        Clap {`· ${clapsTotalCount}`}
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
