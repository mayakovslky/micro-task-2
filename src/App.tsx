import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";
import {TopCarsComponent} from "./TopCarsComponent";

function App() {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    let [students] = useState(
        [
            {id: 1, name: 'James', age: 8},
            {id: 2, name: 'Robert', age: 18},
            {id: 3, name: 'Ace', age: 28},
            {id: 4, name: 'Bob', age: 38},
            {id: 5, name: 'Frank', age: 5},
            {id: 6, name: 'Julia', age: 34},
            {id: 7, name: 'John', age: 100},
            {id: 8, name: 'Pedro', age: 14},
            {id: 9, name: 'Mike', age: 25},
            {id: 10, name: 'Suzie', age: 35},
            {id: 11, name: 'Bestie', age: 40},
        ]
    );
    return (
        <>
            <NewComponent students={students}/>
            <TopCarsComponent topCars={topCars}/>
        </>

    );
}


export default App;
