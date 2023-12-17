// screens/ScheduleScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { Button, Card, List, Divider } from 'react-native-paper';

const ScheduleScreen = ({ navigation }) => {
  const scheduleData = [
    { id: 1, time: '09:00 AM', event: 'Math Tuition' },
    { id: 2, time: '11:00 AM', event: 'Science Lab' },
    { id: 3, time: '02:00 PM', event: 'History Lecture' },
    // Add more schedule items as needed
  ];

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Schedule Screen</Text>

      {scheduleData.map((item) => (
        <Card key={item.id} style={{ marginBottom: 10 }}>
          <Card.Content>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.time}</Text>
            <Divider style={{ marginVertical: 5 }} />
            <List.Item title={item.event} />
          </Card.Content>
        </Card>
      ))}

      <Button mode="contained" onPress={() => navigation.goBack()} style={{ marginTop: 10 }}>
        Go Back
      </Button>
    </View>
  );
};

export default ScheduleScreen;
