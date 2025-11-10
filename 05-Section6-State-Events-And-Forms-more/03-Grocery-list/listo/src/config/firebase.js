// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Validate required config values. CRA injects REACT_APP_* at build time.
const requiredKeys = [
  "REACT_APP_FIREBASE_API_KEY",
  "REACT_APP_FIREBASE_AUTH_DOMAIN",
  "REACT_APP_FIREBASE_PROJECT_ID",
  "REACT_APP_FIREBASE_APP_ID",
];

const missing = requiredKeys.filter((k) => !process.env[k]);

let appInitialized = null;
let authInstance = null;
let googleProviderInstance = null;
let dbInstance = null;
let firebaseConfiguredFlag = false;

if (missing.length > 0) {
  // Do NOT call initializeApp with missing values — Firebase will throw.
  // Log an explicit message to help debugging in the console.
  // eslint-disable-next-line no-console
  console.error(
    `Firebase config missing values: ${missing.join(", ")}. ` +
      "Create a .env (or .env.production) with the REACT_APP_FIREBASE_* values and rebuild before deploying."
  );
} else {
  // Initialize Firebase normally
  appInitialized = initializeApp(firebaseConfig);
  authInstance = getAuth(appInitialized);
  googleProviderInstance = new GoogleAuthProvider();
  dbInstance = getFirestore(appInitialized);
  firebaseConfiguredFlag = true;
}

export const app = appInitialized;
export const auth = authInstance;
export const googleProvider = googleProviderInstance;
export const db = dbInstance;
export const firebaseConfigured = firebaseConfiguredFlag;
