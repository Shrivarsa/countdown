import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, DatabaseReference } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCt8Ea0iPr_P5rs8lTWwSiEyjYlNe9ldWk",
  authDomain: "countdown-ab2c7.firebaseapp.com",
  databaseURL: "https://countdown-ab2c7-default-rtdb.firebaseio.com",
  projectId: "countdown-ab2c7",
  storageBucket: "countdown-ab2c7.firebasestorage.app",
  messagingSenderId: "1087496489118",
  appId: "1:1087496489118:web:a6ca7c0628f052ddc5d38f",
  measurementId: "G-KHKCW8F00N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const HACKATHON_DURATION_MS = 24 * 60 * 60 * 1000; // 24 Hours

/**
 * Starts the hackathon by setting the end time in the database.
 * The end time is the current time + 24 hours.
 */
export const startHackathon = async (): Promise<void> => {
  const endTime = Date.now() + HACKATHON_DURATION_MS;
  const countdownRef = ref(database, 'hackathon/endTime');
  await set(countdownRef, endTime);
};

/**
 * Subscribes to the hackathon end time.
 * @param callback Function to call when data changes
 * @returns Unsubscribe function
 */
export const subscribeToCountdown = (callback: (endTime: number | null) => void): () => void => {
  const countdownRef = ref(database, 'hackathon/endTime');
  
  const unsubscribe = onValue(countdownRef, (snapshot) => {
    const val = snapshot.val();
    callback(val ? Number(val) : null);
  });

  return () => unsubscribe(); // Firebase v9+ returns the unsubscribe function directly from onValue usually, but let's wrap it.
};
