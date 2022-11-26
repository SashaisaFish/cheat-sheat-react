import React from "react";
import styled from "styled-components";

// || HEADER

// || NAV

export const DropdownNav = styled.div`
	@media screen and (max-width: 480px) {
		display: ${(props) => (props.show ? "flex" : "none")};
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
`;

export const NavLink = styled.a`
	display: inline;
	margin-left: 1em;
	font-size: var(--font-size-small);
`;
export const NavBubble = styled.a`
	display: inline;
	margin-left: 1em;
	border-radius: 20px;
	padding: 2% 4%;
	background-color: var(--black);
	font-size: var(--font-size-small);
`;

// || MAIN

// || ENTRIES

// || CREATE

// || FOOTER
