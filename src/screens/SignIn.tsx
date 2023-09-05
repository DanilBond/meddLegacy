import React from 'react';
import {View, StyleSheet} from 'react-native';
import {LoginBackground} from '../components/background/LoginBackground';
import {
  ButtonIcon,
  Text,
  Box,
  Heading,
  Button,
  Input,
  InputField,
  ButtonText,
  InputIcon,
  Icon,
} from '@gluestack-ui/themed';
import theme from '../themes/mainTheme';
import {PrimaryButton} from '../components/buttons/PrimaryButton';
import {BackButton} from '../components/buttons/BackButton';

export function SignIn() {
  return (
    <View style={styles.container}>
      <Box style={styles.backButtonBox}>
        <BackButton onClick={() => {}} />
      </Box>

      <Box style={styles.box}>
        <Text style={styles.headerText}>Sign In</Text>
      </Box>

      <Box style={styles.inputFields}>
        <Input
          style={styles.input}
          size="xl"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}>
          <InputField placeholder="Unique ID / Email" />
        </Input>

        <Input
          style={styles.input}
          size="xl"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}>
          <InputField placeholder="Password" type="password" />
        </Input>

        <Button variant="link" style={styles.underTextButton}>
          <ButtonText style={styles.underTextPassword}>
            Forgot your password?
          </ButtonText>
        </Button>
      </Box>

      <Box style={styles.divider} />

      <Box style={styles.buttonBox}>
        <PrimaryButton text="Sign In" onClick={() => {}} />

        <Button variant="link" style={styles.underTextButton}>
          <ButtonText style={styles.underTextBlack}>
            Don’t have an account yet?{' '}
          </ButtonText>
          <ButtonText style={styles.underTextBlue}> Sign Up</ButtonText>
        </Button>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  divider: {
    marginTop: 375,
  },
  inputFields: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    borderColor: '#A3A3A3',
    color: '#A3A3A3',
    marginBottom: 16,
    borderRadius: 16,
    maxWidth: 343,
  },
  headerText: {
    fontFamily: theme.typography.mainFontMedium,
    fontSize: 30,
    lineHeight: 45,
    fontWeight: '400',
    color: '#051006',
  },
  box: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  underTextButton: {
    marginTop: -20,
  },
  underTextBlack: {
    fontFamily: theme.typography.mainFontRegular,
    color: 'black',
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
  },

  underTextBlue: {
    fontFamily: theme.typography.mainFontRegular,
    color: '#3E97AB',
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
  },

  underTextPassword: {
    fontFamily: theme.typography.mainFontRegular,
    color: '#3E97AB',
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
    marginTop: 15,
  },

  backButtonBox: {
    marginTop: 30,
    marginLeft: 16,
    marginBottom: 10,
  },
  buttonBox: {
    width: '100%',
    maxWidth: 343,
    marginTop: 0,
    marginBottom: 35,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
