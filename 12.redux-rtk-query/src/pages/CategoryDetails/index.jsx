import { useParams } from "react-router-dom"
import { useGetCategoryByIdQuery } from "../../redux/services/categoriesApi"

const CategoryDetails = () => {

    const { id } = useParams();

    const { data: category, isLoading, isError } = useGetCategoryByIdQuery(id)


    console.log(category);


    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <h1>Some Error Occured!</h1>
    }

    return (
        <div>
            <h1>Category Name: {category.name}</h1>
        </div>
    )
}

export default CategoryDetails