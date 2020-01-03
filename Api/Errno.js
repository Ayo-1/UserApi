import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
function Errno() {
	return(
		<div>
		<Navbar />
		<div className="container">
		<center className="h1 text-uppercase" style={{fontFamily: "monospace",marginTop: "10vh", marginBottom: "10vh", padding: "10%"}}>page not found on this server</center>
		</div>
		<Footer />
		</div>
		)
} 

export default Errno