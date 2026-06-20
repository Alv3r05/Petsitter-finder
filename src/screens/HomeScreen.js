import { View, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import AppButton from '../components/AppButton';
import Card from '../components/Card';
import { colors, spacing, typography } from '../theme';

export default function HomeScreen({ navigation }) {
  return (
    <ScreenContainer>
      <Text style={styles.greeting}>Hola, Javier 👋</Text>
      <Text style={styles.subtitle}>
        Cuidado profesional con amor incondicional.
      </Text>

      <Card style={styles.highlight}>
        <Text style={styles.highlightLabel}>Servicio activo</Text>
        <Text style={styles.highlightTitle}>Monitoreo en curso</Text>
        <Text style={styles.highlightText}>
          Max está siendo cuidado por María López
        </Text>
        <View style={styles.liveBadge}>
          <Text style={styles.liveText}>En vivo</Text>
        </View>
      </Card>

      <AppButton
        title="Buscar cuidadores"
        onPress={() => navigation.navigate('Buscar')}
        style={styles.action}
      />
      <AppButton
        title="Mis mascotas"
        variant="outline"
        onPress={() => navigation.navigate('PetProfile')}
        style={styles.action}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  greeting: {
    ...typography.h1,
    fontSize: 28,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  subtitle: {
    ...typography.body,
    color: colors.textMuted,
    marginBottom: spacing.lg,
  },
  highlight: {
    backgroundColor: colors.white,
  },
  highlightLabel: {
    ...typography.caption,
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  highlightTitle: {
    ...typography.h2,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  highlightText: {
    ...typography.body,
    color: colors.textMuted,
    marginBottom: spacing.sm,
  },
  liveBadge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.secondary,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  liveText: {
    ...typography.caption,
    color: colors.text,
  },
  action: {
    marginBottom: spacing.sm,
  },
});
