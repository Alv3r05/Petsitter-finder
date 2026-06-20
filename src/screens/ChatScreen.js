import { View, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import Card from '../components/Card';
import { colors, spacing, typography } from '../theme';

export default function ChatScreen() {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Comunicación</Text>
      <Text style={styles.subtitle}>
        Chatea directamente con cuidadores para coordinar el servicio.
      </Text>

      <Card>
        <Text style={styles.chatName}>María López</Text>
        <Text style={styles.chatPreview}>
          Hola, ¿a qué hora recojo a Max?
        </Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Pendiente</Text>
        </View>
      </Card>

      <Card>
        <Text style={styles.chatName}>Carlos Díaz</Text>
        <Text style={styles.chatPreview}>
          Reporte enviado correctamente ✓
        </Text>
        <View style={[styles.badge, styles.badgeDone]}>
          <Text style={styles.badgeText}>Finalizado</Text>
        </View>
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
  chatName: {
    ...typography.label,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  chatPreview: {
    ...typography.body,
    color: colors.textMuted,
    marginBottom: spacing.sm,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.secondary,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeDone: {
    backgroundColor: colors.primary,
  },
  badgeText: {
    ...typography.caption,
    color: colors.white,
  },
});
