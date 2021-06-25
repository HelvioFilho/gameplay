import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    width: 48,
    height: 48,
    backgroundColor: theme.colors.secondary40,
    color: theme.colors.heading,
    borderRadius: 8,
    marginRight: 4,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
    textAlign: 'center',
  }
});