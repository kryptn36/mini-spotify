import CustomSlider from 'components/extra/customslider/CustomSlider';
import ToggleableButton from 'components/extra/toggleablebutton/ToggleableButton';
import arrows from 'img/arrows-alt-h-solid.png';
import volumeUp from 'img/volume-up-solid.png';
import React from 'react';
import styles from './AudioInfo.scss';
import AudioQualityInfo from './AudioQualityInfo';
import SongCaption from './SongCaption';

export default function AudioInfo() {
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
              className={styles.monoStereo}
              activeClass={styles.active}
            />
            <ToggleableButton
              element={<span>stereo</span>}
              className={styles.monoStereo}
              activeClass={styles.active}
            />
          </div>
        </div>
        <div className={styles['audio-info-controls']}>
          <div>
            <CustomSlider
              className={styles['volume-slider']}
              min={0}
              max={100}
              thumbImageUrl={volumeUp}
              leftColor="#88b617"
              rightColor="#3c3d41"
            />
          </div>
          <div>
            <CustomSlider
              className={styles['position-slider']}
              min={0}
              max={100}
              snapChunks={3}
              thumbImageUrl={arrows}
              leftColor="#3c3d41"
              rightColor="#3c3d41"
            />
          </div>
          <div>
            <ToggleableButton
              element={<span>EQ</span>}
              className={styles.eqPl}
              activeClass={styles.active}
            />
            <ToggleableButton
              element={<span>PL</span>}
              className={styles.eqPl}
              activeClass={styles.active}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
