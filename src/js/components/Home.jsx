import React from "react";
import Navbar from "./Navbar";
import Jumbtron from "./Jumbtron";
import Footer from "./Footer";
import CardSection from "./CardSection";
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div style={{minHeight:"100vh"}} className="container-fluid  p-0">
			<Navbar/>
			<Jumbtron/>
			<CardSection/>
		
			<Footer/>
		</div>
	);
};

export default Home;