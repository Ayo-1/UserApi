import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

class Add extends React.Component{
	constructor(){
		super()
		this.state = {fname: "", lname: ""}
	}


	change = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}


	add =(e) => {
e.preventDefault()
fetch(`http://localhost:3020/api/add?firstName=${this.state.fname}&lastName=${this.state.lname}`)

		alert('User has been added')
		this.setState({fname: "", lname: ''})
	}


	render() {
		return(
		<section>
		<Navbar/>
 		<div className="container">
 		<center style={{fontFamily: "monospace", marginTop: "10vh", marginBottom: '20vh'}}>
 		<form className="col-md-8" onSubmit={this.add}>
 		<h1 className="text-center">Add A User</h1>
 		<input type="text" name='fname'  className="form-control mb-3 mt-3" placeholder="Enter FirstName" onChange={this.change} value={this.state.fname} required/>

 		<input type="text" name="lname" className="form-control mb-3 mt-3" placeholder="Enter LastName" onChange={this.change} value={this.state.lname} required/>
 		<input type="submit" name="submit"  className="btn btn-sm btn-danger"/>
 		</form>
 		{this.state.fname}
 		{this.state.lname}
 		</center>
 		</div>
		<Footer />
		</section>
		)
	}
}

export default Add