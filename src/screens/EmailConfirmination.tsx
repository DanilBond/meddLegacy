import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { LoginBackground } from '../components/background/LoginBackground';
import {
  ButtonIcon,
  Text,
  Box,
  Heading,
  Button,
  Image,
} from '@gluestack-ui/themed';
import theme from '../themes/mainTheme';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
import { BackButton } from '../components/buttons/BackButton';
import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

export function EmailConfirmination({ navigation, route }) {
  useEffect(() => {
    const interval = setInterval(() => {
      const url = 'https://dev.meddefend.appservice.dev/api/auth/jwt/create/';
      const json = {
        username: route.params.username,
        password: route.params.password,
      };
      axios
        .post(url, json)
        .then(async (res) => {

          await AsyncStorage.setItem('access', res.data.access);


          const getData = async () => {
            console.log("tryget")
          try {
            const value = await AsyncStorage.getItem('access');
            if (value !== null) {
              console.log(value);
            }
          } catch (e) {
              console.log("nema");
          }
        };

        })
        .catch(error => {
          console.log(error);
        });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Box style={styles.backButtonBox}>
        <BackButton onClick={() => { }} />
      </Box>

      <Box style={styles.box}>
        <Text style={styles.headerText}>Unique ID was sent</Text>
        <Text style={styles.bodyText}>
          Unique ID to log in was sent to your email successfully, please check
          to proceed
        </Text>
      </Box>
      <Box style={styles.buttonBox}>
        <PrimaryButton text="Sign In" onClick={() => { }} />
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
  buttonBox: {
    width: '100%',
    maxWidth: 343,
    marginTop: 0,
    marginBottom: 35,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  bodyText: {
    fontFamily: theme.typography.mainFontMedium,
    marginTop: 8,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
    color: '#57595C',
    textAlign: 'center',
    maxWidth: 300,
  },

  headerText: {
    fontFamily: theme.typography.mainFontMedium,
    fontSize: 30,
    lineHeight: 45,
    fontWeight: '400',
    color: '#051006',
  },
  actionButton: {
    width: '100%',
    height: 120,
  },
});
