import React, {useContext, useRef, useEffect, useState} from 'react';
import { SafeAreaView, Text, TouchableOpacity, Platform, View, Dimensions } from 'react-native';
import {AuthContext} from '../../../Providers/AuthProvider'
import Button from '../../../components/Button'
import ButtonSelect from '../../../components/ButtonSelect'
import {useNavigation} from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import { Container, BoxButtons, ButtonText, Content,Title, Alert } from './styles';
import Icon from 'react-native-vector-icons/Feather'
import StatusBarIOS from '../../../components/StatusBar'
import CheckBox from '../../../components/CheckBox'
const { height } = Dimensions.get('window')
import { FormHandles } from '@unform/core'
import api from '../../../services/api'
import SelectItem from '../../../components/SelectItem'
import { FlatList } from 'react-native-gesture-handler';
export interface ApiRequest {
  id: number;
  nome: string;
}


export const Orientacao: React.FC = () => {
  const {user, logout} = useContext(AuthContext)
  const formRef = useRef<FormHandles>(null)
  const navigation = useNavigation();
  const [dataOrientacao, setDataOrientacao] = useState<ApiRequest[]>([])
  const [selectedOption, setselectedOption] = useState()
  const [selectedOptions, setselectedOptions] = useState<number[]>([])
  const d = Dimensions.get('window')
  const isX = !!(Platform.OS === 'ios' && (d.height > 800 || d.width > 800))

  useEffect(() => {
    api.get('/orientacaoSexual').then((response) => {
      setDataOrientacao(response.data)
    })
  }, [])

  function handleMultipleSelectOption(id: number) {
    const alreadySelected = selectedOptions.findIndex((option) => option === id)

    if (alreadySelected >= 0) {
      const filteredOptions = selectedOptions.filter((option) => option !== id)

      setselectedOptions(filteredOptions)
    } else {
      setselectedOptions([...selectedOptions, id])
    }
  }

  function selected(id: number) {
    const filteredOptions = selectedOptions.filter((option) => option !== id)
    setselectedOption(id)
  }



  console.log(dataOrientacao)
  return (
    <>
    {isX ? (
        <>
        <View style={{ height: 40, backgroundColor: '#000' }} />
        <StatusBarIOS backgroundColor="#000" barStyle="light-content" />
        </>
      ) : (
        <StatusBarIOS backgroundColor="#000" barStyle="light-content" />
      )}
    <SafeAreaView >
      <Progress.Bar progress={0.28} width={600} height={8} borderColor={'#B75FBD'} color={'#B75FBD'} animated={true} borderRadius={0} borderWidth={0}/>
      <Container>
      <BoxButtons>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name='chevron-left' size={42} color='#cecece'/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Preferencia')}>
                <ButtonText>PULAR</ButtonText>
            </TouchableOpacity>
        </BoxButtons>
        <Content ref={formRef}>
            <Title>Minha orientação sexual é:</Title>

              <Alert>Selecione até 3 opções</Alert>

            <FlatList
              data={dataOrientacao}
              renderItem={({item}) => (
                <SelectItem
                  selected={selectedOption === item.id}
                  key={String(item.id)}
                  onPress={() => selected(item.id)}
                  >
                  {item.nome}
                </SelectItem>
              )}
              keyExtractor={(item) => (item.id).toString()}
              style={{maxHeight: 350}}
            />

            <View style={{marginTop: -90}}>
            <CheckBox name='orientacaoSexual'  options={[{label: 'Adicionar minha orientação sexual ao meu perfil', value: '1'}]} />
            <Button onPress={() => navigation.navigate('Preferencia')} style={{marginTop: 22}}>CONTINUAR</Button>
            </View>

          </Content>

      </Container>


    </SafeAreaView>
    </>
  )
}


