import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';

import { styles } from './styles';
import { formatLocalizedDate } from '../../shared/utils';
import { Participant } from '../../components';

export default function Home() {
  const date = formatLocalizedDate();

  const [participantName, setParticipantName] = useState('');
  const [participants, setParticipants] = useState<string[]>([]);

  function handleParticipantAdd() {
    if (participantName.length === 0) return;

    const participantAlreadyAdded = participants.includes(participantName);

    if (participantAlreadyAdded) {
      return Alert.alert(
        'Already exists',
        'There is already a participant in the list with the name that was entered'
      );
    }

    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {
    return Alert.alert(
      'Remove',
      `Do you want to remove the participant ${name}?`,
      [
        {
          text: 'Yes',
          onPress: () =>
            setParticipants((prevState) =>
              prevState.filter((participant) => participant !== name)
            ),
        },
        {
          text: 'No',
          style: 'cancel',
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventTitle}>List of Participants</Text>
      <Text style={styles.eventDate}>{date}</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Participant name"
          placeholderTextColor="#6b6b6b"
          value={participantName}
          onChangeText={setParticipantName}
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: name }) => (
          <Participant
            key={name}
            name={name}
            onRemove={() => handleParticipantRemove(name)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            No one has arrived at the event yet? Add participants to your
            attendance list.
          </Text>
        )}
      />
    </View>
  );
}
