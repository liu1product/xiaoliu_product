import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";

class Layout extends React.Component{
	render(){
		return(
			<div>
				<Header />
				<section>content</section>
				<Footer />
			</div>
		)
	}
}
export default Layout