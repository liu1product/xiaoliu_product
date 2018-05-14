import React from "react";
import CommentList from "./commentList.js";
import CommentForm from "./commentForm";
class CommentBox extends React.Component{
	constructor(props){
		super(props)
		this.state={
			comment:{}
		}
	}
	formHandler(data){
		this.setState({
			comment:data
		})
	}
	render(){
		return(
			<div>
				<CommentList author={this.state.comment.author} content={this.state.comment.content} date={this.state.comment.date}></CommentList>
				<CommentForm onFormHandler={this.formHandler.bind(this)}></CommentForm>
			</div>
		)
	}
}
export default CommentBox;