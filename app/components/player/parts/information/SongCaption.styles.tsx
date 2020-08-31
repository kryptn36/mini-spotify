import styled from 'styled-components';

export const SongCaptionContainer = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
`;

export const SongArtist = styled.span`
  font-size: 1.3em;
  font-weight: 500;
`;

export const SongTitle = styled.span`
  font-size: 0.9em;
  font-weight: 400;
  padding-left: 5px;
  position: relative;
  bottom: 1px;
`;
