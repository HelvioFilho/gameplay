import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    flexDirection: 'row',
  },
  greeting: {
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    color: theme.colors.heading,
    marginRight: 6,
  },
  username: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.heading,
  },
  message: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
  },
  boxBottom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 20,
    color: theme.colors.heading,
    textAlign: 'center',
    paddingTop: 28,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleColor: {
    color: theme.colors.primary,
  },
  btn: {
    width: 180,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    marginHorizontal: 4
  },
  btnBody: {
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    flex: 1,
    color: theme.colors.heading,
    textAlign: 'center',
    borderRadius: 8,
    height: 56,
    paddingTop: 16
  },
  cancel: {
    borderWidth: 1,
    borderColor: theme.colors.heading,
  },
  confirm: {
    backgroundColor: theme.colors.primary,
  }
});