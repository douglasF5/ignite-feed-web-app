import { useContent } from '../../utils/ContentContext';
import { format, formatDistanceToNow } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import s from './styles.module.css';
import { HandsClap, HandsClapFill, Trash } from '../Icons';
import { ProfilePic } from '../ProfilePic';
import { Button } from '../Button';

export function Comment({ data, postId }) {
  const { name, role, picture, id } = data.authorInfo;
  const { currentUser, updateCommentClapsCount } = useContent();

  const publishTime = {
    raw: data.publishedAt.toISOString(),
    longForm: format(data.publishedAt, "dd LLL 'at' HH:mm"),
    relativeForm: formatDistanceToNow(data.publishedAt, {
      locale: enUS,
      addSuffix: true
    })
  };

  return (
    <div className={s.container}>
      <ProfilePic
        resourcePath={picture}
        altText={name}
        variantOptions={{
          type: "default",
          size: "S"
        }}
      />
      <div className={s.contentSlot}>
        <div className={s.contentCard}>
          <div className={s.contentHeader}>
            <div>
              <p className={s.authorName}>{name}</p>
              <p className={s.authorRole}>{role}</p>
            </div>
            <time
              className={s.publishTime}
              dateTime={publishTime.raw}
              title={publishTime.longForm}
            >
              {publishTime.relativeForm}
            </time>
          </div>
          <div className={s.contentContainer} dangerouslySetInnerHTML={{ __html: data.content }}></div>
        </div>
        <div className={s.actionBar}>
          <Button
            variantOptions={{
              type: data.isClapped ? 'textPrimary' : 'textNeutralVariant',
              label: 'M',
              padding: 'MN'
            }}
            handleClick={() => updateCommentClapsCount(postId, data.id)}
          >
            {data.isClapped
              ? <HandsClapFill size={20} />
              : <HandsClap size={20} />
            }
            Clap {`· ${data.clapsCount}`}
          </Button>
          {currentUser.id === id && (
            <Button
              variantOptions={{
                type: 'textNeutralVariant',
                label: 'M',
                padding: 'MN',
                hover: 'withNegative'
              }}
            >
              <Trash size={20} />
              Delete
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
