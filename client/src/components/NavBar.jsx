import React from "react";
import { useState } from "react";
import "../styles/css/index.css";
import {
	DropdownNav,
	NavLink,
	NavBubble,
} from "../styles/styled-components/general-styled.jsx";

export default function NavBar() {
	const [show, setShow] = useState(false);

	return (
		<nav>
			<DropdownNav
				onMouseLeave={() => {
					setShow(false);
				}}
			>
				<NavLink href="/html">HTML</NavLink>
				<NavLink href="/css">CSS</NavLink>
				<NavLink href="/js">JavaScript</NavLink>
				<NavLink href="/react">React</NavLink>
			</DropdownNav>
			<NavBubble
				href="/create"
				onMouseEnter={() => {
					setShow(true);
				}}
			>
				Create
			</NavBubble>
		</nav>
	);
}
