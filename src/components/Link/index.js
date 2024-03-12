import clsx from 'clsx';
import styles from './styles.module.sass';

export default function Link({ name, path, isHovered }) {
  return (
    <a
      href={path}
      className={clsx("flex", "link", styles.link, isHovered && styles.linkHovered)}
    >
      {name}
      <img src="img/arrow.svg" alt="" />
    </a>
  );
}