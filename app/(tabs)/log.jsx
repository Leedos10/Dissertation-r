import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';

const OneRepMaxCalculator = () => {
  const [lift, setLift] = useState('');
  const [reps, setReps] = useState('');
  const [results, setResults] = useState([]);

  const calculateOneRepMax = () => {
    const liftWeight = parseFloat(lift), repetitions = parseInt(reps, 10);

    if (isNaN(liftWeight) || isNaN(repetitions) || repetitions <= 0) {
      return Alert.alert('Invalid Input', 'Please enter valid values for lift weight and repetitions.');
    }

    if (repetitions > 15) {
      return Alert.alert('Use 1-15 repetitions for most accurate results');
    }
    
    // Using the modified formula: Adjusted Weight = Initial Weight * (1 + 0.0333 * Initial Reps) / (1 + 0.0333 * Target Reps)
    const calculateAdjustedWeight = (targetReps) => {
      return (liftWeight * (1 + 0.0333 * repetitions) / (1 + 0.0333 * targetReps)).toFixed(2);
    };

    const oneRepMax = liftWeight * (1 + 0.0333 * repetitions);

    const percentages = [
      { reps: 1 }, { reps: 2 }, { reps: 4 }, 
      { reps: 6 }, { reps: 8 }, { reps: 10 }, 
      { reps: 12 }, { reps: 16 }, { reps: 20 }, 
      { reps: 24 }, { reps: 30 }
    ];

    setResults(percentages.map(data => {
      const weight = calculateAdjustedWeight(data.reps);
      const percentage = Math.round((weight / oneRepMax) * 100);
      return {
        ...data,
        weight,
        percentage
      };
    }));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>One Rep Max Calculator</Text>
      <Text style={styles.instructions}>Calculate the adjusted weight for different reps using your initial lift and rep count.</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Lift</Text>
        <TextInput style={styles.input} keyboardType="numeric" value={lift} onChangeText={setLift} placeholder="Enter lift weight" />
        <Text style={styles.label}>Repetitions</Text>
        <TextInput style={styles.input} keyboardType="numeric" value={reps} onChangeText={setReps} placeholder="Enter repetitions" />
        <Button title="Calculate Adjusted Weight" onPress={calculateOneRepMax} />
      </View>
      {results.length > 0 && (
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsHeader}>Weight, Reps, and % of 1RM</Text>
          <View style={styles.resultsTable}>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeader}>Weight (kg)</Text>
              <Text style={styles.tableHeader}>Repetitions</Text>
              <Text style={styles.tableHeader}>Percentage (%)</Text>
            </View>
            {results.map((result, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCell}>{result.weight} kg</Text>
                <Text style={styles.tableCell}>{result.reps}</Text>
                <Text style={styles.tableCell}>{result.percentage} %</Text>
              </View>
            ))}
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  instructions: { fontSize: 16, marginBottom: 20, textAlign: 'center' },
  inputContainer: { marginBottom: 20 },
  label: { fontSize: 18, marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginBottom: 20 },
  resultsContainer: { marginTop: 20 },
  resultsHeader: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  resultsTable: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5 },
  tableRow: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  tableHeader: { fontSize: 16, fontWeight: 'bold' },
  tableCell: { fontSize: 16 },
});

export default OneRepMaxCalculator;
