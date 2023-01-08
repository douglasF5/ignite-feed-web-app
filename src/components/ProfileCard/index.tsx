import s from './styles.module.css';
import { ProfilePic } from "../ProfilePic";
import { Button } from "../Button";
import { SquareAndPencil } from "../Icons";

export function ProfileCard() {
  return (
    <div className={s.container}>
      <img className={s.profileCover} src="/profile-cover.png" alt="Profile cover" />
      <div className={s.contentContainer}>
        <div className={s.infoContainer}>
          <ProfilePic
            resourcePath='/leslie-profile-pic.png'
            variantOptions={{ type: 'highlighted', size: 'L' }}
            altText='Profile picture'
          />
          <div>
            <p className={s.profileName}>Leslie Alexander</p>
            <p className={s.profileRole}>UI Designer</p>
          </div>
        </div>
        <Button variantOptions={{ type: 'textPrimary', label: 'L', padding: 'L' }}>
          <SquareAndPencil />
          Edit profile
        </Button>
      </div>
    </div>
  );
}