import React from "react";
import { products } from "../../data/data";

function Products() {
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>price</th>
          <th>desc</th>
        </tr>
      </thead>

      <tbody>
        {products.map((q) => {
          return (
            <tr>
              <td>{q.id}</td>
              <td>{q.title}</td>
              <td>{q.price}</td>
              <td>{q.description}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Products;
