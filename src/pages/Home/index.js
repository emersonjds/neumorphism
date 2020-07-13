import React from 'react';
import {View, StyleSheet, Slider} from 'react-native';
import {
  Container,
  SafeArea,
  ContainerSpacing,
  TopContainer,
  TopShadow,
  BottomShadow,
  TextPlaying,
  SongArtContainer,
  SongArt,
  SongContainer,
  SongtextAuthor,
  SongTextMusic,
  TrackContainer,
  TrackTimer,
  TextTime,
  ContainerControls,
} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import IconIcon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
IconIcon.loadFont();

const gray = '#91A18D';

export default function Home() {
  const NeuMorph = ({children, size, style}) => {
    return (
      <TopShadow>
        <BottomShadow>
          <View
            style={[
              styles.inner,
              {
                width: size || 40,
                height: size || 40,
                borderRadius: size / 2 || 40 / 2,
              },
              style,
            ]}>
            {children}
          </View>
        </BottomShadow>
      </TopShadow>
    );
  };

  return (
    <Container>
      <SafeArea>
        <ContainerSpacing>
          <TopContainer>
            <NeuMorph size={48}>
              <Icon name="arrowleft" size={20} color={gray} />
            </NeuMorph>

            <View>
              <TextPlaying>PLAYING NOW</TextPlaying>
            </View>
            <NeuMorph size={48}>
              <Icon name="bars" size={20} color={gray} />
            </NeuMorph>
          </TopContainer>
          <SongArtContainer>
            <NeuMorph size={300}>
              <SongArt source={require('./../../assets/img/linkin.jpg')} />
            </NeuMorph>
          </SongArtContainer>
          <SongContainer>
            <SongtextAuthor>Linkin Park</SongtextAuthor>
            <SongTextMusic>NUMB</SongTextMusic>
          </SongContainer>
          <TrackContainer>
            <TrackTimer>
              <TextTime>1:21</TextTime>
              <TextTime>4:02 </TextTime>
            </TrackTimer>
            <Slider
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#8AAFFF"
              maximumTrackTintColor="#DAE6F4"
              thumbTintColor="#7b9bff"
              style={{
                marginTop: 32,
              }}
            />
          </TrackContainer>
          <ContainerControls>
            <NeuMorph size={75}>
              <Icon name="banckward" size={20} color={gray} />
            </NeuMorph>
            <NeuMorph size={80} style={{backgroundColor: '#8AAAFF'}}>
              <Icon name="caretright" size={20} color="#FFF" />
            </NeuMorph>
            <NeuMorph size={75}>
              <Icon name="forward" size={20} color={gray} />
            </NeuMorph>
          </ContainerControls>
        </ContainerSpacing>
      </SafeArea>
    </Container>
  );
}

const styles = StyleSheet.create({
  inner: {
    backgroundColor: '#DEE9f7',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E2ECFD',
    borderWidth: 1,
  },
});
