import s from './styles.module.css';
import { CommentWidget } from '../CommentWidget';
import { Comment } from '../Comment';

export function CommentsSection() {
  return (
    <div className={s.commentsSection}>
      <h2 className={s.commentsSectionTitle}>All comments</h2>
      <CommentWidget />
      <Comment />
    </div>
  );
};
