import { View, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import AppButton from '../components/AppButton';
import { colors, spacing, typography } from '../theme';

export default function WelcomeScreen({ navigation }) {
  return (
    <ScreenContainer style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.logo}>🐾</Text>
        <Text style={styles.title}>PetSitter Finder</Text>
        <Text style={styles.tagline}>Tu mascota en las mejores manos.</Text>
        <Text style={styles.subtitle}>
          Encuentra cuidadores confiables para tu mascota con perfiles
          verificados y seguimiento en tiempo real.
        </Text>
      </View>

      <View style={styles.actions}>
        <AppButton
          title="Iniciar sesión"
          onPress={() => navigation.navigate('Login')}
        />
        <View style={styles.gap} />
        <AppButton
          title="Registrarse"
          variant="outline"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  hero: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 80,
    marginBottom: spacing.md,
  },
  title: {
    ...typography.h1,
    color: colors.text,
    textAlign: 'center',
  },
  tagline: {
    ...typography.bodyMedium,
    color: colors.primary,
    textAlign: 'center',
    marginTop: spacing.sm,
  },
  subtitle: {
    ...typography.body,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: spacing.lg,
    lineHeight: 24,
  },
  actions: {
    marginBottom: spacing.lg,
  },
  gap: {
    height: spacing.sm,
  },
});
