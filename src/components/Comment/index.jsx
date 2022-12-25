import { currentUser } from '../../utils/posts-mock-content';
import s from './styles.module.css';
import { HandsClap, Trash } from '../Icons';
import { ProfilePic } from '../ProfilePic';
import { Button } from '../Button';

export function Comment({ data }) {
  const { name, role, picture, id } = data.authorInfo;

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
            <p className={s.publishTime}>{data.publishedAt}</p>
          </div>
          <div className={s.contentContainer} dangerouslySetInnerHTML={{ __html: data.content }}></div>
        </div>
        <div className={s.actionBar}>
          <Button variantOptions={{
            type: 'textNeutralVariant',
            label: 'M',
            padding: 'MN'
          }}>
            <HandsClap size={20} />
            Clap · 12
          </Button>
          {currentUser.id === id && (
            <Button variantOptions={{
              type: 'textNeutralVariant',
              label: 'M',
              padding: 'MN'
            }}>
              <Trash size={20} />
              Delete
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
