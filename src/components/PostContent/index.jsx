import s from './styles.module.css';
import { ProfilePic } from '../ProfilePic';

export function PostContent({ data }) {
  const { authorPicture,
    authorName,
    authorRole,
    content } = data;

  return (
    <>
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
    </>
  );
}