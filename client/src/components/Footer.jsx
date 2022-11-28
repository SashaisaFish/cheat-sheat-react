import React from "react";

export default function Footer() {
	const today = new Date();
	const year = today.getFullYear();
	return (
		<footer>
			<p>©{year} Sasha Windred</p>
		</footer>
	);
}
