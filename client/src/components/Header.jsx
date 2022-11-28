import React from "react";
import logo from "../media/images/logo.svg";
import NavBar from "./NavBar.jsx";
import {
	PageTitleSt,
	LogoSt,
} from "../styles/styled-components/general-styled.jsx";
import LogoSvg from "./LogoSvg.jsx";

export default function Header() {
	return (
		<header>
			<PageTitleSt to="/">Cheat Sheet</PageTitleSt>
			<LogoSt size="72">
				<LogoSvg size="72" />
			</LogoSt>

			<NavBar />
		</header>
	);
}
