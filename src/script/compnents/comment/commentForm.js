import React from "react";
export default class CommentForm extends React.Component{
	submitHandler(){
//		console.log(this)
		let author=this.refs.author.value;
		let content=this.refs.content.value;
		let date="两天前";
		this.props.onFormHandler({
			author,content,date
		})
		this.refs.author.value="";
		this.refs.content.value="";
	}
	render(){
		return(
			<div className="m-form">
			   <div className="formClass">
			   	   <label htmlFor="">
			   	   		<span>作者:</span><input ref="author" className="author_class" type="text" />
			   	   </label>
			   	   <label htmlFor="">
			   	   		<span>内容:</span><textarea ref="content"></textarea>
			   	   </label>
			   	    <label htmlFor="">
			   	   		<input onClick={this.submitHandler.bind(this)} className="sub_btn" type="button" value="提交" />
			   	   </label>
			   </div>
			</div>
		)
	}
}
