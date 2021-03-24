import React, {useContext, useState, useEffect} from 'react';
import { SafeAreaView, View, Platform, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import {AuthContext} from '../../../Providers/AuthProvider'
import Button from '../../../components/Button'
import ButtonSelect from '../../../components/ButtonSelect'
import {useNavigation} from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import { Container, ButtonText, BoxButtons, Content, Title, Alert } from './styles';
import Icon from 'react-native-vector-icons/Feather'
const { height } = Dimensions.get('window')
import StatusBarIOS from '../../../components/StatusBar'
import api from '../../../services/api'
import SelectItem from '../../../components/SelectItem'
export interface ApiRequest {
  id: number;
  nome: string;
}

export const Interesses: React.FC = () => {
  const {user, logout} = useContext(AuthContext)
  const navigation = useNavigation();
  const d = Dimensions.get('window')
  const [dataInteresses, setDataInteresses] = useState<ApiRequest[]>([])
  const [selectedOption, setselectedOption] = useState()
  const [selectedOptions, setselectedOptions] = useState<number[]>([])
  const isX = !!(Platform.OS === 'ios' && (d.height > 800 || d.width > 800))

  useEffect(() => {
    api.get('/interesses').then((response) => {
      setDataInteresses(response.data)
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
      <Progress.Bar progress={0.6} width={600} height={8} borderColor={'#B75FBD'} color={'#B75FBD'} animated={true} borderRadius={0} borderWidth={0}/>
      <Container>
        <BoxButtons>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Icon name='chevron-left' size={42} color='#cecece'/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Fotos')}>
                  <ButtonText>PULAR</ButtonText>
              </TouchableOpacity>
        </BoxButtons>
        <Content>
            <Title>Interesses</Title>
            <Alert>Selecione até 5 interesses</Alert>
            <FlatList
              data={dataInteresses}
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
            <Button onPress={() => navigation.navigate('Fotos')} style={{marginTop: (height / 10) * 1.5}}>CONTINUAR</Button>
          </Content>
      </Container>


    </SafeAreaView>
    </>
  )
}


