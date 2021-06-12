import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

export const StarsWrapper = styled.View`
  flex-direction: row;
`;

export const SingleStar = styled(Icon)`
  color: ${({disabled}) => (disabled ? '#b0b0b0' : '#2f3d56')};
`;
