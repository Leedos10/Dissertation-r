import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Stopwatch = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const startTimeRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now() - elapsedTime;
      intervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const startStopHandler = () => {
    setIsRunning(prevIsRunning => !prevIsRunning);
  };

  const resetHandler = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  const formatTime = (time) => {
    const milliseconds = Math.floor((time % 1000) / 10);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);

    return {
      minutes: minutes < 10 ? `0${minutes}` : minutes,
      seconds: seconds < 10 ? `0${seconds}` : seconds,
      milliseconds: milliseconds < 10 ? `0${milliseconds}` : milliseconds,
    };
  };

  const { minutes, seconds, milliseconds } = formatTime(elapsedTime);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stopwatch</Text>
      <View style={styles.timerDisplay}>
        <Text style={styles.timerText}>
          {minutes}:
          {seconds}:
          {milliseconds}
        </Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, isRunning ? styles.pauseButton : styles.playButton]}
          onPress={startStopHandler}
        >
          <Text style={styles.buttonText}>{isRunning ? 'Pause' : 'Play'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={resetHandler}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003366', // Deep blue color
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff', // White text color for contrast
    marginBottom: 20,
  },
  timerDisplay: {
    marginBottom: 40,
  },
  timerText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ffffff', // White text color for contrast
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  button: {
    marginHorizontal: 10,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  playButton: {
    backgroundColor: '#28a745', // Green color for Play button
  },
  pauseButton: {
    backgroundColor: '#dc3545', // Red color for Pause button
  },
  resetButton: {
    backgroundColor: '#ffc107', // Yellow color for Reset button
  },
  buttonText: {
    color: '#ffffff', // White text color for contrast
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Stopwatch;
