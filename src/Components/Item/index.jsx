import React from 'react';

function Item(props) {

	return (
		<li className="item" >{props.children}</li>
	);
};

export default Item;