import React from 'react';

import SearchBar from './Components/SearchBar'; 
import ItemsList from './Components/ItemsList';
import Item from './Components/Item';


function App() {
  return (
    <div className="App">
        <SearchBar></SearchBar>
        <ItemsList>
            <Item>Item 1</Item>
            <Item>Item 2</Item>
        </ItemsList>
    </div>
  );
}

export default App;
