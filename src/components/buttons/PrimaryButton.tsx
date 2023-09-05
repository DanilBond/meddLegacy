// src/screens/LoginScreen.tsx
import {Button, ButtonText} from '@gluestack-ui/themed';
import React from 'react';
import {StyleSheet} from 'react-native';
import theme from '../../themes/mainTheme';

interface PrimaryButtonProps {
  text: string;
  onPress: () => void;
}

export function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <Button
      onPress={props.onPress}
      style={styles.actionButton}
      bgColor="#165867"
      variant="solid"
      mt="$2"
      marginBottom={'$5'}>
      <ButtonText style={styles.actionButtonText}>{props.text}</ButtonText>
    </Button>
  );
}

const styles = StyleSheet.create({
  actionButton: {
    borderRadius: theme.elements.defaultBorderRadus,
    height: 48,
  },
  actionButtonText: {
    fontFamily: theme.typography.mainFontRegular,
    fontSize: 16,
  },
});
