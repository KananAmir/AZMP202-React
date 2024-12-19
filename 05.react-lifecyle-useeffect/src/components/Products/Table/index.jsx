import { FaTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import controller from "../../../services";
import { endpoints } from "../../../services/constants";
import Swal from "sweetalert2";

const Table = ({ products, setProducts }) => {
  const handleDelete = async (id) => {
    // console.log(id);
    const res = await controller.deleteDataById(endpoints.products, id);
    console.log(res);

    if (res.status === 200) {
      setProducts(products.filter((q) => q.id !== id));
    }
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Photo</th>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>category</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {products &&
          products.map((p) => {
            return (
              <tr key={p.id}>
                <td>
                  <img src={p.image} alt={p.title} width={100} />
                </td>
                <td>{p.id}</td>
                <td>{p.title}</td>
                <td>{p.price}</td>
                <td>{p.category}</td>
                <td>
                  <FaTrashCan
                    onClick={() => {
                      Swal.fire({
                        title: "Are you sure to delete?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          handleDelete(p.id);
                          Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                          });
                        }
                      });
                    }}
                  />
                  <FaRegEdit />
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
