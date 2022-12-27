import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

import { styles } from './styles';
import { formatLocalizedDate } from '../../shared/utils';

export default function Home() {
  const date = formatLocalizedDate();

  const [participantName, setParticipantName] = useState('');
  const [participants, setParticipants] = useState<string[]>([]);

  function handleParticipantAdd() {
    const participantAlreadyAdded = participants.includes(participantName);

    if (participantAlreadyAdded) {
      return Alert.alert(
        'Participante existe',
        'Já existe um participante na lista com este nome'
      );
    }

    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventTitle}>Lista de Participantes</Text>
      <Text style={styles.eventDate}>{date}</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          value={participantName}
          onChangeText={setParticipantName}
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
