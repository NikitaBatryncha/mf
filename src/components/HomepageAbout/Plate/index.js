import clsx from 'clsx';
import styles from './styles.module.sass';
import { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import Link from '../../Link';

export default function Plate() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const onChange = (visibility) => {
    if (visibility) {
      setIsVisible(true);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <VisibilitySensor onChange={onChange} partialVisibility>
      <div
        style={{opacity: isVisible ? 1 : 0}}
        className={clsx(styles.plateContainer, isVisible ? styles.animate : '', isHovered && styles.plateHovered)}
        href="/docs/tempo/md-install"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.plate}>
          <div className={styles.plate__mainWrapper}>
            <div className={clsx("flex", styles.plate__container)}>
              <div className={styles.plate__wrapper}>
                <h3 className={styles.plate__title}>
                  Российский Open-Source LDAP-каталог с современной архитектурой и защитой от санкций
                </h3>
                <p className={styles.plate__descr}>
                  Разработан на Python 3.0 и PostgreSQL. Разворачивается за несколько минут, используя Docker.
                </p>
              </div>
              <Link name="Документация" path="/docs/tempo/md-install.md" isHovered={isHovered} />
            </div>
          </div>
        </div>
      </div>
    </VisibilitySensor>
  );
}
