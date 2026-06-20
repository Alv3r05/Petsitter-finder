import { Text, StyleSheet } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import AppButton from '../components/AppButton';
import Card from '../components/Card';
import { colors, spacing, typography } from '../theme';

export default function SitterDetailScreen({ navigation, route }) {
  const sitter = route.params?.sitter ?? {
    name: 'María López',
    rating: 4.8,
    price: 20,
    experience: '3 años',
    specialties: ['Perros', 'Gatos'],
    district: 'Ate',
  };

  return (
    <ScreenContainer style={styles.container}>
      <Text style={styles.photo}>👩</Text>
      <Text style={styles.name}>{sitter.name}</Text>
      <Text style={styles.rating}>⭐ {sitter.rating}</Text>

      <Card>
        <Text style={styles.label}>Experiencia</Text>
        <Text style={styles.value}>{sitter.experience}</Text>

        <Text style={[styles.label, styles.section]}>Especialidades</Text>
        {sitter.specialties.map((item) => (
          <Text key={item} style={styles.value}>• {item}</Text>
        ))}

        <Text style={[styles.label, styles.section]}>Ubicación</Text>
        <Text style={styles.value}>📍 {sitter.district}</Text>

        <Text style={[styles.label, styles.section]}>Tarifa</Text>
        <Text style={styles.price}>S/{sitter.price} por hora</Text>
      </Card>

      <AppButton
        title="Contactar"
        variant="outline"
        onPress={() => navigation.getParent()?.navigate('Chat')}
        style={styles.action}
      />
      <AppButton
        title="Reservar"
        onPress={() => navigation.navigate('Booking', { sitter })}
        style={styles.action}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  photo: {
    fontSize: 80,
    marginBottom: spacing.sm,
  },
  name: {
    ...typography.h1,
    fontSize: 28,
    color: colors.text,
    textAlign: 'center',
  },
  rating: {
    ...typography.bodyMedium,
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
  price: {
    ...typography.h2,
    fontSize: 20,
    color: colors.primary,
  },
  action: {
    width: '100%',
    marginBottom: spacing.sm,
  },
});
