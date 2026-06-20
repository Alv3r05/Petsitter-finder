import { Alert, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import AppButton from '../components/AppButton';
import Card from '../components/Card';
import { colors, spacing, typography } from '../theme';

export default function BookingScreen({ route }) {
  const sitter = route.params?.sitter;

  function confirmarReserva() {
    Alert.alert(
      'Reserva realizada correctamente',
      `Tu reserva con ${sitter?.name ?? 'el cuidador'} fue registrada exitosamente.`
    );
  }

  return (
    <ScreenContainer>
      <Text style={styles.title}>Confirmar reserva</Text>
      <Text style={styles.subtitle}>
        Revisa los detalles antes de confirmar el servicio.
      </Text>

      <Card>
        <Text style={styles.label}>Cuidador</Text>
        <Text style={styles.value}>{sitter?.name ?? 'María López'}</Text>

        <Text style={[styles.label, styles.section]}>Fecha</Text>
        <Text style={styles.value}>20/06/2026</Text>

        <Text style={[styles.label, styles.section]}>Hora</Text>
        <Text style={styles.value}>10:00 AM</Text>

        <Text style={[styles.label, styles.section]}>Duración</Text>
        <Text style={styles.value}>4 horas</Text>

        <Text style={[styles.label, styles.section]}>Dirección</Text>
        <Text style={styles.value}>Ate, Lima</Text>
      </Card>

      <AppButton title="Reservar" onPress={confirmarReserva} />
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
});
