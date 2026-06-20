import { useState } from 'react';
import { StyleSheet } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
import { spacing } from '../theme';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScreenContainer style={styles.container}>
      <AppInput
        label="Correo"
        placeholder="correo@ejemplo.com"
        value={email}
        onChangeText={setEmail}
      />
      <AppInput
        label="Contraseña"
        placeholder="Ingresa tu contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <AppButton
        title="Iniciar sesión"
        onPress={() => navigation.replace('Main')}
        style={styles.button}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  button: {
    marginTop: spacing.sm,
  },
});
