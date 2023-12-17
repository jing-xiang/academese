// screens/ForYouScreen.js
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const ForYouScreen = () => {
  const videos = [1, 2, 3, 4, 5];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {videos.map((item) => (
          <View key={item} style={styles.cardContainer}>
            <Card style={styles.card} elevation={5}>
              <Card.Content>
                <Title style={styles.title}>Video {item}</Title>
                <Paragraph style={styles.description}>
                  This is a sample description for video {item}. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.
                </Paragraph>
              </Card.Content>
            </Card>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cardContainer: {
    marginBottom: 16,
  },
  card: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});

export default ForYouScreen;
