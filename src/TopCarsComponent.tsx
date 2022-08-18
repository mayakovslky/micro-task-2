import React from "react";


type TopCarsComponentType = {
    topCars: TopCarsType[]
}

type TopCarsType = {
    manufacturer: string,
    model: string
}


export const TopCarsComponent = (props: TopCarsComponentType) => {
    // return (
    //     <ul>
    //         {props.topCars.map((objectFromTopCarsArray, index) => {
    //             return (
    //             <li key={objectFromTopCarsArray.manufacturer}>
    //                 <div>
    //                     <span>{objectFromTopCarsArray.manufacturer}</span>
    //                 </div>
    //                 <span>model: {objectFromTopCarsArray.model}</span>
    //             </li>
    //             )
    //         })}
    //     </ul>
    // );
    return (
        <table>
            {props.topCars.map((objectFromTopCarsArray, index)  => {
            return (
                <tr key={objectFromTopCarsArray.manufacturer}>
                    <th>
                        {objectFromTopCarsArray.manufacturer}:
                    </th>
                    <td>
                        {objectFromTopCarsArray.model}
                    </td>
                </tr>
            )
            })}
        </table>
    );
};