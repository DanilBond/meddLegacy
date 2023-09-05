// src/screens/LoginScreen.tsx
import {Button, ButtonText} from '@gluestack-ui/themed';
import React from 'react';
import {StyleSheet} from 'react-native';
import theme from '../../themes/mainTheme';
import {Int32} from 'react-native/Libraries/Types/CodegenTypes';

interface DefaultButtonProps {
  text: string;
  onClick: () => void;
}

export function DefaultButton(props: DefaultButtonProps) {
  return (
    <Button
      style={styles.actionButton}
      bgColor="#D6F7FF"
      variant="solid"
      mt="$4">
      <ButtonText style={styles.actionButtonText}>{props.text}</ButtonText>
    </Button>
  );
}

const styles = StyleSheet.create({
  actionButton: {
    borderRadius: theme.elements.defaultBorderRadus,
    height: 53,
  },
  actionButtonText: {
    fontFamily: theme.typography.mainFontRegular,
    fontSize: 16,
    color: 'black',
  },
});
