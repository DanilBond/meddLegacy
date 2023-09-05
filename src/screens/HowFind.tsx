import React from 'react';
import {View, StyleSheet} from 'react-native';
import {LoginBackground} from '../components/background/LoginBackground';
import {
  ButtonIcon,
  Text,
  Box,
  Heading,
  Button,
  Image,
} from '@gluestack-ui/themed';
import theme from '../themes/mainTheme';
import {PrimaryButton} from '../components/buttons/PrimaryButton';
import {BackButton} from '../components/buttons/BackButton';
import {DefaultButton} from '../components/buttons/DefaultButton';

export function HowFind() {
  return (
    <View style={styles.container}>
      <Box style={styles.backButtonBox}>
        <BackButton onClick={() => {}} />
      </Box>

      <Box style={styles.box}>
        <Text style={styles.headerText}>
          How did you find out about MedDefend?
        </Text>
      </Box>

      <Box style={styles.buttonsBox}>
        <DefaultButton text="Social media" onClick={() => {}} />
        <DefaultButton text="Community group" onClick={() => {}} />
        <DefaultButton text="The Medical Maze podcast" onClick={() => {}} />
        <DefaultButton text="Word of mouth" onClick={() => {}} />
        <DefaultButton text="Your option" onClick={() => {}} />
      </Box>

      <Box style={styles.buttonBox}>
        <PrimaryButton text="Sign In" onClick={() => {}} />
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  backButtonBox: {
    marginTop: 30,
    marginLeft: 16,
    marginBottom: 10,
  },

  buttonsBox: {
    width: '100%',
    maxWidth: 343,
    marginBottom: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  buttonBox: {
    width: '100%',
    maxWidth: 343,
    marginTop: 0,
    marginBottom: 35,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  headerText: {
    fontFamily: theme.typography.mainFontMedium,
    fontSize: 33,
    lineHeight: 45,
    textAlign: 'center',
    maxWidth: 350,
    fontWeight: '400',
    color: '#051006',
  },
});
