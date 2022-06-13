//import react into the bundle
import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { Context } from "./store/appContext";
//include your index.scss file into the bundle
import "./indexStyles.scss";

//import your own components
import Layout from "./layout";


// const dataHandlers = () => {
// 	const { actions } = useContext(Context);
// 	return actions.dataReverser();
// };
// dataHandlers();

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
