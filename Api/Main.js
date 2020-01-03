import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
class Main extends React.Component {
	constructor() {
		super() 
		this.state = {users: [], loading: false, err: false}
	}


	componentDidMount() {
var err = () => {this.state.users.length > 0 ? this.setState({loading: false, err: false}): this.setState({loading: false, err: true})}
			   this.getData()
			   	setTimeout(() => {
				this.state.users.length > 0 ? this.setState({loading: false, err: false}): err()
				if(!this.state.users.length > 0) {setTimeout(() => {window.location.reload()}, 60000)}
			}, 40000)
	}


	getData = () => {
		this.setState({loading: true})
	fetch('http://localhost:3020/api/view')
	.then(res => res.json())
	.then(res => {console.log(res)
		this.setState({users: res, loading: false})
})
	}


	 del = (e) => {
	 	var x = window.confirm("Are You Sure You Want To Delete User?")
	 	if(x){
	 			fetch(`http://localhost:3020/api/del?id=${e.target.id}`)
	 		   
	 		   alert('deleted')
	 		   this.getData()

	 	}
	    
	}


	render(){
		const aa = this.state.err? <center style={{marginTop: "25%", marginBottom: "25%"}}><p className="text-danger">error</p></center> : <center style={{marginTop: "25%", marginBottom: "25%"}}><div className="spinner-grow text-danger"></div></center>
		const va = this.state.users.length > 1 ? 'Users': 'User'
		return(
	
	<section>
	<Navbar />
	<div id="main" className='container'>
	<center>
	
	<div className="col-md-4 mt-5 card" style={{fontFamily: 'monospace'}}>
	<div className="pt-2" style={{fontFamily: 'monospace'}}>
	<h5 className="text-left">User List <span className="h6 float-right"> {this.state.users.length > 0 ? this.state.users.length + " " + va : 'No User'}</span></h5>
	</div>
	{this.state.loading || this.state.err? aa:this.state.users.map(user => {
		return(
		<div key={user.id} className="alert bg-dark text-light" style={{fontFamily: 'monospace'}}>
	<h6>First Name: {user.firstName}</h6>
	<p>Last Name: {user.lastName}</p>
	<span className="float-left mt-1">Id: {user.id}</span><span className="btn btn-outline-danger btn-sm float-right" id={user.id} onClick={this.del}>Delete</span>
	</div>
	)})}
	
	
	</div>
	</center>
	<Footer />
	</div>
	</section>
			) }
}

export default Main