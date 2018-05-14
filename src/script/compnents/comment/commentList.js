import React from "react";
import CommentItem from "./commentItem.js";
class CommentList extends React.Component{
	constructor(props){
		super(props)
        this.state={
        	data:[]
        }
	}
	render(){
		this.state.data.push({
			author:this.props.author,
			date:this.props.date,
			content:this.props.content
		})
		let comments=this.state.data.map((value,index)=>{
			return (<CommentItem author={value.author} date={value.date} content={value.content}></CommentItem >)
		})
		return(
			<div>
				{comments}
			</div>
		)
	}
	componentDidMount(){
		fetch("./mock/comment.json")
		.then((response)=>{
			return response.json()
		})
		.then((result)=>{
			this.setState({
				data:this.state.data.concat(result)
			})
		})
		.catch(function(err){
		    console.log("Fetch错误:"+err);
     	});
	}
}
export default CommentList;