import { useDispatch, useSelector } from "react-redux"
import { FaHeart } from "react-icons/fa";
import { toggleFavorites } from "../../redux/features/wishlistSlice";

const Wishlist = () => {

    const wishlist = useSelector((state) => state.wishlist)

    const dispatch = useDispatch()

    return (
        <div>
            {wishlist.items.length === 0 ? <h2>Wihslist is empty!</h2> : wishlist.items.map((q) => {
                return <div key={q.id}>
                    <span>{q.name}</span>
                    <button onClick={() => { dispatch(toggleFavorites(q)) }}>
                        <FaHeart />
                    </button>
                </div>
            })
            }
        </div >
    )
}

export default Wishlist