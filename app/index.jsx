import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const backImg = require('./images/background.jpg')

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={backImg} style={styles.image}/>
      </View>
      <StatusBar style="auto" />
      <Text style={styles.title}>Mfit</Text>
      <Text style={styles.subtitle}>Your journey to a healthier life starts here</Text>
      <TouchableOpacity style={styles.button}>
        <Link href="/home" style={styles.buttonText}>Sign In</Link>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSecondary}>
        <Link href="/signup" style={styles.buttonTextSecondary}>Sign Up</Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#25292e',
    padding: 16,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'lightblue',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  button: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonSecondary: {
    backgroundColor: 'white',
    borderColor: 'blue',
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
  },
  buttonTextSecondary: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
