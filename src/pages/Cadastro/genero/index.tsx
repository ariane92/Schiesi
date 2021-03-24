import React, {useContext, useEffect, useRef, useState} from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Dimensions, Platform } from 'react-native';
import {AuthContext} from '../../../Providers/AuthProvider'
import Button from '../../../components/Button'
import CheckBox from '../../../components/CheckBox'
import ButtonSelect from '../../../components/ButtonSelect'
import StatusBarIOS from '../../../components/StatusBar'
import {useNavigation} from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import { Container, BoxButtons, Content, Title } from './styles';
import Icon from 'react-native-vector-icons/Feather'
const { height } = Dimensions.get('window')
import { FormHandles } from '@unform/core'
import api from '../../../services/api'
import SelectItem from '../../../components/SelectItem'
export interface ApiRequest {
  id: number;
  nome: string;
}


export const Genero: React.FC = () => {
  const {user, logout} = useContext(AuthContext)
  const navigation = useNavigation();
  const [dataGenero, setDataGenero] = useState<ApiRequest[]>([])
  const [selectedOption, setselectedOption] = useState()
  const [selectedOptions, setselectedOptions] = useState<number[]>([])
  const formRef = useRef<FormHandles>(null)

  useEffect(() => {
    api.get('/genero').then((response) => {
      setDataGenero(response.data)
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

  const d = Dimensions.get('window')
  const isX = !!(Platform.OS === 'ios' && (d.height > 800 || d.width > 800))
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
    <SafeAreaView>
      <Progress.Bar progress={0.22} width={600} height={8} borderColor={'#B75FBD'} color={'#B75FBD'} animated={true} borderRadius={0} borderWidth={0}/>
      <Container>
        <BoxButtons>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name='chevron-left' size={42} color='#cecece'/>
            </TouchableOpacity>
        </BoxButtons>
        <Content ref={formRef}>
            <Title>Eu sou</Title>
            {dataGenero.map((option) => (
              <SelectItem
                  selected={selectedOption === option.id}
                  key={String(option.id)}
                  onPress={() => selected(option.id)}
                  >
                  {option.nome}
              </SelectItem>
            ))}
            <CheckBox name='genero' options={[{label: 'Mostrar meu genero no meu perfil', value: '1'}]} />
            <Button onPress={() => navigation.navigate('Orientacao')} style={{marginTop: (height / 10) * 0.55}}>CONTINUAR</Button>

          </Content>


      </Container>


    </SafeAreaView>
    </>
  )
}


