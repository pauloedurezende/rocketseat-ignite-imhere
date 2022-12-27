import { View, Text } from 'react-native';

import { styles } from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventTitle}>Lista de Participantes</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Dezembro de 2022</Text>
    </View>
  );
}
