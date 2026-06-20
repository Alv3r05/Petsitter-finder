import {
    View,
    Text,
    Button,
    StyleSheet,
  } from 'react-native';
  
  export default function ProfileScreen({
    navigation,
  }) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          👤 Javier Henriquez
        </Text>
  
        <Text>
          Correo:
        </Text>
  
        <Text>
          correo@gmail.com
        </Text>
  
        <Text>
          Tipo:
        </Text>
  
        <Text>
          Dueño de mascota
        </Text>
  
        <View style={{ marginTop: 30 }}>
          <Button
            title="Cerrar Sesión"
            onPress={() =>
              navigation.navigate('Welcome')
            }
          />
        </View>
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
      marginBottom: 30,
    },
  });