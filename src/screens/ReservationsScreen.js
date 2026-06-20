import { Text, StyleSheet } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import Card from '../components/Card';
import AppButton from '../components/AppButton';
import { colors, spacing, typography } from '../theme';

export default function ReservationsScreen() {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Mis reservas</Text>
      <Text style={styles.subtitle}>Gestiona tus servicios programados.</Text>

      <Card>
        <Text style={styles.status}>Confirmada</Text>
        <Text style={styles.label}>Mascota</Text>
        <Text style={styles.value}>Max</Text>

        <Text style={[styles.label, styles.section]}>Cuidador</Text>
        <Text style={styles.value}>María López</Text>

        <Text style={[styles.label, styles.section]}>Fecha</Text>
        <Text style={styles.value}>20/06/2026</Text>

        <Text style={[styles.label, styles.section]}>Estado</Text>
        <Text style={styles.value}>Servicio en curso</Text>

        <AppButton
          title="Ver monitoreo"
          variant="secondary"
          style={styles.button}
        />
        <AppButton
          title="Cancelar reserva"
          variant="outline"
          style={styles.button}
        />
      </Card>
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
  status: {
    ...typography.caption,
    color: colors.white,
    backgroundColor: colors.primary,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: spacing.sm,
    overflow: 'hidden',
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
  button: {
    marginTop: spacing.sm,
  },
});
