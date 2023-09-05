import React from 'react';
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
  Pressable,
} from '@gluestack-ui/themed';
import theme from '../themes/mainTheme';
import {PrimaryButton} from '../components/buttons/PrimaryButton';
import {BackButton} from '../components/buttons/BackButton';

export function TellMore() {
  return (
    <View style={styles.container}>
      <Box style={styles.backButtonBox}>
        <BackButton onClick={() => {}} />
      </Box>

      <VStack style={styles.inputFields}>
        <Text style={styles.headerText}>Tell us more</Text>

        <Input
          style={styles.input}
          size="xl"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}>
          <InputField placeholder="Choose your birth date" type="text" />
        </Input>

        <Select>
          <SelectTrigger style={styles.select}>
            <SelectInput placeholder="Race" style={styles.selectText} />
            {/* <Image style={styles.selectImg} source={require("../../assets/images/DownArrow.png")}></Image> */}
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem label="White" value="White" />
              <SelectItem label="Hispanic" value="Hispanic" />
              <SelectItem label="Black" value="Black" />
              <SelectItem label="Asian" value="Asian" />
              <SelectItem
                label="American Indian/Alaska Native"
                value="American Indian/Alaska Native"
              />
              <SelectItem
                label="Native Hawaiian/Other Pacific Islander"
                value="Native Hawaiian/Other Pacific Islander"
              />
              <SelectItem label="Middle Eastern" value="Middle Eastern" />
              <SelectItem label="Multiple Races" value="AsMultiple Racesian" />
              <SelectItem label="Prefer not to say" value="Prefer not to say" />
            </SelectContent>
          </SelectPortal>
        </Select>

        <Select>
          <SelectTrigger style={styles.select}>
            <SelectInput placeholder="Ethnicity" style={styles.selectText} />
            {/* <Image style={styles.selectImg} source={require("../../assets/images/DownArrow.png")}></Image> */}
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem
                label="Hispanic or Latino"
                value="Hispanic or Latino"
              />
              <SelectItem
                label="Not Hispanic or Latino"
                value="Not Hispanic or Latino"
              />
              <SelectItem label="Prefer not to say" value="Prefer not to say" />
            </SelectContent>
          </SelectPortal>
        </Select>
      </VStack>

      <Box style={styles.horStack}>
        <Text color="black" style={styles.horText}>
          Birth Sex
        </Text>
        <HStack space="lg">
          <Pressable style={styles.pressable1}>
            <Text color="black">Male</Text>
          </Pressable>
          <Pressable style={styles.pressable2}>
            <Text color="black">Female</Text>
          </Pressable>
          <Pressable style={styles.pressable3}>
            <Text color="black" style={styles.centerText}>
              Prefer not to answer
            </Text>
          </Pressable>
        </HStack>
      </Box>

      <Box style={styles.horStack}>
        <Text color="black" style={styles.horText}>
          Current Sex
        </Text>
        <HStack space="lg">
          <Pressable style={styles.pressable1}>
            <Text color="black">Male</Text>
          </Pressable>
          <Pressable style={styles.pressable2}>
            <Text color="black">Female</Text>
          </Pressable>
          <Pressable style={styles.pressable3}>
            <Text color="black" style={styles.centerText}>
              Non-binary
            </Text>
          </Pressable>
        </HStack>
      </Box>

      <Box style={styles.buttonBox}>
        <PrimaryButton text="Continue" onClick={() => {}} />
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  horText: {
    fontWeight: 'bold',
    marginBottom: 24,
    fontSize: 16,
  },

  horStack: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 25,
    marginRight: 16,
  },

  pressable1: {
    backgroundColor: '#D6F7FF',
    maxWidth: 103,
    height: 90,
    borderRadius: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressable2: {
    backgroundColor: '#FEE2E2',
    maxWidth: 103,
    height: 90,
    borderRadius: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressable3: {
    backgroundColor: '#EFE5DC',
    maxWidth: 103,
    height: 90,
    borderRadius: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  centerText: {
    textAlign: 'center',
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
