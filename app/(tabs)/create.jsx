import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import Slider from '@react-native-community/slider';
import exercises from './exercises.json'; 

const App = () => {
  const [duration, setDuration] = useState(30);
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState('back');
  const [goal, setGoal] = useState('strength');
  const [intensity, setIntensity] = useState('Beginner'); // Added intensity
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const generateWorkout = () => {
    if (!exercises || !Array.isArray(exercises)) {
      Alert.alert("Error", "Exercises data is not available.");
      return;
    }

    const muscleExercises = exercises.filter(exercise => exercise.muscleGroup === selectedMuscleGroup);
    const compoundExercises = muscleExercises.filter(exercise => exercise.mechanic === 'compound');
    const isolationExercises = muscleExercises.filter(exercise => exercise.mechanic === 'isolation');

    let selectedExercises = [];

    if (duration === 30) {
      selectedExercises.push(randomElement(compoundExercises));
      selectedExercises.push(randomElement(isolationExercises));
      selectedExercises.push(randomElement(isolationExercises));
    } else {
      if (Math.random() > 0.5) {
        selectedExercises.push(randomElement(compoundExercises));
        selectedExercises.push(randomElement(compoundExercises));
        selectedExercises.push(randomElement(isolationExercises));
        selectedExercises.push(randomElement(isolationExercises));
      } else {
        selectedExercises.push(randomElement(compoundExercises));
        selectedExercises.push(randomElement(isolationExercises));
        selectedExercises.push(randomElement(isolationExercises));
        selectedExercises.push(randomElement(isolationExercises));
        selectedExercises.push(randomElement(isolationExercises));
      }
    }

    selectedExercises = selectedExercises.map((exercise, index) => {
      let sets, reps;

      if (goal === 'strength') {
        if (index === 0) {
          sets = duration === 30 ? 3 + Math.floor(Math.random() * 3) : 5;
          reps = 2 + Math.floor(Math.random() * 4);
        } else {
          sets = duration === 30 ? 2 + Math.floor(Math.random() * 2) : 3 + Math.floor(Math.random() * 2);
          reps = 2 + Math.floor(Math.random() * 4);
        }
      } else if (goal === 'hypertrophy') {
        sets = index === 0 ? 4 : 3;
        reps = 8 + Math.floor(Math.random() * 5);
      } else if (goal === 'endurance') {
        sets = [4, 3, 3, 2][index] || 2;
        reps = 15 + Math.floor(Math.random() * 6);
      }

      return {
        ...exercise,
        sets,
        reps
      };
    });

    setSelectedWorkout(selectedExercises);
  };

  const handleReset = () => {
    setDuration(30);
    setSelectedMuscleGroup('back');
    setGoal('strength');
    setIntensity('Beginner'); // Reset intensity
    setSelectedWorkout(null);
  };

  const handleSliderChange = (value) => {
    setDuration(value < 0.5 ? 30 : 60);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Creator</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Workout Duration</Text>
          <View style={styles.sliderContainer}>
            <Slider
              value={duration === 30 ? 0 : 1}
              onValueChange={handleSliderChange}
              minimumValue={0}
              maximumValue={1}
              step={1}
              thumbTintColor="#FF6347"
              minimumTrackTintColor="#FF6347"
              style={styles.slider}
            />
            <Text style={styles.valueText}>
              {duration === 30 ? 'Quick Session (<40 mins)' : 'Normal Session (>45 mins)'}
            </Text>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Muscle Group</Text>
          <View style={styles.optionContainer}>
            {['back', 'chest', 'legs', 'triceps', 'biceps', 'glutes', 'abs'].map(group => (
              <TouchableOpacity
                key={group}
                style={[styles.optionButton, selectedMuscleGroup === group && styles.activeOption]}
                onPress={() => setSelectedMuscleGroup(group)}
              >
                <Text style={[styles.optionText, selectedMuscleGroup === group && styles.activeOptionText]}>{group}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Workout Goal</Text>
          <View style={styles.optionContainer}>
            {['strength', 'hypertrophy', 'endurance'].map(goalOption => (
              <TouchableOpacity
                key={goalOption}
                style={[styles.optionButton, goal === goalOption && styles.activeOption]}
                onPress={() => setGoal(goalOption)}
              >
                <Text style={[styles.optionText, goal === goalOption && styles.activeOptionText]}>{goalOption.charAt(0).toUpperCase() + goalOption.slice(1)}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Workout Intensity</Text>
          <View style={styles.optionContainer}>
            {['Beginner', 'Intermediate', 'Advanced'].map(level => (
              <TouchableOpacity
                key={level}
                style={[styles.optionButton, intensity === level && styles.activeOption]}
                onPress={() => setIntensity(level)}
              >
                <Text style={[styles.optionText, intensity === level && styles.activeOptionText]}>{level}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.generateButton} onPress={generateWorkout}>
          <Text style={styles.generateButtonText}>Generate Workout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>

        {Array.isArray(selectedWorkout) && selectedWorkout.length > 0 ? (
          <View style={styles.workoutContainer}>
            <Text style={styles.workoutTitle}>{selectedMuscleGroup.toUpperCase()} Workout - {goal.charAt(0).toUpperCase() + goal.slice(1)} ({intensity})</Text>
            {selectedWorkout.map((exercise, index) => (
              <View key={index} style={styles.exerciseContainer}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                <Text style={styles.exerciseDescription}>{exercise.description}</Text>
                <Text style={styles.exerciseDetails}>Sets: {exercise.sets} | Reps: {exercise.reps}</Text>
                <Text style={styles.exerciseInstructions}>Instructions: {exercise.instructions}</Text>
                {exercise.images.map((image, imgIndex) => (
                  <Image key={imgIndex} source={{ uri: image }} style={styles.exerciseImage} />
                ))}
              </View>
            ))}
          </View>
        ) : (
          <Text style={styles.noWorkoutText}>No workout generated yet. Please create a workout.</Text>
        )}
      </ScrollView>
    </View>
  );
};

const randomElement = (array) => array[Math.floor(Math.random() * array.length)];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: '#e94560',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  slider: {
    flex: 1,
  },
  valueText: {
    fontSize: 16,
    color: '#ffffff',
    marginLeft: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  optionButton: {
    backgroundColor: '#16213e',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 10,
  },
  activeOption: {
    backgroundColor: '#e94560',
  },
  optionText: {
    color: '#ffffff',
    fontSize: 16,
  },
  activeOptionText: {
    color: '#ffffff',
  },
  generateButton: {
    backgroundColor: '#0f3460',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  generateButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: '#e94560',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  workoutContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#0f3460',
    borderRadius: 8,
  },
  workoutTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  exerciseContainer: {
    marginBottom: 20,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  exerciseDescription: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 10,
  },
  exerciseDetails: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 10,
  },
  exerciseInstructions: {
    fontSize: 16,
    color: '#ffffff', 
    marginBottom: 10,
    fontStyle: 'italic',
  },
  exerciseImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 8,
  },
  noWorkoutText: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 20,
  }
});

export default App;

