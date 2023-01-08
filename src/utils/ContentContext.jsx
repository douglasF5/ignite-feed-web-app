import { useContext, createContext, useState } from 'react';
import { generateQuickId } from './utils';
import { currentUser, postsMockContent } from './posts-mock-content';

// CONTEXT DEFINITION
export const ContentContext = createContext({});

//CONTEXT PROVIDER
export function ContentContextProvider({ children }) {
  const [postsContent, setPostsContent] = useState(postsMockContent);
  const [deleteDialogData, setDeleteDialogData] = useState(null);

  function updatePostClapsCount(postId) {
    const newPostsContent = postsContent.map(post => {
      if (postId !== post.id) return post;

      const clapsTotalCount = !post.isClapped ? post.clapsCount + 1 : post.clapsCount - 1;

      const newPost = {
        ...post,
        isClapped: !post.isClapped,
        clapsCount: clapsTotalCount,
      };

      return newPost;
    });

    setPostsContent(newPostsContent);
  }

  function updateCommentClapsCount(postId, commentId) {
    const newPostsContent = postsContent.map(post => {
      if (postId !== post.id) return post;

      const newCommentsContent = post.comments.map(comment => {
        if (commentId !== comment.id) return comment;
        const clapsTotalCount = !comment.isClapped ? comment.clapsCount + 1 : comment.clapsCount - 1;

        const newComment = {
          ...comment,
          isClapped: !comment.isClapped,
          clapsCount: clapsTotalCount,
        };

        return newComment;
      });


      const newPost = {
        ...post,
        comments: newCommentsContent
      };

      return newPost;
    });

    setPostsContent(newPostsContent);
  }

  function removeComment(postId, commentId) {
    const newPostsContent = postsContent.map(post => {
      if (postId !== post.id) return post;

      const newCommentsContent = post.comments.filter(comment => {
        return commentId !== comment.id;
      });

      const newPost = {
        ...post,
        comments: newCommentsContent.length === 0 ? null : newCommentsContent
      };

      return newPost;
    });

    setPostsContent(newPostsContent);
  }

  function addComment(postId, commentRawData) {
    const newPostsContent = postsContent.map(post => {
      if (postId !== post.id) return post;

      const postHasNoComments = post.comments === null;

      const newComment = {
        id: generateQuickId(postId + 'c'),
        authorInfo: currentUser,
        publishedAt: new Date(),
        content: commentRawData.content,
        clapsCount: 0,
        isClapped: false
      };

      const newCommentsContent = postHasNoComments ? [newComment] : [newComment, ...post.comments];

      const newPost = {
        ...post,
        comments: newCommentsContent
      };

      return newPost;
    });

    setPostsContent(newPostsContent);
  }

  return (
    <ContentContext.Provider
      value={{
        currentUser,
        postsContent,
        deleteDialogData,
        setDeleteDialogData,
        updatePostClapsCount,
        updateCommentClapsCount,
        removeComment,
        addComment
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

//EXPORTING CUSTOM HOOK
export const useContent = () => {
  const context = useContext(ContentContext);
  return context;
};