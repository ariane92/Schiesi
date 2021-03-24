import React, {useState, useEffect} from 'react';
import {scale} from 'react-native-size-matters'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Animated, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import IconFeather from 'react-native-vector-icons/Feather'
const { height } = Dimensions.get('window')




const Modal = ({ show, close }) => {
  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(scale(height)),
    modal: new Animated.Value(scale(height))
  })

  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, { toValue: 0, duration: 100, useNativeDriver: true  }),
      Animated.timing(state.opacity, { toValue: 1, duration: 300, useNativeDriver: true  }),
      Animated.spring(state.modal, { toValue: 0, bounciness: 5, useNativeDriver: true })
    ]).start()
  }

  const closeModal = () => {
    Animated.sequence([
      Animated.timing(state.modal, { toValue: scale(height), duration: 250, useNativeDriver: true }),
      Animated.timing(state.opacity, { toValue: 0, duration: 300, useNativeDriver: true  }),
      Animated.timing(state.container, { toValue: scale(height), duration: 100, useNativeDriver: true})
    ]).start()
  }

  useEffect(() => {
    if(show){
      openModal()
    }else{
      closeModal()
    }
  }, [show])

  return (
    <Animated.View
      style={[styles.container, {
        opacity: state.opacity,
        transform: [
          { translateY: state.container }
        ]
      }]}
    >
      <Animated.View
        style={[styles.modal, {
          transform: [
            { translateY: state.modal }
          ]
        }]}
      >
        <View style={styles.indicator} />
        <TouchableOpacity onPress={close} style={{marginLeft: scale(-10), marginTop: scale(10)}}>
        <IconFeather name='x' size={scale(32)} color='#000'/>
        </TouchableOpacity>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <Icon name='facebook-f' size={scale(20)} color='#4267B2' style={styles.icon}/>
            <Text style={styles.buttonText}>Entrar com Facebook</Text>
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity style={styles.button}>
            <Icon name='google' size={scale(20)} color='#EA4335'style={styles.icon}/>
            <Text style={styles.buttonText}>Entrar com Gmail</Text>
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity style={styles.button}>
            <Icon name='phone' size={scale(20)} color='#34a853'style={styles.icon}/>
            <Text style={styles.buttonText}>Entrar com número de telefone</Text>
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity style={styles.button}>
            <IconFeather name='mail' size={scale(20)} color='#fbbc05'style={styles.icon}/>
            <Text style={styles.buttonText}>Entrar com Email</Text>
          </TouchableOpacity>
          <View style={styles.line} />
          {Platform.OS === 'ios' &&
          <>
            <TouchableOpacity style={styles.button}>
              <Icon name='apple' size={scale(20)} color='#000'style={styles.icon}/>
              <Text style={styles.buttonText}>Entrar com Apple</Text>
            </TouchableOpacity>
            <View style={styles.line} />
          </>

          }
        </View>
      </Animated.View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute'
  },

  buttons: {
    alignItems: 'center',
    marginTop: scale(16),
    justifyContent: 'center'
  },

  icon: {
    marginLeft: scale(52)
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scale(8),

  },

  buttonText: {
    marginLeft: scale(10),
    fontSize: scale(14),

    flex: 1,
  },

  modal: {
    bottom: 0,
    position: 'absolute',
    height: scale(300),
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    paddingLeft: scale(25),
    paddingRight: scale(25)
  },
  indicator: {
    width: scale(50),
    height: scale(5),
    backgroundColor: '#ccc',
    borderRadius: scale(50),
    alignSelf: 'center',
    marginTop: scale(5),
  },
  line: {
    width: scale(300),
    height: scale(1),
    backgroundColor: '#ccc',
    alignSelf: 'center',
    marginBottom: scale(8),

  },
  text: {
    marginTop: scale(50),
    textAlign: 'center'
  },
  btn: {
    width: '100%',
    height: scale(50),
    borderRadius: scale(10),
    backgroundColor: '#9b59b6',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(30),
  }
})

export default Modal;
