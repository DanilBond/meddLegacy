import React from 'react';
import {View, StyleSheet} from 'react-native';
import {LoginBackground} from '../components/background/LoginBackground';
import {Button, ButtonText, Center, Text} from '@gluestack-ui/themed';
import theme from '../themes/mainTheme';

export function ChooseRole() {
  return (
    <View style={styles.container}>
      <LoginBackground>
        <Center style={styles.center}>
          <Text style={styles.roleText}>Choose you role</Text>
          <Button
            style={styles.actionButton}
            bgColor="#D6F7FF"
            marginBottom={'$5'}>
            <ButtonText style={styles.actionButtonText} color="#165867">
              I'm a member
            </ButtonText>
          </Button>
          <Button style={styles.actionButton} bgColor="#EFE5DC">
            <ButtonText style={styles.actionButtonText} color="#165867">
              I'm an advocate
            </ButtonText>
          </Button>
        </Center>
      </LoginBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    padding: 15,
  },
  roleText: {
    fontFamily: theme.typography.mainFontMedium,
    fontSize: 24,
    lineHeight: 26,
    color: '#051006',
    marginBottom: 30,
  },
  actionButton: {
    width: '100%',
    height: 120,
  },
  actionButtonText: {
    color: '#051006',
    fontFamily: theme.typography.mainFontRegular,
    fontSize: 18,
    lineHeight: 64,
  },
});
