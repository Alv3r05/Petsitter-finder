import { FlatList, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import Card from '../components/Card';
import AppButton from '../components/AppButton';
import { sitters } from '../data/sitters';
import { colors, spacing, typography } from '../theme';

export default function SittersScreen({ navigation }) {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Cuidadores cerca de ti</Text>
      <Text style={styles.subtitle}>
        Filtra por ubicación, calificación y disponibilidad.
      </Text>

      <FlatList
        data={sitters}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.info}>⭐ {item.rating} · 📍 {item.district}</Text>
            <Text style={styles.price}>S/{item.price} por hora</Text>
            {item.verified ? (
              <Text style={styles.verified}>✓ Verificado</Text>
            ) : null}
            <AppButton
              title="Ver perfil"
              onPress={() =>
                navigation.navigate('SitterDetail', { sitter: item })
              }
              style={styles.button}
            />
          </Card>
        )}
      />
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
    marginBottom: spacing.md,
  },
  name: {
    ...typography.label,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  info: {
    ...typography.body,
    color: colors.textMuted,
    marginBottom: spacing.xs,
  },
  price: {
    ...typography.bodyMedium,
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  verified: {
    ...typography.caption,
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  button: {
    marginTop: spacing.xs,
  },
});
