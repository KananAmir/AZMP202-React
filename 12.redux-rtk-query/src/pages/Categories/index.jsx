import { useDeleteCategoryByIdMutation, useGetAllCategoriesQuery } from "../../redux/services/categoriesApi"
import { FaCircleInfo } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorites } from "../../redux/features/wishlistSlice";

const Categories = () => {

    const { data: categories, isLoading, isError, refetch } = useGetAllCategoriesQuery();

    const wishlist = useSelector((state) => state.wishlist)

    const [deleteCategoryById, deleteResponse] = useDeleteCategoryByIdMutation()

    const dispatch = useDispatch()
    const handleDelete = async (categoryId) => {
        try {
            await deleteCategoryById(categoryId)
            // refetch()
            // console.log(deleteResponse);
        } catch (error) {
            console.log(error);
        }

    }
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
                                    <button onClick={() => { handleDelete(c.id) }}><FaTrashAlt /></button>
                                    <Link to={`/add-edit/${c.id}`}><MdEditSquare /></Link>
                                    <button><FaCartShopping /></button>
                                    <button onClick={() => { dispatch(toggleFavorites(c)) }}>
                                        {
                                            !wishlist?.items.find((q) => q.id === c.id) ? <FaRegHeart /> : <FaHeart />
                                        }
                                    </button>
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