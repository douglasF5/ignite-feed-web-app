import { useContext, createContext, useState } from 'react';
import { currentUser, postsMockContent } from './posts-mock-content';

// CONTEXT DEFINITION
export const ContentContext = createContext({});

//CONTEXT PROVIDER
export function ContentContextProvider({ children }) {
  const [postsContent, setPostsContent] = useState(postsMockContent);

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

  return (
    <ContentContext.Provider
      value={{
        currentUser,
        postsContent,
        updatePostClapsCount,
        updateCommentClapsCount
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