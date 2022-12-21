import s from './styles.module.css';
import { TextareaAutosize } from '@mui/base';
import { ProfilePic } from '../ProfilePic';
import { Button } from '../Button';
import { useState } from 'react';

export function CommentWidget() {
  const [commentContent, setCommentContent] = useState('');
  const [isSubmitButtonEnabled, setIsSubmitButtonEnabled] = useState(true);

  function handleUpdateTextArea(e) {
    setCommentContent(e.value);
    setIsSubmitButtonEnabled(!(commentContent === ''));
  }

  return (
    <div className={s.commentWidget}>
      <ProfilePic
        resourcePath="/leslie-profile-pic.png"
        variantOptions={{
          size: 'S',
          type: 'default'
        }}
      />
      <form className={s.commentForm}>
        <TextareaAutosize
          aria-label="comment textarea"
          placeholder="Add a comment..."
          className={s.commentTextArea}
          value={commentContent}
          onInput={handleUpdateTextArea}
        />
        <Button
          disabled={!isSubmitButtonEnabled}
          variantOptions={{
            type: 'filledPrimary',
            label: 'M',
            padding: 'S'
          }}
        >
          Post
        </Button>
      </form>
    </div>
  );
}