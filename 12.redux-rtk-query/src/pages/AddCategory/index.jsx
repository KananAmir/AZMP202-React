import { useState } from "react";
import { usePostNewCategoryMutation } from "../../redux/services/categoriesApi"
import { useNavigate } from "react-router-dom";
const AddCategory = () => {

    const [category, setCategory] = useState({ name: "", description: "" })

    const [postCategory, response] = usePostNewCategoryMutation()

    const navigate = useNavigate()
    const handleAddCategory = async (e) => {
        e.preventDefault()
        try {
            await postCategory(category)
            // console.log(response);
            navigate("/")
        } catch (error) {
            console.log(error);

        }
    }
    return (
        <form onSubmit={handleAddCategory}>
            <label htmlFor="name">Name: </label>
            <input type="text" id='name' value={category.name} onChange={(e) => { setCategory({ ...category, name: e.target.value.trim() }) }} />
            <br />
            <br />
            <label htmlFor="desc">Description: </label>
            <input type="text" id='desc'
                value={category.description}
                onChange={(e) => { setCategory({ ...category, description: e.target.value.trim() }) }
                }
            />
            <br />
            <br />
            <button type="submit">Add</button>
        </form>
    )
}

export default AddCategory