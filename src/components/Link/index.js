import clsx from 'clsx';
import styles from './styles.module.sass';

export default function Link({ name, path, isHovered, callback }) {
  return (
    <a
      href={path}
      className={clsx("flex", "link", styles.link, isHovered && styles.linkHovered)}
      onClick={callback}
    >
      {name}
      <img src="img/arrow.svg" alt="" />
    </a>
  );
}
