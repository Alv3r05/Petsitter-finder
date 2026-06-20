import {
    View,
    Text,
    Button,
    StyleSheet,
  } from 'react-native';
  
  export default function ReservationsScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Reserva Activa
        </Text>
  
        <Text>
          Mascota: Max
        </Text>
  
        <Text>
          Cuidador: María López
        </Text>
  
        <Text>
          Fecha: 20/06/2026
        </Text>
  
        <Text>
          Estado: Confirmada
        </Text>
  
        <Button title="Cancelar" />
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
      fontSize: 28,
      marginBottom: 20,
    },
  });