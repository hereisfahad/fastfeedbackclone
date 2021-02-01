import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Initialize default app
// Retrieve your own options values by adding a web app on
// https://console.firebase.google.com
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,                 // Auth / General Use
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,           // General Use
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,         // Auth with popup/redirect
  });
}

export default firebase