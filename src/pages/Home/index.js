import React, {Component} from 'react';
import {Text} from 'react-native';
import {Container, SafeArea, ContainerSpacing, TopContainer} from './styles';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <SafeArea>
          <ContainerSpacing>
            <TopContainer>
              <Text>Emerson</Text>
            </TopContainer>
          </ContainerSpacing>
        </SafeArea>
      </Container>
    );
  }
}
