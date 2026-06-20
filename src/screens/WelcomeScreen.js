import { View, Text, Button, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🐾</Text>

      <Text style={styles.title}>
        PetSitter Finder
      </Text>

      <Text style={styles.subtitle}>
        Encuentra cuidadores confiables para tu mascota.
      </Text>

      <Button
        title="Iniciar Sesión"
        onPress={() => navigation.navigate('Login')}
      />

      <View style={{ marginTop: 10 }} />

      <Button
        title="Registrarse"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
  logo: {
    fontSize: 80,
    textAlign: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 30,
  },
});