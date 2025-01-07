import { useEffect, useState } from "react";
import { useEditCategoryMutation, useGetCategoryByIdQuery, usePostNewCategoryMutation } from "../../redux/services/categoriesApi"
import { useNavigate, useParams } from "react-router-dom";
const EditCategory = () => {

    const [category, setCategory] = useState({ name: "", description: "" })

    const { id } = useParams()
    const { data, isLoading, isError } = useGetCategoryByIdQuery(id)

    const [editCategory, response] = useEditCategoryMutation()


    const navigate = useNavigate()

    const handleEditCategory = async (e) => {
        e.preventDefault()

        try {
            // console.log(response);
            // navigate("/")
            // console.log(category);

            const c = { name: category.name.trim(), description: category.description.trim() }

            await editCategory({ id, ...c })
            navigate("/")

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        if (data) {
            setCategory({ name: data.name, description: data.description })
        }
    }, [data])

    return (
        <form onSubmit={handleEditCategory}>
            <label htmlFor="name">Name: </label>
            <input type="text" id='name' value={category.name} onChange={(e) => { setCategory({ ...category, name: e.target.value }) }} />
            <br />
            <br />
            <label htmlFor="desc">Description: </label>
            <input type="text" id='desc'
                value={category.description}
                onChange={(e) => { setCategory({ ...category, description: e.target.value }) }
                }
            />
            <br />
            <br />
            <button type="submit">Edit</button>
        </form>
    )
}

export default EditCategory