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

const firestore = getFirestore(app);

export default function App() {
	const [secContact, setSecContact] = useState(false);
	const [userData, setUserData] = useState({});
	const [skillsData, setSkillsData] = useState([]);
	const [projectsData, setProjectsData] = useState([]);

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
			console.log("Document data:", docSnap.data());
			return docSnap.data();
		} else {
			console.log("No such document!");
			return {};
		}
	};

	// Using useEffect to retrieve data on mount
	useEffect(() => {
		const fetchData = async () => {
			// Check for cached data in localStorage
			const cachedUserData = localStorage.getItem("userData");
			const cachedSkillsData = localStorage.getItem("skillsData");
			const cachedProjectsData = localStorage.getItem("projectsData");

			// Load from cache if available
			if (cachedUserData) {
				setUserData(JSON.parse(cachedUserData));
			} else {
				const user = await userDataFireStore();
				setUserData(user);
				localStorage.setItem("userData", JSON.stringify(user));
			}

			if (cachedSkillsData) {
				setSkillsData(JSON.parse(cachedSkillsData));
			} else {
				const skills = await fetchSubcollectionData("user1", "skills");
				setSkillsData(skills);
				localStorage.setItem("skillsData", JSON.stringify(skills));
			}

			if (cachedProjectsData) {
				setProjectsData(JSON.parse(cachedProjectsData));
			} else {
				const projects = await fetchSubcollectionData("user1", "projects");
				setProjectsData(projects);
				localStorage.setItem("projectsData", JSON.stringify(projects));
			}
		};

		fetchData();
	}, []);


	useEffect(() => {
		console.log("Skills Data:", skillsData);
		console.log("Projects Data:", projectsData);
	}, [skillsData, projectsData]);

	return (
		<>
			<Transition />
			<Navbar secContact={secContact} setSecContact={setSecContact} />

			<main className='h-full w-full text-white bg-gray-900'>
				<Header />
				<About />
				<Skills skillsData={skillsData} /> {/* Pass skills data to Skills component */}
				<Projects projectsData={projectsData} /> {/* Pass projects data to Projects component */}
				<Contact />
				<Footer />
			</main>

		</>
	);
}
