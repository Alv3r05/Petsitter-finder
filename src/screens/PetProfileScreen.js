import { View, Text, Button, StyleSheet } from 'react-native';

export default function PetProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🐶 Max</Text>

      <Text>Raza: Labrador</Text>
      <Text>Edad: 3 años</Text>
      <Text>Peso: 18 kg</Text>

      <Text style={styles.text}>
        Amigable y juguetón.
      </Text>

      <Button title="Agregar Mascota" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  text: {
    marginVertical: 20,
  },
});