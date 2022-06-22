import PropTypes from "prop-types";
import styles from "./Avatar.module.css";
import { defaultAvatarUrl, getInitials } from "./AvatarHelpers";

export function Avatar({
  imgUrl = defaultAvatarUrl,
  size = "Small",
  type = "round",
  backgroundColor = "var(--primary-background-color)",
  disabled = false,
  className,
  id,
  fullName = "Orr Gottlieb",
}) {
  const avatarSize = `size${size}`;
  const avatarType = styles[type];
  const disabledClass = disabled ? styles.disabled : "";
  const initials = getInitials(fullName);
  return (
    <div
      id={id}
      className={`${styles.avatar} ${className} ${styles[avatarSize]} ${avatarType} ${disabledClass}`}
      style={{ backgroundColor }}
    >
      {imgUrl ? (
        <img src={imgUrl} alt={fullName} className={styles.avatarImage} />
      ) : null}
      {!imgUrl ? initials : null}
    </div>
  );
}

Avatar.propTypes = {
  imgUrl: PropTypes.string,
  size: PropTypes.oneOf(["Small", "Large", "Medium"]),
  type: PropTypes.oneOf(["round", "square"]),
  backgroundColor: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
  fullName: PropTypes.string,
};
