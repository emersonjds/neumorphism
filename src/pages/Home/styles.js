import styled from 'styled-components';

export const Container = styled.View`
  background-color: #dee9fd;
  align-items: center;
  height: 100%;
`;
export const SafeArea = styled.SafeAreaView`
  align-self: stretch;
`;
export const ContainerSpacing = styled.View`
  margin: 32px;
`;
export const TopContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TopShadow = styled.View`
  shadow-offset: {
    width: -6px;
    height: -6px;
  }
  shadow-opacity: 1px;
  shadow-radius: 6px;
  shadow-color: #fbffff;
`;
export const BottomShadow = styled.View`
  shadow-offset: {
    width: 6px;
    height: 6px;
  }
  shadow-opacity: 1px;
  shadow-radius: 6px;
  shadow-color: #b7c4dd;
`;

export const TextPlaying = styled.Text`
  color: gray;
  font-weight: 800;
  align-self: center;
`;

export const SongArtContainer = styled.View`
  margin: 32px;
  align-items: center;
`;
export const SongArt = styled.Image`
  height: 300px;
  width: 300px;
  border_radius: 150px;
  border-color: #d7e1f3;
  border-width: 10px;
`;

export const SongContainer = styled.View`
  align-items: center;
`;
export const SongtextAuthor = styled.Text`
  font-size: 30px;
  color: #6c7a93;
  font-weight: 600;
`;
export const SongTextMusic = styled.Text`
  font-size: 14px;
  margin-top: 4px;
  color: gray;
  font-weight: 500;
`;

export const TrackContainer = styled.View`
  margin-top: 32px;
  margin-bottom: 52px;
`;
export const TrackTimer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TextTime = styled.Text`
  font-size: 10px;
  color: gray;
  font-weight: 700;
`;

export const ContainerControls = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;
