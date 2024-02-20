import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import CustomTextInput from '../../components/form/CustomTextInput/index.js';
import PasswordInput from '../../components/form/PasswordInput/index.js';
import Button from '../../components/form/Button';
import { useForm } from "react-hook-form";

export default function LoginScreen({ navigation }) {
  
  const { control, handleSubmit } = useForm();
  // useEffect(()=>{
  //   console.log
  // })

  const Submit = () => {
    console.log("evento submit")
  }

  return (
    <View style={styles.container}>
      <Image 
        style={styles.imagen}
        source={{uri:'https://jgstudiotesting.000webhostapp.com/src/img/login.jfif'}}
      />
        <Text style={styles.titulo}>Hello</Text>
        <Text style={styles.subtitulos}>Login to start using the app</Text>
        <View style={styles.form}>

        <View style={{marginTop:10}}>
          <CustomTextInput
            placeholder="username@email.com"
            autoComplete="email"
            autoCapitalize="none"
            control={control}
            name="email"
            rules={{
              required: "Debe ingresar un correo.",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "Debe ser un correo válido.",
              },
            }}
          />
        </View>

        <View style={{marginTop: 60}}>
          <PasswordInput
            control={control}
            name="password"
            placeholder="Password"
            autoComplete="password"
            rules={{
              required: "Complete la contraseña.",
              minLength: {
                value: 5,
                message: "La contraseña debe tener mínimo 5 carácteres.",
              },
              maxLength: {
                value: 20,
                message: "La contraseña no puede pasar de los 20 carácteres.",
              },
            }}
          />
        </View>

        <Button 
          onPress={handleSubmit(Submit)}
          mode="filled">
          Entrar
        </Button>
        <Button 
          onPress={() => navigation.navigate("recoverPassword")}
          mode="flat">
          Recuperar Contraseña
        </Button>
        <Button 
          onPress={() => navigation.navigate("signUp")}
          mode="flat">
          Regístrate
        </Button>
      </View>
    </View>
  );
}

