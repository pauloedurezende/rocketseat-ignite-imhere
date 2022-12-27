import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    flexDirection: 'row',
    marginBottom: 10,
    width: '100%',
  },
  name: {
    color: '#fdfcfe',
    flex: 1,
    fontSize: 16,
    marginLeft: 16,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#e23c44',
    borderRadius: 5,
    height: 56,
    justifyContent: 'center',
    width: 56,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
});
