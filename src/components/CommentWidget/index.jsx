import { useState } from 'react';
import { useContent } from '../../utils/ContentContext';
import s from './styles.module.css';
import { TextareaAutosize } from '@mui/base';
import { ProfilePic } from '../ProfilePic';
import { Button } from '../Button';

export function CommentWidget({ postId }) {
  const [commentContent, setCommentContent] = useState('');
  const isSubmitButtonDisabled = commentContent === '';
  const { addComment } = useContent();

  function handleUpdateTextArea(e) {
    setCommentContent(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    addComment(postId, { content: commentContent });
    setCommentContent('');
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
          type='submit'
          disabled={isSubmitButtonDisabled}
          variantOptions={{
            type: 'filledPrimary',
            label: 'M',
            padding: 'S'
          }}
          handleClick={handleFormSubmit}
        >
          Post
        </Button>
      </form>
    </div>
  );
}