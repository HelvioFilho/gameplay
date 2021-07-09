import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100

  },
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,

  },
  bar: {
    width: 39,
    height: 2,
    borderRadius: 2,
    backgroundColor: theme.colors.secondary30,
    alignSelf: 'center',
    marginTop: 13,
  },
  error: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  modalView: {
    margin: 30,
    backgroundColor: theme.colors.secondary90,
    borderRadius: 20,
    paddingHorizontal: 42,
    alignItems: "center",
    height: "13%",
  },
});