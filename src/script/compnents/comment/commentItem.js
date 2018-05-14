import React from "react";
class CommentItem extends React.Component{
	render(){
		return(
			<div className="m_comment">
			   <h1>{this.props.content}</h1>
			   <p>
			      <span>{this.props.author}</span>
			      <span>{this.props.date}</span>
			   </p>
			</div>
		)
	}
}
export default CommentItem;