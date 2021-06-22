import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary90,
  },
  image: {
    width: '100%',
    height: 360,
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50,
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 40,
    color: theme.colors.heading,
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 40,
  },
  subtitle: {
    fontFamily: theme.fonts.title500,
    fontSize: 15,
    color: theme.colors.heading,
    textAlign: 'center',
    marginBottom: 64,
    lineHeight: 25,
  }
})