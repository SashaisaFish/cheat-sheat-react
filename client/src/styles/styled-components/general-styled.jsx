//import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// || HEADER

export const PageTitleSt = styled(NavLink)`
	font-family: var(--header-text);
	font-size: calc(var(--font-size-large) * 1.1);
	margin-left: 1rem;
	&:hover {
		text-shadow: var(--link-text-glow);
	}
`;
export const LogoSt = styled.div`
	width: ${(props) => props.size}px;
	height: ${(props) => props.size}px;
	justify-self: left;
	@media screen and (min-width: 481px) and (max-width: 570px),
		screen and (max-width: 360px) {
		display: none;
	}
`;

// || NAV

export const DropdownNavSt = styled.div`
	display: grid;
	grid-template-columns: repeat(4, max-content);
	align-content: center;
	@media screen and (max-width: 480px) {
		z-index: 4;
		position: relative;
		visibility: ${(props) => (props.show ? "visible" : "hidden")};
		display: grid;
		grid-template-columns: 7rem;

		grid-auto-rows: min-content;
		justify-content: center;
		align-items: center;
		margin: 4px 0;
	}
`;

export const NavLinkSt = styled(NavLink)`
	display: inline;
	margin-left: 0.3rem;
	font-size: var(--font-size-small);
	transition: all 0.2s ease-in-out;
	@media screen and (max-width: 480px) {
		z-index: 5;
		width: 100%;
		padding: 2px;
		margin: 0;
		background-color: var(--mid-grey);
		box-shadow: inset 0 0 3px var(--black);
		opacity: 80%;
		border: 1px solid var(--black);
	}
	&:hover {
		opacity: 100%;
		text-shadow: var(--link-text-glow);
	}
`;
export const NavBubbleSt = styled(NavLink)`
	display: inline;
	margin: 0 0.3rem;
	padding: 5px 10px;
	background-color: var(--black);
	border-radius: 20px;
	font-size: calc(var(--font-size-small) * 1.05);
	@media screen and (max-width: 480px) {
		z-index: 4;
		position: relative;
		font-size: var(--font-size-normal);
		margin: 0 0.3rem;
	}
	&:hover {
		box-shadow: var(--link-box-glow);
		text-shadow: var(--link-text-glow);
	}
`;

// || MAIN

// || ENTRIES

// || CREATE

// || FOOTER
