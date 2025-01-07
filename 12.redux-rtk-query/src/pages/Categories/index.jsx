import { useGetAllCategoriesQuery } from "../../redux/services/categoriesApi"
import { FaCircleInfo } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Categories = () => {

    const { data: categories, isLoading, isError, refetch } = useGetAllCategoriesQuery();

    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {isError && <h1>some error occured!</h1>}


            {categories &&

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((c) => {
                            return (<tr key={c.id}>
                                <td>{c.id}</td>
                                <td>{c.name}</td>
                                <td>{c.description}</td>
                                <td>
                                    <Link to={`${c.id}`}><FaCircleInfo /></Link>
                                    <button><FaTrashAlt /></button>
                                    <button><MdEditSquare /></button>
                                    <button><FaCartShopping /></button>
                                    <button><FaRegHeart /></button>
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </table>

            }
        </div>
    )
}

export default Categories