import { Text, StyleSheet } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import Card from '../components/Card';
import AppButton from '../components/AppButton';
import { colors, spacing, typography } from '../theme';

export default function PetProfileScreen() {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Mis mascotas</Text>
      <Text style={styles.subtitle}>
        Registra y gestiona el perfil de tus mascotas.
      </Text>

      <Card>
        <Text style={styles.petName}>🐶 Max</Text>
        <Text style={styles.detail}>Raza: Labrador</Text>
        <Text style={styles.detail}>Edad: 3 años</Text>
        <Text style={styles.detail}>Peso: 18 kg</Text>
        <Text style={styles.description}>
          Amigable y juguetón.
        </Text>
      </Card>

      <AppButton title="Agregar mascota" />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    ...typography.h2,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  subtitle: {
    ...typography.body,
    color: colors.textMuted,
    marginBottom: spacing.lg,
  },
  petName: {
    ...typography.h2,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  detail: {
    ...typography.body,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  description: {
    ...typography.body,
    color: colors.textMuted,
    marginTop: spacing.sm,
  },
});
