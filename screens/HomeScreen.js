// screens/HomeScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import LottieView from 'lottie-react-native'; // Import LottieView

const HomeScreen = ({ navigation, onLogout }) => {
  return (
    <View style={styles.container}>
      {/* Lottie Animation */}
      <LottieView
        source={require('../assets/animations/singing-contract.json')} 
        autoPlay
        loop
        style={styles.animation}
      />

      {/* Card with Welcome Message */}
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Welcome to Academese!</Title>
          <Paragraph style={styles.paragraph}>
            Enhance your learning experience with Academese. Explore your schedule and profile to
            make the most of your academic journey.
          </Paragraph>
        </Card.Content>
      </Card>

      {/* Buttons */}
      <Button mode="contained" onPress={() => navigation.navigate('Profile')} style={styles.button}>
        Go to Profile
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('Schedule')} style={styles.button}>
        Go to Schedule
      </Button>
      <Button mode="contained" onPress={onLogout} color="#FF5733" style={styles.button}>
        Logout
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
  animation: {
    width: 200, // Adjust the width and height as needed
    height: 200,
    marginBottom: 20,
  },
  card: {
    width: '100%',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: '#333', // Customize the color as needed
  },
  paragraph: {
    fontSize: 16,
  },
  button: {
    marginTop: 20,
  },
});

export default HomeScreen;
