const workouts = [
  {
    id: 1,
    type: 'Strength',
    targetArea: 'Chest',
    intensity: 'Beginner',
    duration: 30,
    description: 'A beginner-friendly strength workout focusing on the chest muscles. Includes bench press, push-ups, and dumbbell flyes.',
    exercises: [
      {
        name: 'Bench Press',
        startImage: require('./background.jpg'),  // Relative path to the start image
        endImage: require('./images/back/back_workout1.jpg'),    // Relative path to the end image
      },
      {
        name: 'Push-Up',
        startImage: require('./background.jpg'),  // Relative path to the start image
        endImage: require('./background.jpg'),    // Relative path to the end image
      },
      {
        name: 'Dumbbell Flyes',
        startImage: require('./background.jpg'),  // Relative path to the start image
        endImage: require('./background.jpg'),    // Relative path to the end image
      },
    ],
  },
  {
    id: 2,
    type: 'Hypertrophy',
    targetArea: 'Back',
    intensity: 'Intermediate',
    duration: 40,
    description: 'An intermediate hypertrophy workout for back muscles, focusing on pull-ups, rows, and deadlifts.',
    exercises: [
      {
        name: 'Pull-Up',
        startImage: require('./background.jpg'),  // Relative path to the start image
        endImage: require('./background.jpg'),    // Relative path to the end image
      },
      {
        name: 'Barbell Row',
        startImage: require('./background.jpg'),  // Relative path to the start image
        endImage: require('./background.jpg'),    // Relative path to the end image
      },
      {
        name: 'Deadlift',
        startImage: require('./background.jpg'),  // Relative path to the start image
        endImage: require('./background.jpg'),    // Relative path to the end image
      },
    ],
  },
  {
    id: 3,
    type: 'Muscle Endurance',
    targetArea: 'Legs',
    intensity: 'Advanced',
    duration: 50,
    description: 'An advanced endurance workout targeting the leg muscles, including high-rep squats, lunges, and leg presses.',
    exercises: [
      {
        name: 'Squats',
        startImage: require('./background.jpg'),  // Relative path to the start image
        endImage: require('./background.jpg'),    // Relative path to the end image
      },
      {
        name: 'Lunges',
        startImage: require('./background.jpg'),  // Relative path to the start image
        endImage: require('./background.jpg'),    // Relative path to the end image
      },
      {
        name: 'Leg Press',
        startImage: require('./background.jpg'),  // Relative path to the start image
        endImage: require('./background.jpg'),    // Relative path to the end image
      },
    ],
  },
  {
    id: 4,
    type: 'Strength',
    targetArea: 'Shoulders',
    intensity: 'Intermediate',
    duration: 35,
    description: 'An intermediate strength workout for shoulders, focusing on overhead presses, lateral raises, and front raises.',
    exercises: [
      {
        name: 'Overhead Press',
        startImage: require('./background.jpg'),  // Relative path to the start image
        endImage: require('./background.jpg'),    // Relative path to the end image
      },
      {
        name: 'Lateral Raises',
        startImage: require('./background.jpg'),  // Relative path to the start image
        endImage: require('./background.jpg'),    // Relative path to the end image
      },
      {
        name: 'Front Raises',
        startImage: require('./background.jpg'),  // Relative path to the start image
        endImage: require('./background.jpg'),    // Relative path to the end image
      },
    ],
  },
  {
    id: 5,
    type: 'Hypertrophy',
    targetArea: 'Arms',
    intensity: 'Beginner',
    duration: 25,
    description: 'A beginner hypertrophy workout focusing on the arms, including bicep curls, tricep extensions, and hammer curls.',
    exercises: [
      {
        name: 'Bicep Curls',
        startImage: require('./background.jpg'),  // Relative path to the start image
        endImage: require('./background.jpg'),    // Relative path to the end image
      },
      {
        name: 'Tricep Extensions',
        startImage: require('./background.jpg'),  // Relative path to the start image
        endImage: require('./background.jpg'),    // Relative path to the end image
      },
      {
        name: 'Hammer Curls',
        startImage: require('./background.jpg'),  // Relative path to the start image
        endImage: require('./background.jpg'),    // Relative path to the end image
      },
    ],
  },
  {
    id: 6,
    type: 'Muscle Endurance',
    targetArea: 'Core',
    intensity: 'Advanced',
    duration: 30,
    description: 'An advanced endurance workout for core muscles, including planks, Russian twists, and leg raises.',
    exercises: [
      {
        name: 'Plank',
        startImage: require('./background.jpg'),  // Relative path to the start image
        endImage: require('./background.jpg'),    // Relative path to the end image
      },
      {
        name: 'Russian Twists',
        startImage: require('./background.jpg'),  // Relative path to the start image
        endImage: require('./background.jpg'),    // Relative path to the end image
      },
      {
        name: 'Leg Raises',
        startImage: require('./background.jpg'),  // Relative path to the start image
        endImage: require('./background.jpg'),    // Relative path to the end image
      },
    ],
  },
  {
    id: 7,
    type: 'Strength',
    targetArea: 'Legs',
    intensity: 'Intermediate',
    duration: 40,
    description: 'An intermediate strength workout focusing on the leg muscles. Includes squats, deadlifts, and calf raises.',
    exercises: [
      {
        name: 'Squats',
        startImage: require('./background.jpg'),  // Relative path to the start image
        endImage: require('./background.jpg'),    // Relative path to the end image
      },
      {
        name: 'Deadlifts',
        startImage: require('./background.jpg'),  // Relative path to the start image
        endImage: require('./background.jpg'),    // Relative path to the end image
      },
      {
        name: 'Calf Raises',
        startImage: require('./background.jpg'),  // Relative path to the start image
        endImage: require('./background.jpg'),    // Relative path to the end image
      },
    ],
  },
  {
    id: 8,
    type: 'Hypertrophy',
    targetArea: 'Chest',
    intensity: 'Advanced',
    duration: 45,
    description: 'An advanced hypertrophy workout targeting the chest muscles, including incline bench press, chest dips, and cable flyes.',
    exercises: [
      {
        name: 'Incline Bench Press',
        startImage: require('./background.jpg'),  // Relative path to the start image
        endImage: require('./background.jpg'),    // Relative path to the end image
      },
      {
        name: 'Chest Dips',
        startImage: require('./background.jpg'),  // Relative path to the start image
        endImage: require('./background.jpg'),    // Relative path to the end image
      },
      {
        name: 'Cable Flyes',
        startImage: require('./background.jpg'),  // Relative path to the start image
        endImage: require('./background.jpg'),    // Relative path to the end image
      },
    ],
  },
  {
    id: 9,
    type: 'Muscle Endurance',
    targetArea: 'Back',
    intensity: 'Beginner',
    duration: 30,
    description: 'A beginner endurance workout for back muscles, including high-rep rows, deadlifts, and supermans.',
    exercises: [
      {
        name: 'Barbell Row',
        startImage: require('./background.jpg'),  // Relative path to the start image
        endImage: require('./background.jpg'),    // Relative path to the end image
      },
      {
        name: 'Deadlift',
        startImage: require('./background.jpg'),  // Relative path to the start image
        endImage: require('./background.jpg'),    // Relative path to the end image
      },
      {
        name: 'Superman',
        startImage: require('./background.jpg'),  // Relative path to the start image
        endImage: require('./background.jpg'),    // Relative path to the end image
      },
    ],
  },
  {
    id: 10,
    type: 'Strength',
    targetArea: 'Core',
    intensity: 'Advanced',
    duration: 35,
    description: 'An advanced strength workout focusing on the core muscles. Includes weighted planks, hanging leg raises, and ab wheel rollouts.',
    exercises: [
      {
        name: 'Weighted Plank',
        startImage: require('./background.jpg'),  // Relative path to the start image
        endImage: require('./background.jpg'),    // Relative path to the end image
      },
      {
        name: 'Hanging Leg Raises',
        startImage: require('./background.jpg'),  // Relative path to the start image
        endImage: require('./background.jpg'),    // Relative path to the end image
      },
      {
        name: 'Ab Wheel Rollout',
        startImage: require('./background.jpg'),  // Relative path to the start image
        endImage: require('./background.jpg'),    // Relative path to the end image
      },
    ],
  },
];

export default workouts;
