// import React from 'react';

// function SearchAddress(props) {
//   const {
//     departure,
//     arrival,
//     resultApiDep,
//     resultApiArr,
//     handleChangeArrival,
//     handleChangeDeparture,
//     handleClickDep,
//     handleClickArr,
//   } = props;
//   return (
//     <div>
//       <form className="itineraryAddress">
//         <input
//           type="text"
//           id="departure"
//           name="departure"
//           value={departure}
//           placeholder="Départ"
//           onChange={handleChangeDeparture}
//         />
//         <input
//           type="text"
//           id="arrival"
//           name="arrival"
//           value={arrival}
//           placeholder="Arrivée"
//           onChange={handleChangeArrival}
//         />
//       </form>
//       <ul>
//         {resultApiDep.map((city, index) => (
//           <li key={city.osm_id}>
//             <button type="button" id={index} onClick={handleClickDep}>
//               {city.name} {city.state}
//             </button>
//           </li>
//         ))}
//       </ul>
//       <ul>
//         {resultApiArr.map((city, index) => (
//           <li key={city.osm_id}>
//             <button type="button" id={index} onClick={handleClickArr}>
//               {city.name} {city.state}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SearchAddress;
