import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProjectApi } from "../../services/projectService";

export default function useEditProject(){
    const queryClient = useQueryClient()

    const {isPending: isEditing, mutate: editProject} = useMutation({
        mutationFn: editProjectApi,
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

    return {isEditing, editProject}
}