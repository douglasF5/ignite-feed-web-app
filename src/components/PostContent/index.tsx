import { format, formatDistanceToNow } from 'date-fns';
import { PostInterface } from '../../@types/type-definitions';
import enUS from 'date-fns/locale/en-US';
import s from './styles.module.css';
import { ProfilePic } from '../ProfilePic';

interface PostContentProps {
  data: PostInterface;
}

export function PostContent({ data }: PostContentProps) {
  const { authorInfo,
    publishedAt,
    content } = data;

  const publishTime = {
    raw: publishedAt.toISOString(),
    longForm: format(publishedAt, "dd LLL 'at' HH:mm"),
    relativeForm: formatDistanceToNow(publishedAt, {
      locale: enUS,
      addSuffix: true
    })
  };

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
          dateTime={publishTime.raw}
          title={publishTime.longForm}
        >
          {publishTime.relativeForm}
        </time>
      </div>
      <div className={s.contentWrapper}>
        <p dangerouslySetInnerHTML={{ __html: content }}></p>
      </div>
    </>
  );
}