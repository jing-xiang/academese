// screens/ScheduleScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const ScheduleScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Schedule Screen</Text>
      {/* Display schedule information or features here */}
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ScheduleScreen;
