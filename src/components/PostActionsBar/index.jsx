import s from './styles.module.css';
import { Button } from '../Button';
import { HandsClap, TextBubble } from '../Icons';

export function PostActionsBar() {
  return (
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
  );
};
