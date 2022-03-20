import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDdcS3JXJ-C4i3J-h3hf7W0u5ux-qkLuQo',
	authDomain: 'marketplace-46eb6.firebaseapp.com',
	projectId: 'marketplace-46eb6',
	storageBucket: 'marketplace-46eb6.appspot.com',
	messagingSenderId: '717358749338',
	appId: '1:717358749338:web:fd94e4cb421c6bae237123',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
