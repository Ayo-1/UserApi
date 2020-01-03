import React from 'react'
import Main from './Main'
import Errno from './Errno'
import Add from './Add'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
class Index extends React.Component{
	constructor() {
	super()
	this.state = {}
	}

	render() {
	return(
<BrowserRouter>
<Switch>
<Route path='/' exact component={() => <Main/>} />
<Route path='/add' exact component={Add} />
<Route path='/' component={Errno} />
</Switch>
</ BrowserRouter>

	)
	}
}

export default Index