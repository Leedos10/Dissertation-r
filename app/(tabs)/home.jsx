import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const WorkoutCard = ({ title, time, exercises }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.cardImagePlaceholder} />
      <View style={styles.cardTextContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubtitle}>{time} • {exercises}</Text>
      </View>
    </TouchableOpacity>
  );
};

const HomeWorkoutScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('Beginner');

  const routines = {
    Beginner: [
      { title: "ABS BEGINNER", time: "50 MINS", exercises: "7 EXERCISES" },
      { title: "CHEST BEGINNER", time: "55 MINS", exercises: "8 EXERCISES" },
    ],
    Intermediate: [
      { title: "ABS INTERMEDIATE", time: "60 MINS", exercises: "8 EXERCISES" },
      { title: "CHEST INTERMEDIATE", time: "65 MINS", exercises: "9 EXERCISES" },
      { title: "ARM INTERMEDIATE", time: "70 MINS", exercises: "9 EXERCISES" },
      { title: "LEG INTERMEDIATE", time: "75 MINS", exercises: "10 EXERCISES" },
    ],
    Advanced: [
      { title: "ABS ADVANCED", time: "75 MINS", exercises: "9 EXERCISES" },
      { title: "CHEST ADVANCED", time: "80 MINS", exercises: "10 EXERCISES" },
      { title: "ARM ADVANCED", time: "75 MINS", exercises: "8 EXERCISES" },
      { title: "LEG ADVANCED", time: "80 MINS", exercises: "10 EXERCISES" },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>WORKOUT ROUTINES</Text>
      <View style={styles.tabs}>
        {['Beginner', 'Intermediate', 'Advanced'].map((category) => (
          <TouchableOpacity key={category} onPress={() => setSelectedCategory(category)}>
            <Text style={[styles.tab, selectedCategory === category && styles.activeTab]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {routines[selectedCategory].map((routine, index) => (
        <WorkoutCard
          key={index}
          title={routine.title}
          time={routine.time}
          exercises={routine.exercises}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tab: {
    fontSize: 16,
    marginHorizontal: 10,
    color: '#777',
  },
  activeTab: {
    color: '#000',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  card: {
    margin: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardImagePlaceholder: {
    width: '100%',
    height: 150,
    backgroundColor: '#ddd',
  },
  cardTextContainer: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#555',
  },
});

export default HomeWorkoutScreen;
