import {
    View,
    Text,
    Button,
    StyleSheet,
  } from 'react-native';
  
  export default function SittersScreen({
    navigation,
  }) {
    return (
      <View style={styles.container}>
        <Text style={styles.card}>
          👩 María López{"\n"}
          ⭐ 4.8{"\n"}
          📍 Ate{"\n"}
          S/20 por hora
        </Text>
  
        <Button
          title="Ver Perfil"
          onPress={() =>
            navigation.navigate('SitterDetail')
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
    card: {
      borderWidth: 1,
      padding: 20,
      borderRadius: 10,
      marginBottom: 20,
    },
  });