// src/screens/LoginScreen.tsx
import {
  Box,
  Button,
  ButtonText,
  Center,
  Image,
  Text,
} from '@gluestack-ui/themed';
import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import theme from '../themes/mainTheme';
import {PrimaryButton} from '../components/buttons/PrimaryButton';
import {LoginBackground} from '../components/background/LoginBackground';

export function LoginScreen() {
  return (
    <View style={styles.container}>
      <LoginBackground>
        <SafeAreaView style={styles.container}>
          <Center style={styles.centerTop}>
            <Image
              source={require('../../assets/images/meddefend.png')}
              resizeMode="contain"
              style={styles.medDefendLogo}
            />
          </Center>
          <Center style={styles.centerBottom}>
            <Box bg="#EFE5DC" p="$5" style={styles.box}>
              <Text style={styles.welcomeText} marginBottom={'$5'}>
                Welcome!
              </Text>
              <PrimaryButton
                text="Sign In"
                onClick={() => {
                  console.log('asd');
                }}
              />
              <Button
                style={styles.actionButton}
                bgColor="#FFFFFF"
                variant="solid"
                mt="$2"
                borderWidth="$1"
                borderColor="#D4D4D4">
                <ButtonText style={styles.actionButtonText} color="#165867">
                  Sign Up
                </ButtonText>
              </Button>
            </Box>
          </Center>
        </SafeAreaView>
      </LoginBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  medDefendLogo: {
    width: 250,
  },
  centerTop: {
    width: '100%',
    position: 'absolute',
    top: 150,
    padding: 0,
  },
  centerBottom: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    padding: 15,
  },
  box: {
    width: '100%',
    borderRadius: 27,
    paddingTop: 40,
    paddingBottom: 30,
  },
  welcomeText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    fontFamily: theme.typography.mainFontRegular,
    lineHeight: 45,
  },
  actionButton: {
    borderRadius: 16,
    height: 48,
  },
  actionButtonText: {
    fontFamily: theme.typography.mainFontRegular,
    fontSize: 16,
  },
});
