import { CommentInterface } from '../../@types/type-definitions';
import s from './styles.module.css';
import { CommentWidget } from '../CommentWidget';
import { Comment } from '../Comment';

interface CommentsSectionProps {
  commentsData: CommentInterface[] | null;
  postId: string;
}

export function CommentsSection({ commentsData, postId }: CommentsSectionProps) {
  return (
    <div className={s.commentsSection}>
      <h2 className={s.commentsSectionTitle}>All comments</h2>
      <CommentWidget postId={postId} />
      {commentsData && commentsData.map(comment => <Comment key={comment.id} data={comment} postId={postId} />)}
    </div>
  );
};
