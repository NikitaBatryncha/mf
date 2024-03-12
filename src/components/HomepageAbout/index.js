import clsx from 'clsx';
import styles from './styles.module.sass';

import Plate from './Plate';
import About from './About';
import Stack from './Stack';

export default function HomepageAbout ({ openModal }) {
  return (
    <section className={clsx(styles.about, "flex", "column")} id="about">
      <img rel="preload" src={'img/ellipse-2-mobile.png'} className={clsx(styles.ellipse, styles.ellipse2, styles.ellipse2Mobile )}/>
      <Plate/>
      <div className={clsx("flex", "column", "container", styles.about__container)}>
        <About/>
        <Stack/>
      </div>
    </section>
  );
}
