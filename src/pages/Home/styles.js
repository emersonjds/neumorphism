import styled from 'styled-components/native';

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
export const BottomShadow = styled.View``;
