import React from 'react';
import { Button, ButtonText, GluestackUIProvider } from '@gluestack-ui/themed';
import { conf } from './src/themes/glueStackTheme';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUp } from './src/screens/SignUp';
import { EmailConfirmination } from './src/screens/EmailConfirmination';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => (
  <GluestackUIProvider config={conf}>
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  </GluestackUIProvider>
);

function StackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#C1B6AB',
        },
        headerShadowVisible: false,

        headerTintColor: '#CCC',
        // eslint-disable-next-line react/no-unstable-nested-components
        headerTitle: () => (
          <Button
            bgColor="#165867"
            marginTop={'$2'}
            marginBottom={'$2'}
            borderRadius={'$full'}>
            <ButtonText style={styles.backButtonText}>{'<'}</ButtonText>
          </Button>
        ),
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Home" component={SignUp} />
      <Stack.Screen
        name="EmailConfirmination"
        component={EmailConfirmination}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  backButtonText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
  },
});

export default App;
