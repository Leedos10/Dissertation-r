import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.profileImage} />
        <Text style={styles.userName}>Joseph Maikpobi</Text>
        <Text style={styles.userInfo}>Age: 26</Text>
        <Text style={styles.userInfo}>Email: 2maika14@solent.ac.uk</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Progress Statistics</Text>
        <View style={styles.progressContainer}>
          <View style={styles.progressItem}>
            <Text style={styles.progressValue}>75%</Text>
            <Text style={styles.progressLabel}>Goal Completion</Text>
          </View>
          <View style={styles.progressItem}>
            <Text style={styles.progressValue}>20 lbs</Text>
            <Text style={styles.progressLabel}>Weight Lost</Text>
          </View>
          <View style={styles.progressItem}>
            <Text style={styles.progressValue}>15%</Text>
            <Text style={styles.progressLabel}>Body Fat</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Workout History</Text>
        <View style={styles.historyContainer}>
          <View style={styles.historyItem}>
            <Text style={styles.historyDate}>July 10, 2024</Text>
            <Text style={styles.historyExercise}>Bench Press: 4 sets of 8 reps</Text>
          </View>
          <View style={styles.historyItem}>
            <Text style={styles.historyDate}>July 9, 2024</Text>
            <Text style={styles.historyExercise}>Squats: 5 sets of 6 reps</Text>
          </View>
          <View style={styles.historyItem}>
            <Text style={styles.historyDate}>July 8, 2024</Text>
            <Text style={styles.historyExercise}>Deadlifts: 3 sets of 10 reps</Text>
          </View>
          {/* Add more workout history items as needed */}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Goals</Text>
        <View style={styles.goalsContainer}>
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>Lose 10 lbs by August</Text>
          </View>
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>Increase bench press to 200 lbs</Text>
          </View>
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>Run a half marathon</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Achievements</Text>
        <View style={styles.achievementsContainer}>
          <View style={styles.achievementItem}>
            <Text style={styles.achievementText}>Completed 30-day challenge</Text>
          </View>
          <View style={styles.achievementItem}>
            <Text style={styles.achievementText}>Reached 15% body fat</Text>
          </View>
          <View style={styles.achievementItem}>
            <Text style={styles.achievementText}>Personal best on deadlift: 300 lbs</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <View style={styles.contactContainer}>
          <Text style={styles.contactText}>Email: 2maika14@solent.ac.uk</Text>
          <Text style={styles.contactText}>Phone: (123) 456-7890</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 8,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  userInfo: {
    fontSize: 16,
    color: '#2E7D32',
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 8,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  progressItem: {
    alignItems: 'center',
  },
  progressValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#66BB6A',
  },
  progressLabel: {
    fontSize: 14,
    color: '#2E7D32',
  },
  historyContainer: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
  },
  historyItem: {
    marginBottom: 8,
  },
  historyDate: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  historyExercise: {
    fontSize: 16,
    color: '#2E7D32',
  },
  goalsContainer: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
  },
  goalItem: {
    marginBottom: 8,
  },
  goalText: {
    fontSize: 16,
    color: '#2E7D32',
  },
  achievementsContainer: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
  },
  achievementItem: {
    marginBottom: 8,
  },
  achievementText: {
    fontSize: 16,
    color: '#2E7D32',
  },
  contactContainer: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
  },
  contactText: {
    fontSize: 16,
    color: '#2E7D32',
  },
});

export default Profile;
