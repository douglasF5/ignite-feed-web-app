import React, { useState } from 'react';
import { useContent } from '../../utils/ContentContext';
import s from './styles.module.css';
import { TextareaAutosize } from '@mui/base';
import { ProfilePic } from '../ProfilePic';
import { Button } from '../Button';

interface CommentWidgetProps {
  postId: string;
}

export function CommentWidget({ postId }: CommentWidgetProps) {
  const [commentContent, setCommentContent] = useState('');
  const isSubmitButtonDisabled = commentContent === '';
  const { addComment, currentUser } = useContent();

  function handleUpdateTextArea(e: React.FormEvent<EventTarget>) {
    const target = e.target as HTMLTextAreaElement;
    setCommentContent(target.value);
  }

  function handleFormSubmit(e: React.FormEvent<EventTarget>) {
    e.preventDefault();
    addComment(postId, { content: commentContent });
    setCommentContent('');
  }

  return (
    <div className={s.commentWidget}>
      <ProfilePic
        resourcePath={currentUser.picture}
        altText={currentUser.name}
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