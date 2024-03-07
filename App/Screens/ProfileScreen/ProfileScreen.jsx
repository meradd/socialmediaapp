import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';

function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Avatar
          rounded
          size="large"
          source={require('./icon.jpg')}
        />
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>1</Text>
            <Text style={styles.statLabel}>Post</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>222</Text>
            <Text style={styles.statLabel}>Conections</Text>
          </View>
        </View>
      </View>
      {/* Add more components for the highlights and posts grid */}
      {/* ... */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 16,
  },
  // Add more styles for other components
  // ...
});

export default ProfileScreen;
