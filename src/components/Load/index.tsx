import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { theme } from '../../global/styles/theme';

export function Load() {
  return (
    <View>
      <ActivityIndicator
        size="large"
        color={theme.colors.primary}
      />
    </View>
  );
}