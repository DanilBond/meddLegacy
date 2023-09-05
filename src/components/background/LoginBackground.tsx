// src/screens/LoginScreen.tsx
import React from 'react';
import {View, StyleSheet, ImageBackground, Image} from 'react-native';

interface LoginBackgroundProps {
  children: React.ReactNode;
}

export function LoginBackground(props: LoginBackgroundProps) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/gradient_background.png')}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <Image
          source={require('../../../assets/images/subtract.png')}
          style={styles.backgroundSubtract}
        />
        {props.children}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  backgroundSubtract: {
    resizeMode: 'cover',
    position: 'absolute',
    width: '90%',
    top: 0,
    right: 0,
  },
});
