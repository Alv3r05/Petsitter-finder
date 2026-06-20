import { View, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Buscar Cuidadores"
        onPress={() => navigation.navigate('Sitters')}
      />

      <View style={styles.space} />

      <Button
        title="Mis Mascotas"
        onPress={() => navigation.navigate('PetProfile')}
      />

      <View style={styles.space} />

      <Button
        title="Mis Reservas"
        onPress={() => navigation.navigate('Reservations')}
      />

      <View style={styles.space} />

      <Button
        title="Mi Perfil"
        onPress={() => navigation.navigate('Profile')}
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
  space: {
    marginBottom: 20,
  },
});