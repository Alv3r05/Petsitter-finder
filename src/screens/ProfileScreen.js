import { Text, StyleSheet } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import Card from '../components/Card';
import AppButton from '../components/AppButton';
import { CommonActions } from '@react-navigation/native';
import { colors, spacing, typography } from '../theme';

export default function ProfileScreen({ navigation }) {
  function handleLogout() {
    const rootNavigation = navigation.getParent()?.getParent();
    if (rootNavigation) {
      rootNavigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Welcome' }],
        })
      );
    }
  }

  return (
    <ScreenContainer>
      <Text style={styles.title}>👤 Javier Henriquez</Text>
      <Text style={styles.role}>Dueño de mascota</Text>

      <Card>
        <Text style={styles.label}>Correo</Text>
        <Text style={styles.value}>correo@gmail.com</Text>

        <Text style={[styles.label, styles.section]}>Tipo de cuenta</Text>
        <Text style={styles.value}>Dueño de mascota</Text>

        <Text style={[styles.label, styles.section]}>Estado</Text>
        <Text style={styles.verified}>Verificado</Text>
      </Card>

      <AppButton
        title="Editar perfil"
        variant="outline"
        style={styles.button}
      />
      <AppButton
        title="Cerrar sesión"
        onPress={handleLogout}
        style={styles.button}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    ...typography.h1,
    fontSize: 28,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  role: {
    ...typography.body,
    color: colors.textMuted,
    marginBottom: spacing.lg,
  },
  label: {
    ...typography.caption,
    color: colors.textMuted,
  },
  section: {
    marginTop: spacing.sm,
  },
  value: {
    ...typography.body,
    color: colors.text,
  },
  verified: {
    ...typography.bodyMedium,
    color: colors.primary,
  },
  button: {
    marginBottom: spacing.sm,
  },
});
