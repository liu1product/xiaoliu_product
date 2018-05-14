require("../style/app.scss");
import React from "react";
import ReactDOM from "react-dom";
import Name from "./compnents/base/name";
import Commen from "./compnents/comment/commen.js";
ReactDOM.render(
	<div>
		<Commen></Commen>
	    <Name />
	</div>
	,
	document.getElementById("root")
)
