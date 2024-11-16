import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectApi } from "../../services/projectService";

export default function useCreateProject(){
    const queryClient = useQueryClient()

    const {isPending: isCreating, mutate: createproject} = useMutation({
        mutationFn: createProjectApi,
        /// when mutation (here, creating new project is successful, we need to show a message in this regard and more important we must invalidate the previous query that shows projects so it gets new list of projects)
        /// any thing we want to happend after succesing we put in onSuccess(){} as a callback function
        onSuccess: (data) => {
            toast.success(data.message)
             queryClient.invalidateQueries({
                queryKey: ["owner-projects"]
             })
        },
        onError: (err) => {
            toast.error(data?.response?.data?.message)
        }
    })

    return {isCreating, createproject}
}