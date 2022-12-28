import s from './styles.module.css';
import { ProfilePic } from '../ProfilePic';

export function PostContent({ data }) {
  const { authorInfo,
    publishedAt,
    content } = data;

  return (
    <>
      <div className={s.header}>
        <div className={s.infoWrapper}>
          <ProfilePic
            resourcePath={authorInfo.picture}
            altText={authorInfo.name}
            variantOptions={{
              type: 'highlighted',
              size: 'M'
            }}
          />
          <div>
            <p className={s.profileName}>{authorInfo.name}</p>
            <p className={s.profileRole}>{authorInfo.role}</p>
          </div>
        </div>
        <time
          className={s.publishTime}
          dateTime="2008-02-14 20:00"
          title="2008-02-14 20:00"
        >
          {publishedAt}
        </time>
      </div>
      <div className={s.contentWrapper}>
        <p dangerouslySetInnerHTML={{ __html: content }}></p>
      </div>
    </>
  );
}