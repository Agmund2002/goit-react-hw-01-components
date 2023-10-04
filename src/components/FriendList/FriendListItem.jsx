import css from './FriendList.module.css'
import clsx from 'clsx';

export const FriendListItem = ({ avatar, name, isOnline}) => {
    return (
      <li className={css.item}>
        <span className={clsx(isOnline ? css.online : css.offline)}></span>
        <div className={css.avatarBox}>
          <img className={css.avatar} src={avatar} alt={name} />
        </div>
        <p className={css.name}>{name}</p>
      </li>
    );
};