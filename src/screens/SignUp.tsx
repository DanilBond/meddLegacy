import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Text,
  Box,
  Button,
  Input,
  InputField,
  ButtonText,
  HStack,
  VStack,
  Select,
  SelectInput,
  SelectTrigger,
  SearchIcon,
  Icon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  SelectIcon,
  Image,
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
} from '@gluestack-ui/themed';
import theme from '../themes/mainTheme';
import {PrimaryButton} from '../components/buttons/PrimaryButton';
import {BackButton} from '../components/buttons/BackButton';
import axios from 'axios';

export function SignUp({navigation}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userPronoun, setUserPronoun] = useState('');
  const [userState, setUserState] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordConf, setUserPasswordConf] = useState('');
  const [userTerms, setUserTerms] = useState(false);

  return (
    <View style={styles.container}>
      {/* <Box style={styles.backButtonBox}><BackButton onClick={() => { }} /></Box> */}

      <VStack style={styles.inputFields}>
        <Text style={styles.headerText}>Sign Up</Text>

        <HStack>
          <Input
            style={styles.inputHor}
            size="xl"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}>
            <InputField
              placeholder="First name"
              onChangeText={newText => setFirstName(newText)}
            />
          </Input>
          <Input
            style={styles.inputHor}
            size="xl"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}>
            <InputField
              placeholder="Last name"
              onChangeText={newText => setLastName(newText)}
            />
          </Input>
        </HStack>

        <Select onValueChange={newVal => setUserPronoun(newVal)}>
          <SelectTrigger style={styles.select}>
            <SelectInput placeholder="Pronoun" style={styles.selectText} />
            {/* <Image style={styles.selectImg} source={require("../../assets/images/DownArrow.png")}></Image> */}
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem label="He/him/his" value="he-him-his" />
              <SelectItem label="She/her/hers" value="she-her-hers" />
              <SelectItem label="They/them/theirs" value="shey-them-theirs" />
              <SelectItem label="Ze/Zir/Zirs" value="se-sir-sirs" />
              <SelectItem label="Ze/Hir/Hirs" value="se-sir-sirs" />
              <SelectItem label="Fae/fae/faers" value="sae-fae-faers" />
            </SelectContent>
          </SelectPortal>
        </Select>

        <Select onValueChange={newVal => setUserState(newVal)}>
          <SelectTrigger style={styles.select}>
            <SelectInput placeholder="State" style={styles.selectText} />
            {/* <Image style={styles.selectImg} source={require("../../assets/images/DownArrow.png")}></Image> */}
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem label="AL" value="AL" />
            </SelectContent>
          </SelectPortal>
        </Select>

        <Input
          style={styles.input}
          size="xl"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}>
          <InputField
            placeholder="+1 (XXX) XXX-XXXX"
            onChangeText={newText => setUserNumber(newText)}
          />
        </Input>

        <Input
          style={styles.input}
          size="xl"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}>
          <InputField
            placeholder="Email"
            onChangeText={newText => setUserEmail(newText)}
          />
        </Input>

        <Input
          style={styles.input}
          size="xl"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}>
          <InputField
            placeholder="Password"
            type="password"
            onChangeText={newText => setUserPassword(newText)}
          />
        </Input>

        <Input
          onChangeText={newText => setUserPasswordConf(newText)}
          style={styles.input}
          size="xl"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}>
          <InputField
            placeholder="Confirm password"
            type="password"
            onChangeText={newText => setUserPasswordConf(newText)}
          />
        </Input>

        <Button variant="link" style={styles.underTextButton}>
          <Checkbox
            size="md"
            style={styles.checkbox}
            onChange={newVal => setUserTerms(newVal)}>
            <CheckboxIndicator />
            <CheckboxLabel ml="$2">
              Agree to the Terms and Conditions
            </CheckboxLabel>
          </Checkbox>
        </Button>
      </VStack>

      <Box style={styles.buttonBox}>
        <PrimaryButton
          text="Sign In"
          onPress={() => {
            console.log(firstName);
            console.log(lastName);
            console.log(userPronoun);
            console.log(userState);
            console.log(userNumber);
            console.log(userEmail);
            console.log(userPassword);
            console.log(userPasswordConf);
            console.log(userTerms);

            if (userTerms) {
              if (userPassword === userPasswordConf) {
                const json = {
                  email: userEmail,
                  first_name: firstName,
                  last_name: lastName,
                  phone_number: userNumber,
                  pronoun: userPronoun,
                  state: userState,
                  avatar: 0,
                  role: 'member',
                  username: firstName,
                  password: userPassword,
                  profile_id: null,
                };

                const url =
                  'https://dev.meddefend.appservice.dev/api/auth/users/';

                console.log(json);

                axios
                  .post(url, json)
                  .then(resp => {
                    if (resp.status == 201) {
                      navigation.navigate('EmailConfirmination', {
                        username: firstName,
                        password: userPassword,
                      });
                    }
                  })
                  .catch(error => {
                    if (error.response) {
                      console.log(error.response.data); // => the response payload
                    }
                  });
              } else {
                alert('Check pass');
              }
            } else {
              alert('Apply terms');
            }
          }}
        />

        <Button variant="link" style={styles.underTextButton}>
          <ButtonText style={styles.underTextBlack}>
            Already have an account?{' '}
          </ButtonText>
          <ButtonText style={styles.underTextBlue}> Sign In</ButtonText>
        </Button>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C1B6AB',
  },

  checkbox: {
    marginRight: 60,
    marginTop: 20,
  },

  select: {
    borderColor: '#A3A3A3',
    color: '#A3A3A3',
    marginBottom: 16,
    borderRadius: 16,
    minHeight: 50,
    maxHeight: 50,
    maxWidth: 343,
    minWidth: 343,
    backgroundColor: 'white',
  },

  selectImg: {
    width: 16,
    height: 10,
  },

  selectText: {
    color: '#A3A3A3',
    fontSize: 20,
  },

  inputHor: {
    borderColor: '#A3A3A3',
    color: '#A3A3A3',
    marginBottom: 16,
    borderRadius: 16,
    minWidth: 163,
    marginLeft: 8,
    marginRight: 8,

    backgroundColor: 'white',
  },

  divider: {
    marginTop: 375,
  },
  inputFields: {
    alignItems: 'center',
  },
  input: {
    borderColor: '#A3A3A3',
    color: '#A3A3A3',
    marginBottom: 16,
    borderRadius: 16,
    maxWidth: 343,
    backgroundColor: 'white',
  },
  headerText: {
    fontFamily: theme.typography.mainFontMedium,
    fontSize: 30,
    lineHeight: 45,
    fontWeight: '400',
    color: '#051006',
    marginBottom: 24,
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
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
