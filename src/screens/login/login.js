import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import styles from './styles';

export default function LoginScreen() {

  return (
    <View style={styles.container}>
      <Image 
        style={styles.imagen}
        source={{uri:'https://jgstudiotesting.000webhostapp.com/src/img/login.jfif'}}
      />
      <Text style={styles.titulo}>Hello</Text>
      <Text style={styles.subtitulos}>Login to start using the app</Text>
      <View style={styles.form}>
        <TextInput
          placeholder='username@email.com'
          style={styles.input}
        />
        <TextInput
          placeholder='password'
          style={styles.input}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerBtn}>
          <Text style={styles.registerText}>Registrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

