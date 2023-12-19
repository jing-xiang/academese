// screens/ProfileScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Avatar, Card, Title, Paragraph } from 'react-native-paper';
import Lottie from 'lottie-react-native';

const ProfileScreen = ({ navigation }) => {
  // Placeholder user data
  const user = {
    name: 'Clarisse Ng',
    email: 'clarisse.ng@example.com',
    profilePicture: 'https://example.com/default-profile-picture.jpg', // Replace with the actual path
  };

  //TODO: Add onPress handlers to the buttons below
  return (
    <View style={styles.container}>
      <Avatar.Image size={120} source={{ uri: user.profilePicture }} style={styles.profilePicture} />
      <Button icon="camera" mode="elevated" style={styles.uploadButton} onPress={() => navigation.Button}>
        Upload Profile Picture
      </Button>
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
  uploadButton: {
    marginVertical: 10,
  },
  goBackButton: {
    marginTop: 20,
  },
});

export default ProfileScreen;
