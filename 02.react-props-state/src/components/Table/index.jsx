// import PropTypes from "prop-types";

// function Table({ products }) {
//   console.log(products);

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Title</th>
//           <th>Price</th>
//           <th>Category</th>
//           <th>Photo</th>
//         </tr>
//       </thead>
//       <tbody>
//         {products.map((product) => {
//           return (
//             <tr key={product.id}>
//               <td>{product.id}</td>
//               <td>{product.title}</td>
//               <td>{product.price}</td>
//               <td>{product.category}</td>
//               <td>
//                 <img width={100} src={product.image} alt="" />
//               </td>
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// }

// Table.propTypes = {
//   products: PropTypes.array,
// };

// export default Table;

import PropTypes from "prop-types";
import TableRow from "../TableRow";

function Table({ products }) {
  console.log(products);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>Category</th>
          <th>Photo</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return <TableRow key={product.id} product={product} />;
        })}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  products: PropTypes.array,
};

export default Table;
