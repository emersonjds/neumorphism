import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  Container,
  SafeArea,
  ContainerSpacing,
  TopContainer,
  TopShadow,
  BottomShadow,
} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();

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
            <NeuMorph>
              <Icon name="arrowleft" size={20} color={gray} />
            </NeuMorph>

            <View>
              <Text> PLAYING NOW</Text>
            </View>
            <NeuMorph>
              <Icon name="bars" size={20} color={gray} />
            </NeuMorph>
          </TopContainer>
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
