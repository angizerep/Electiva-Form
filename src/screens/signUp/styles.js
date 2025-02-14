import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    alignSelf: "flex-start",
    marginLeft: 40,
    fontSize: 80,
    fontWeight: "bold",
  },
  subtitulos: {
    alignSelf: "flex-start",
    marginLeft: 40,
    transform: [{translateY: -20}],
    color: "grey"
  },
  imagen: {
    width:"100%",
    height:300
  },
  form: {
    paddingLeft: 40,
    paddingRight: 40,
    width: "100%",
    flex: 1,
    backgroundColor: "white"
  },
  text: {
    color: "white",
    fontWeight: "bold"
  },
  subtitulosPrimero:{
    alignSelf: "flex-start",
    fontSize: 20,
    marginLeft: 40,
    paddingTop: 10,
    color: "#aa8cef",
  },
  subtitulosSegundo:{
    alignSelf: "flex-start",
    fontSize: 15,
    marginLeft: 40,
    paddingBottom: 50,
    color: "#fc6a97",
  }
});