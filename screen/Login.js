import * as React from 'react';
import {Button, View, TextInput, Text, StyleSheet} from 'react-native';



const Login = ({ navigation }) => {
    return (

      <View style={styles.container}>
      <Text style={styles.inputext}>Login</Text>
        <TextInput
          
           label='Email'
          style={styles.input}
        />
        <TextInput
         
          label='Password'
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          
        />
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#00FFFF',
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
    },
    inputext: {
      width: 200,
      height: 44,
      padding: 10,
      textAlign:'center',
      fontWeight:'bold',
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
    },
  });
export default Login;