import React, { useEffect, useState } from 'react';
import './App.css';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Skills } from './components/Skills';
import { Transition } from './components/Transitiion';
import About from './components/About';
import { Footer } from './components/Footer';
import { Projects } from './components/Projects';
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import { app } from "./dbConfig.js";
import { Notification } from './components/Notification.jsx';

const firestore = getFirestore(app);

export default function App() {
	const [userData, setUserData] = useState({});
	const [skillsData, setSkillsData] = useState([]);
	const [projectsData, setProjectsData] = useState([]);

	const[notification, setNotification] = useState({  
		message: "",
		type: "",
	});

	// Function to show the notification
	const showNotification = (message, type) => {
		setNotification({ message, type });

		// Automatically hide the notification after 3 seconds
		setTimeout(() => {
			setNotification({ message: "", type: "" });
		}, 3000);
	}

	// Generic function to fetch data from any subcollection
	const fetchSubcollectionData = async (userId, subcollectionName) => {
		try {
			const querySnapshot = await getDocs(collection(firestore, "users", userId, subcollectionName));
			const dataArray = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
			return dataArray;
		} catch (error) {
			console.error(`Error fetching ${subcollectionName}: `, error);
			return [];
		}
	};

	// Function to fetch Firestore data
	const userDataFireStore = async () => {
		const docRef = doc(firestore, "users", "user1");
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			return docSnap.data();
		} else {
			console.log("No such document!");
			return {};
		}
	};

	// Using useEffect to retrieve data on mount
	
	useEffect(() => {
		const fetchData = async () => {
			const currentTime = Date.now();
			const CACHE_EXPIRY = 24 * 60 * 60 * 1000;
	
			// Fetch cached data and parse timestamps if available
			const cachedUserData = JSON.parse(localStorage.getItem("userData"));
			const cachedSkillsData = JSON.parse(localStorage.getItem("skillsData"));
			const cachedProjectsData = JSON.parse(localStorage.getItem("projectsData"));
			const lastFetchedTime = JSON.parse(localStorage.getItem("lastFetchedTime"));
	
			// If cache is valid, use it; otherwise, re-fetch and store new data
			if (lastFetchedTime && currentTime - lastFetchedTime < CACHE_EXPIRY) {
				cachedUserData && setUserData(cachedUserData);
				cachedSkillsData && setSkillsData(cachedSkillsData);
				cachedProjectsData && setProjectsData(cachedProjectsData);
			} else {
				const user = await userDataFireStore();
				setUserData(user);
				const skills = await fetchSubcollectionData("user1", "skills");
				setSkillsData(skills);
				const projects = await fetchSubcollectionData("user1", "projects");
				setProjectsData(projects);
	
				// Store fresh data and update the timestamp
				localStorage.setItem("userData", JSON.stringify(user));
				localStorage.setItem("skillsData", JSON.stringify(skills));
				localStorage.setItem("projectsData", JSON.stringify(projects));
				localStorage.setItem("lastFetchedTime", JSON.stringify(currentTime));
			}
		};
	
		fetchData();
	}, []);

	useEffect(() => {
		console.log("Data");
	}, [skillsData, projectsData]);

	return (
		<>
			<Transition />
			<Navbar userData={userData}/>

			<main className='h-full w-full text-white bg-gray-900'>
				<Notification message={notification.message} type={notification.type} />

				<Header userData={userData}/>
				<About />
				<Skills skillsData={skillsData} /> {/* Pass skills data to Skills component */}
				<Projects projectsData={projectsData} /> {/* Pass projects data to Projects component */}
				<Contact firestore={firestore} showNotification = {showNotification}/>
				<Footer userData={userData}/>
			</main>

		</>
	);
}
