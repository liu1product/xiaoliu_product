require("../style/app.scss");
import React from "react";
import ReactDOM from "react-dom";
import CommentBox from "./compnents/comment/commentBox.js";
import Commen from "./compnents/comment/commen.js";
ReactDOM.render(
	<div>
		<Commen></Commen>
	    <CommentBox />
	</div>,
	document.getElementById("root")
)
