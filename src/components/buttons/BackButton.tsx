// src/screens/LoginScreen.tsx
import {Button, Image} from '@gluestack-ui/themed';
import React from 'react';
import {StyleSheet} from 'react-native';
import theme from '../../themes/mainTheme';

interface BackButtonProps {
  onClick: () => void;
}

export function BackButton(props: BackButtonProps) {
  return (
    <Button style={styles.button} bg="#D6F7FF">
      {}
      <Image
        style={styles.img}
        source={require('../../../assets/images/LeftArrow.png')}
      />
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    height: 48,
    width: 48,
  },
  img: {
    width: 10,
    height: 16,
    position: 'absolute',
  },
});
