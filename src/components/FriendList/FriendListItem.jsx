import PropTypes from "prop-types";
import s from './FriendList.module.css'

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
          <span className={`${s.status} ${isOnline ? s.online : s.offline}`}>{isOnline}</span>
        <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
    </li>
    )
};

FriendListItem.propTypes = {
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string,
}

export default FriendListItem;