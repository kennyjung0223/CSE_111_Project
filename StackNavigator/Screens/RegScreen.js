import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';

export default function Regform({ navigation })  {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.regform}>
          <Text style={styles.header}>Registration</Text>

          <TextInput 
              style={styles.textinput} 
              placeholder='Your name' 
              placeholderTextColor='#fff' 
          />


          <TextInput 
              style={styles.textinput} 
              placeholder='Username' 
              placeholderTextColor='#fff' 
          />

          <TextInput 
              style={styles.textinput} 
              placeholder='Email' 
              placeholderTextColor='#fff' 
          />

          <TextInput 
              style={styles.textinput} 
              placeholder='Password' 
              placeholderTextColor='#fff' 
              secureTextEntry={true}
          />
          {/* Change navigation to homescreen after user registers */}
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.btntext}>Sign Up</Text>
          </TouchableOpacity>

        </View>
      </TouchableWithoutFeedback>
    );
  }

const styles = StyleSheet.create({
  regform: {
    flex: 1,
    backgroundColor: '#36485f',
    justifyContent: 'center',
    paddingBottom: 140,
    paddingLeft: 60, 
    paddingRight: 60

  },
  header: {
      fontSize: 24,
      color: '#fff',
      paddingBottom: 10,
      marginBottom: 40,
      borderBottomColor: '#199187',
      borderBottomWidth: 1,
  },
  textinput: {
      alignSelf: 'stretch',
      height: 40,
      marginBottom: 30,
      color: '#fff',
      borderBottomColor: '#f8f8f8',
      borderBottomWidth: 1,
  },
  btn: {
      alignSelf: 'stretch',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#59cbbd',
      marginTop: 30,
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
