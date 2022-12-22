import s from './styles.module.css';
import { HandsClap, TextBubble, Trash } from '../Icons';
import { ProfilePic } from '../ProfilePic';
import { Button } from '../Button';

export function Comment() {
  return (
    <div className={s.container}>
      <ProfilePic
        resourcePath="/leslie-profile-pic.png"
        variantOptions={{
          type: "default",
          size: "S"
        }}
      />
      <div className={s.contentSlot}>
        <div className={s.contentCard}>
          <div className={s.contentHeader}>
            <div>
              <p className={s.authorName}>Leslie Alexander</p>
              <p className={s.authorRole}>Dev Front-End</p>
            </div>
            <p className={s.publishTime}>1h</p>
          </div>
          <div className={s.contentContainer}>So good, congrats!! 👏👏</div>
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
          <Button variantOptions={{
            type: 'textNeutralVariant',
            label: 'M',
            padding: 'MN'
          }}>
            <Trash size={20} />
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};
