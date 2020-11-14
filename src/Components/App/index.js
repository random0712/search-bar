import React from 'react';

import Div from './styles';

import SearchBar from '../SearchBar'; 
import ItemsList from '../ItemsList';
import Item from '../Item';


function App() {
  return (
    <Div>
        <SearchBar></SearchBar>
        <ItemsList>
            <Item>Dale</Item>
            <Item>Mamaco</Item>
            <Item>Laranja</Item>
            <Item>Maçã</Item>
            <Item>Tomate</Item>
            <Item>Cenoura</Item>
            <Item>Vassoura</Item>
            <Item>2kzin</Item>
        </ItemsList>
    </Div>
  );
}

export default App;
