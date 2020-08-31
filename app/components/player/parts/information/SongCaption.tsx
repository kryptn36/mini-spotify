import React from 'react';
import ReactTooltip from 'react-tooltip';
import {
  SongCaptionContainer,
  SongTitle,
  SongArtist,
} from './SongCaption.styles';

export interface SongCaptionProps {
  artist: string;
  title: string;
}

export default function SongCaption(props: SongCaptionProps) {
  const { artist, title } = props;

  return (
    <SongCaptionContainer>
      <SongArtist>{artist} -</SongArtist>
      <SongTitle data-tip={title}>{title}</SongTitle>
      <ReactTooltip />
    </SongCaptionContainer>
  );
}
