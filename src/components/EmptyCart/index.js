import React from 'react';
import LottieView from 'lottie-react-native';

import emptyCartAnimation from '../../../EmptyCartAnimation.json';

import { Container, EmptyCartContainer, EmptyCartText } from './styles';

export default function EmptyCart() {
  return (
    <Container>
      <EmptyCartContainer>
        <LottieView
          source={emptyCartAnimation}
          resizeMode="contain"
          autoPlay
          loop
        />
      </EmptyCartContainer>
      <EmptyCartText>Seu carrinho está vazio</EmptyCartText>
    </Container>
  );
}
