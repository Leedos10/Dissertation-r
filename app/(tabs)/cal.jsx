import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';

const CalorieCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('1.2');
  const [results, setResults] = useState(null);

  const calculateCalories = () => {
    const weightKg = parseFloat(weight);
    const heightCm = parseFloat(height);
    const ageYears = parseInt(age, 10);

    if (isNaN(weightKg) || isNaN(heightCm) || isNaN(ageYears)) {
      Alert.alert('Invalid Input', 'Please enter valid values for weight, height, and age.');
      return;
    }

    const bmr =
      gender === 'male'
        ? 10 * weightKg + 6.25 * heightCm - 5 * ageYears + 5
        : 10 * weightKg + 6.25 * heightCm - 5 * ageYears - 161;

    const tdee = bmr * parseFloat(activityLevel);

    const maintainCalories = tdee;
    const loseCalories = tdee - 500;
    const gainCalories = tdee + 320;

    setResults({
      maintain: Math.round(maintainCalories),
      lose: Math.round(loseCalories),
      gain: Math.round(gainCalories),
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Calorie Needs Calculator</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
        placeholder="Weight (kg)"
        placeholderTextColor="#aaa"
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
        placeholder="Height (cm)"
        placeholderTextColor="#aaa"
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
        placeholder="Age (years)"
        placeholderTextColor="#aaa"
      />

      <Text style={styles.label}>Gender:</Text>
      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={[styles.genderButton, gender === 'male' && styles.genderButtonSelected]}
          onPress={() => setGender('male')}
        >
          <Text style={styles.genderButtonText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.genderButton, gender === 'female' && styles.genderButtonSelected]}
          onPress={() => setGender('female')}
        >
          <Text style={styles.genderButtonText}>Female</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Activity Level:</Text>
      <View style={styles.activityContainer}>
        <TouchableOpacity
          style={[styles.activityButton, activityLevel === '1.2' && styles.activityButtonSelected]}
          onPress={() => setActivityLevel('1.2')}
        >
          <Text style={styles.activityButtonText}>Sedentary</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.activityButton, activityLevel === '1.375' && styles.activityButtonSelected]}
          onPress={() => setActivityLevel('1.375')}
        >
          <Text style={styles.activityButtonText}>Lightly Active</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.activityButton, activityLevel === '1.55' && styles.activityButtonSelected]}
          onPress={() => setActivityLevel('1.55')}
        >
          <Text style={styles.activityButtonText}>Moderately Active</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.activityButton, activityLevel === '1.725' && styles.activityButtonSelected]}
          onPress={() => setActivityLevel('1.725')}
        >
          <Text style={styles.activityButtonText}>Very Active</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.activityButton, activityLevel === '1.9' && styles.activityButtonSelected]}
          onPress={() => setActivityLevel('1.9')}
        >
          <Text style={styles.activityButtonText}>Super Active</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Calculate" onPress={calculateCalories} color="#007BFF" />
      </View>

      {results && (
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsText}>Maintain Weight: {results.maintain} calories/day</Text>
          <Text style={styles.resultsText}>Lose Weight: {results.lose} calories/day</Text>
          <Text style={styles.resultsText}>Gain Weight: {results.gain} calories/day</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: '#333',
    textAlign: 'center',
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    width: '100%',
  },
  genderButton: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  genderButtonSelected: {
    backgroundColor: '#007BFF',
    borderColor: '#007BFF',
  },
  genderButtonText: {
    color: '#333',
    fontSize: 16,
  },
  activityContainer: {
    marginBottom: 15,
    width: '100%',
  },
  activityButton: {
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 5,
  },
  activityButtonSelected: {
    backgroundColor: '#007BFF',
    borderColor: '#007BFF',
  },
  activityButtonText: {
    color: '#333',
    fontSize: 16,
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
  resultsContainer: {
    width: '100%',
    marginTop: 20,
    padding: 20,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  resultsText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
});

export default CalorieCalculator;
