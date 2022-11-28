import React from "react";
import { useState } from "react";
import "../styles/css/index.css";
import {
	DropdownNavSt,
	NavLinkSt,
	NavBubbleSt,
} from "../styles/styled-components/general-styled.jsx";

export default function NavBar() {
	const [show, setShow] = useState(false);

	return (
		<nav
			onMouseEnter={() => {
				setShow(true);
			}}
			onMouseLeave={() => {
				setShow(false);
			}}
		>
			<NavBubbleSt to="/create">Create</NavBubbleSt>
			<DropdownNavSt show={show}>
				<NavLinkSt to="/html">HTML</NavLinkSt>
				<NavLinkSt to="/css">CSS</NavLinkSt>
				<NavLinkSt to="/js">JavaScript</NavLinkSt>
				<NavLinkSt to="/react">React</NavLinkSt>
			</DropdownNavSt>
		</nav>
	);
}
