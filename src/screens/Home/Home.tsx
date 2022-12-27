import { View, Text } from 'react-native';

import { styles } from './styles';
import { formatLocalizedDate } from '../../shared/utils';

export default function Home() {
  const date = formatLocalizedDate();

  return (
    <View style={styles.container}>
      <Text style={styles.eventTitle}>Lista de Participantes</Text>
      <Text style={styles.eventDate}>{date}</Text>
    </View>
  );
}
