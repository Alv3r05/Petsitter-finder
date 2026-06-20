import { Pressable, Text, StyleSheet } from 'react-native';
import { colors, radius, typography } from '../theme';

export default function AppButton({
  title,
  onPress,
  variant = 'primary',
  style,
}) {
  const isSecondary = variant === 'secondary';
  const isOutline = variant === 'outline';

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        isSecondary && styles.secondary,
        isOutline && styles.outline,
        pressed && styles.pressed,
        style,
      ]}
    >
      <Text
        style={[
          styles.text,
          isSecondary && styles.textDark,
          isOutline && styles.textOutline,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    borderRadius: radius.button,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  secondary: {
    backgroundColor: colors.secondary,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.primary,
  },
  pressed: {
    opacity: 0.8,
  },
  text: {
    ...typography.label,
    color: colors.white,
  },
  textDark: {
    color: colors.text,
  },
  textOutline: {
    color: colors.primary,
  },
});
