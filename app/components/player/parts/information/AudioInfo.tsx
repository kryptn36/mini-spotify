import CustomSlider from 'components/extra/customslider/CustomSlider';
import ToggleableButton from 'components/extra/toggleablebutton/ToggleableButton';
import arrows from 'img/arrows-alt-h-solid.png';
import volumeUp from 'img/volume-up-solid.png';
import React from 'react';
import styles from './AudioInfo.scss';
import AudioQualityInfo from './AudioQualityInfo';
import SongCaption from './SongCaption';

export default function AudioInfo() {
  const defaultDesign = {
    activeClass: `${styles['toggle-button']} ${styles['active-test']}`,
    inactiveClass: `${styles['toggle-button']} ${styles['inactive-test']}`,
  };

  return (
    <div className={styles['audio-info']}>
      <div className={styles.image}>
        <img
          alt="song cover"
          src="https://i.scdn.co/image/ab67616d00001e0249e3b7e85829da2fbc68bc46"
        />
      </div>
      <div className={styles.right}>
        <div>
          <SongCaption
            artist="MANTRA"
            title="Bring Me The Horizonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn"
          />
        </div>
        <div className={styles['audio-info-quality']}>
          <div>
            <AudioQualityInfo bitrate={320} frequency={44} />
          </div>
          <div>
            <ToggleableButton
              element={<span>mono</span>}
              activeClass={styles.active}
              inactiveClass={styles.inactive}
            />
            <ToggleableButton
              element={<span>stereo</span>}
              activeClass={styles.active}
              inactiveClass={styles.inactive}
            />
          </div>
        </div>
        <div className={styles['audio-info-controls']}>
          <div>
            <CustomSlider
              className={styles['volume-slider']}
              thumbImageUrl={volumeUp}
              leftColor="#88b617"
              rightColor="#3c3d41"
            />
          </div>
          <div>
            <CustomSlider
              className={styles['position-slider']}
              snapTargets={[0, 50, 100]}
              thumbImageUrl={arrows}
              leftColor="#3c3d41"
              rightColor="#3c3d41"
            />
          </div>
          <div>
            <ToggleableButton element={<span>EQ</span>} {...defaultDesign} />
            <ToggleableButton element={<span>PL</span>} {...defaultDesign} />
          </div>
        </div>
      </div>
    </div>
  );
}
