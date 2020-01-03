import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
	return(
	<div className="container bg-dark" id='nv'>
		<center>
			<div>
				<nav className='navbar text-center'>
					<h1 className="h3 text-light mt-1" style={{fontFamily: 'monospace'}}>Ayo App </h1>
					<ul className="nav nav-pills float-right">
						<li className="nav-pills-item">
							<Link to="/" className="nav-link text-light"  style={{fontFamily: 'monospace'}}>Home</Link>
						</li>
						<li className="nav-pills-item">
							<Link to="/add" className="nav-link text-light"  style={{fontFamily: 'monospace'}}>Add User</Link>
						</li>
					</ul>
			
				</nav>
			</div>
		</center>
	</div>
		) 
}

export default Navbar