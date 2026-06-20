import {
    View,
    Text,
    Button,
    Alert,
    StyleSheet,
  } from 'react-native';
  
  export default function BookingScreen() {
    function reservar() {
      Alert.alert(
        'Reserva',
        'Reserva realizada exitosamente'
      );
    }
  
    return (
      <View style={styles.container}>
        <Text>
          Fecha: 20/06/2026
        </Text>
  
        <Text>
          Hora: 10:00 AM
        </Text>
  
        <Text>
          Duración: 4 horas
        </Text>
  
        <Text>
          Dirección: Ate, Lima
        </Text>
  
        <Button
          title="Confirmar Reserva"
          onPress={reservar}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 30,
      justifyContent: 'center',
    },
  });