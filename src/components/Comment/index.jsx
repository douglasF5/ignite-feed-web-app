import { useState } from 'react';
import { currentUser } from '../../utils/posts-mock-content';
import s from './styles.module.css';
import { HandsClap, HandsClapFill, Trash } from '../Icons';
import { ProfilePic } from '../ProfilePic';
import { Button } from '../Button';

export function Comment({ data }) {
  const { name, role, picture, id } = data.authorInfo;

  const [isClapped, setIsClapped] = useState(false);
  const [clapsTotalCount, setClapsTotalCount] = useState(data.clapsCount);

  function handleClap() {
    setIsClapped(!isClapped);
    setClapsTotalCount(previousValue => !isClapped ? previousValue + 1 : data.clapsCount);
  }

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
              dateTime="2008-02-14 20:00"
              title="2008-02-14 20:00"
            >
              {data.publishedAt}
            </time>
          </div>
          <div className={s.contentContainer} dangerouslySetInnerHTML={{ __html: data.content }}></div>
        </div>
        <div className={s.actionBar}>
          <Button
            variantOptions={{
              type: isClapped ? 'textPrimary' : 'textNeutralVariant',
              label: 'M',
              padding: 'MN'
            }}
            handleClick={() => handleClap()}
          >
            {isClapped
              ? <HandsClapFill size={20} />
              : <HandsClap size={20} />
            }
            {/* Clap {`· ${clapsTotalCount}`} */}
            Clap {`· ${clapsTotalCount}`}
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
