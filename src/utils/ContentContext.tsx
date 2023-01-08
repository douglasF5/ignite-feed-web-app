import { ReactNode, useContext, createContext, useState } from 'react';
import { PostInterface, CommentInterface, UserData, DeleteDialogDataObject } from '../@types/type-definitions';
import { generateQuickId } from './utils';
import { currentUser, postsMockContent } from './posts-mock-content';

// TYPE ANNOTATION
interface CommentRawData {
  content: string;
}

type DeleteDialogData = DeleteDialogDataObject | null;

interface ContentContextProviderProps {
  children: ReactNode;
}

interface ContentContextProvider {
  currentUser: UserData;
  postsContent: PostInterface[];
  deleteDialogData: DeleteDialogData | null;
  handleToggleDeleteDialog: (data: DeleteDialogData) => void;
  updatePostClapsCount: (postId: string) => void;
  updateCommentClapsCount: (postId: string, commentId: string) => void;
  removeComment: (postId: string, commentId: string) => void;
  addComment: (postId: string, commentRawData: CommentRawData) => void;
}

// CONTEXT DEFINITION
export const ContentContext = createContext({} as ContentContextProvider);

//CONTEXT PROVIDER
export function ContentContextProvider({ children }: ContentContextProviderProps) {
  const [postsContent, setPostsContent] = useState(postsMockContent);
  const [deleteDialogData, setDeleteDialogData] = useState<DeleteDialogData>(null);

  function updatePostClapsCount(postId: string) {
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

  function updateCommentClapsCount(postId: string, commentId: string) {
    const newPostsContent = postsContent.map(post => {
      if (postId !== post.id) return post;

      const newCommentsContent = (post.comments as CommentInterface[]).map(comment => {
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

  function removeComment(postId: string, commentId: string) {
    const newPostsContent = postsContent.map(post => {
      if (postId !== post.id) return post;

      const newCommentsContent = (post.comments as CommentInterface[]).filter(comment => {
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

  function addComment(postId: string, commentRawData: CommentRawData) {
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

      const newCommentsContent = postHasNoComments ? [newComment] : [newComment, ...(post.comments as CommentInterface[])];

      const newPost = {
        ...post,
        comments: newCommentsContent
      };

      return newPost;
    });

    setPostsContent(newPostsContent);
  }

  function handleToggleDeleteDialog(data: DeleteDialogData) {
    setDeleteDialogData(data);
  }

  return (
    <ContentContext.Provider
      value={{
        currentUser,
        postsContent,
        deleteDialogData,
        handleToggleDeleteDialog,
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