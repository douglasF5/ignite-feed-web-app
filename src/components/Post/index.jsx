import s from './styles.module.css';
import { ProfilePic } from '../ProfilePic';
import { Button } from '../Button';
import { HandsClap } from '../Icons';
import { TextBubble } from '../Icons';

export function Post({ data }) {
  const { authorPicture,
    authorName,
    authorRole,
    content } = data;

  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.infoWrapper}>
          <ProfilePic
            resourcePath={authorPicture}
            altText={authorName}
            variantOptions={{
              type: 'highlighted',
              size: 'M'
            }}
          />
          <div>
            <p className={s.profileName}>{authorName}</p>
            <p className={s.profileRole}>{authorRole}</p>
          </div>
        </div>
        <p className={s.publishTime}>2h ago</p>
      </div>
      <div className={s.contentWrapper}>
        <p dangerouslySetInnerHTML={{ __html: content }}></p>
      </div>
      <div className={s.actionBar}>
        <Button variantOptions={{
          type: 'textNeutralVariant',
          label: 'L',
          padding: 'M'
        }}>
          <HandsClap size={24} />
          Clap · 12
        </Button>
        <Button variantOptions={{
          type: 'textNeutralVariant',
          label: 'L',
          padding: 'M'
        }}>
          <TextBubble size={24} />
          Comment · 2
        </Button>
      </div>
      <div className={s.commentsSection}>
        <h2 className={s.commentsSectionTitle}>All comments</h2>
        <div className={s.commentWidget}>
          <ProfilePic
            resourcePath="/leslie-profile-pic.png"
            variantOptions={{
              size: 'S',
              type: 'default'
            }}
          />
          <form className={s.commentForm}>
            <textarea rows={1} className={s.commentTextArea} placeholder="Add a comment..." />
            <Button
              disabled
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
      </div>
    </div>
  );
}