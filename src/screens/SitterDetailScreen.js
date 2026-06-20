import {
    View,
    Text,
    Button,
    StyleSheet,
  } from 'react-native';
  
  export default function SitterDetailScreen({
    navigation,
  }) {
    return (
      <View style={styles.container}>
        <Text style={styles.photo}>👩</Text>
  
        <Text style={styles.name}>
          María López
        </Text>
  
        <Text>
          Experiencia: 3 años
        </Text>
  
        <Text>
          Especialidades:
        </Text>
  
        <Text>• Perros</Text>
        <Text>• Gatos</Text>
  
        <Text>
          ⭐ 4.8
        </Text>
  
        <Text>
          S/20 por hora
        </Text>
  
        <Button
          title="Reservar"
          onPress={() =>
            navigation.navigate('Booking')
          }
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
    photo: {
      fontSize: 80,
      textAlign: 'center',
    },
    name: {
      fontSize: 30,
      textAlign: 'center',
      marginBottom: 30,
    },
  });