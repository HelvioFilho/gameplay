import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,
  }
});