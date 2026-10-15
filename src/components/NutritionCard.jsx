import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function NutritionCard({
  title,
  description,
  color,
  onPress,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        { backgroundColor: color },
        pressed && styles.pressed,
      ]}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    minHeight: 145,
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 28,
    marginBottom: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: '800',
    color: '#254531',
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    lineHeight: 18,
    color: '#596B5C',
  },
  pressed: {
    opacity: 0.75,
  },
});