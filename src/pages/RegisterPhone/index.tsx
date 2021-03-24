
import React, { useState, useRef, useCallback } from 'react';
import {Text, View, Platform, StatusBar, TouchableOpacity, StyleSheet} from 'react-native';
import Button from '../../components/Button'
import auth from '@react-native-firebase/auth';
import PhoneInput from "react-native-phone-number-input";
import {scale, moderateScale} from 'react-native-size-matters'
import {Container, Title, BoxButton, Content} from './styles'
import Icon3 from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';

import { SafeAreaView } from 'react-native-safe-area-context'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
Icon3.loadFont()

const RegisterPhone: React.FC = () => {

  const CELL_COUNT = 6;
  const navigation = useNavigation()
  const [valueNumber, setValueNumber] = useState("");
  const phoneInput = useRef<PhoneInput>(null)
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const  signInWithPhoneNumber = async (phoneNumber) => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  const confirmCode = async () => {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }


  const sendCode = useCallback(async (phoneNumber) => {
    const checkValid = phoneInput.current?.isValidNumber(phoneNumber);
    console.log(checkValid)
    setShowMessage(true);
    setValid(checkValid ? checkValid : false);

    if(checkValid){
      console.log('chega aqui?')
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    }

  }, [])

  if (!confirm) {
    return (
      <>
      {Platform.OS === 'ios' ?  <StatusBar  barStyle={"dark-content"}/>
        :  <StatusBar  barStyle={"light-content"}/>
    }
        <SafeAreaView>
          <Container>
            <BoxButton>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon3 name='chevron-left' size={42} color='#cecece'/>
              </TouchableOpacity>
            </BoxButton>

            <Title>Digite seu telefone com o DDD</Title>
            {showMessage && (
            <View style={{marginBottom: 12}}>
              {!valid &&
                <Text style={{fontWeight: 'bold', color: 'red', textAlign: 'center'}}>Número invalido, favor digitar um numero valido</Text>
              }
            </View>
          )}
            <Content>
              <PhoneInput
                    ref={phoneInput}
                    defaultValue={valueNumber}
                    defaultCode="BR"
                    onChangeFormattedText={(text) => {
                      setValueNumber(text);
                      setFormattedValue(text);
                    }}
                   containerStyle={{marginBottom: scale(12)}}
                    withDarkTheme
                    withShadow
                    autoFocus
                    placeholder={'(00) 00000-0000'}
                />
            </Content>
          </Container>

        </SafeAreaView>
        <Button onPress={() => sendCode(valueNumber)}>Continuar</Button>
      </>
    );
  }

  return (
    <>
    {Platform.OS === 'ios' ?  <StatusBar  barStyle={"dark-content"}/>
        :  <StatusBar  barStyle={"light-content"}/>
    }
    <SafeAreaView>
      <Container>
        <BoxButton>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon3 name='chevron-left' size={42} color='#cecece'/>
          </TouchableOpacity>
        </BoxButton>
        <Title>Digite o código enviado.</Title>
        <Content>
          <CodeField
            ref={ref}
            {...props}
            value={code}
            onChangeText={text => setCode(text)}
            cellCount={CELL_COUNT}
            autoFocus
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />

        </Content>
      </Container>
    </SafeAreaView>
    <Button style={{ marginTop: 32}}onPress={() => confirmCode()} activeOpacity={!disabled ? 1 : 0.7}>Confirmar código</Button>
    </>
  );
}

export default RegisterPhone;

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 1,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#825BC9',
  },
});
