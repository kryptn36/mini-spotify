import React from 'react';
import ReactTooltip from 'react-tooltip';
import styles from './AudioInfo.scss';

export interface SongCaptionProps {
  artist: string;
  title: string;
}

export default function SongCaption(props: SongCaptionProps) {
  const { artist, title } = props;

  return (
    <div className={styles['song-caption']}>
      <span className={styles['song-artist']}>{artist} -</span>
      <span data-tip={title} className={styles['song-title']}>
        {title}
      </span>
      <ReactTooltip />
    </div>
  );
}
