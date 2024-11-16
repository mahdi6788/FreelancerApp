import { useQuery } from "@tanstack/react-query"
import { getCategoryAPI } from "../services/categoryService"

export default function useCategories(){
    const {data, isLoading} = useQuery({
        queryKey: ["categories"],
        queryFn: getCategoryAPI
    })

    /// result is the data containing categories that we can destructure it and reach categories:
    const {categories: rawCategories = []} = data || {}

    /// but we need categories for options but it needs label and value as we define in RHFSelect into map (option.value and option.label)
    /// so we make the object including these value and label:
    const categories = rawCategories.map(item => ({
        label: item.title,
        value: item._id
    }))

    const transformedCategories = rawCategories.map(item => ({
        label: item.title,
        value: item.englishTitle
    }))

    return {isLoading, categories, transformedCategories}
}
