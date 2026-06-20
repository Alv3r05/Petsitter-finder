import { useState } from 'react';
import { StyleSheet } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
import { spacing } from '../theme';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <ScreenContainer style={styles.container}>
      <AppInput
        label="Nombre completo"
        placeholder="Tu nombre"
        value={name}
        onChangeText={setName}
      />
      <AppInput
        label="Correo"
        placeholder="correo@ejemplo.com"
        value={email}
        onChangeText={setEmail}
      />
      <AppInput
        label="Contraseña"
        placeholder="Crea una contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <AppInput
        label="Confirmar contraseña"
        placeholder="Repite tu contraseña"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <AppButton
        title="Crear cuenta"
        onPress={() => navigation.navigate('Login')}
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
