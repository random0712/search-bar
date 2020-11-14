import React from 'react';
import { Input } from './styles';

function SearchBar(props) {

	
	function search(query) {

		const queryText = query.toLowerCase();

		const items = document.querySelectorAll(".item");

		if (queryText.length < 3) {
			items.forEach(item => item.style.display = 'list-item');
		} else {
			items.forEach(item => {
				const text = item.innerText.toLowerCase();

				const match = text.includes(queryText);

		        if(match) {
		        	item.style.display = 'list-item';
		        } else {
		        	item.style.display = 'none';
		        };
		    });
		};

	};

	return (
		<Input onChange={(e) => search(e.target.value)}></Input>
	);
};

export default SearchBar;