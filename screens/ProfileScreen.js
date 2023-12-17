// screens/ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Avatar, Card, Title, Paragraph } from 'react-native-paper';

const ProfileScreen = ({ navigation }) => {
  // Placeholder user data
  const user = {
    name: 'Clarisse Ng',
    email: 'clarisse.ng@example.com',
    profilePicture: Avatar.Image, // Replace with the actual path
  };

  return (
    <View style={styles.container}>
      <Avatar.Image size={120} source={user.profilePicture} style={styles.profilePicture} />
      <Card style={{ width: '100%', marginTop: 20 }}>
        <Card.Content>
          <Title style={{ fontSize: 24, marginBottom: 10 }}>{user.name}</Title>
          <Paragraph style={{ fontSize: 16, marginBottom: 20 }}>{user.email}</Paragraph>
          {/* Add more profile information here */}
        </Card.Content>
      </Card>
      <Button mode="contained" onPress={() => navigation.goBack()} style={styles.goBackButton}>
        Go Back
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profilePicture: {
    marginBottom: 20,
  },
  goBackButton: {
    marginTop: 20,
  },
});

export default ProfileScreen;
