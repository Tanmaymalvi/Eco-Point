// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyDW9JIrx-bR1sR2KHDhQf4e0Q0im2hnDQQ",
  authDomain: "ecopoints-by-hacksmith.firebaseapp.com",
  projectId: "ecopoints-by-hacksmith",
  storageBucket: "ecopoints-by-hacksmith.firebasestorage.app",
  messagingSenderId: "1015166189370",
  appId: "1:1015166189370:web:0938345f19f9a7d3785a03",
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
