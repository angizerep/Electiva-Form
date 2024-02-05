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
    fontWeight: "bold"
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
  input: {
    padding: 10,
    paddingStart: 30,
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "white"
  },
  button: {
    marginTop: 20,
    backgroundColor: "#6733E2",
    height: 50,
    width: "100%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold"
  },
  registerBtn: {
    marginTop: 10,
    height: 20,
    width: "50%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  },
  registerText: {
    color: "grey"
  }
});