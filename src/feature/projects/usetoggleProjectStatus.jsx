import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleProjectStatusApi } from "../../services/projectService";

export default function usetoggleProjectStatus(){
    const queryClient = useQueryClient()

    const {isPending: isUpdating, mutate: toggleProjectStatus} = useMutation({
        mutationFn: toggleProjectStatusApi,
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

    return {isUpdating, toggleProjectStatus}
}