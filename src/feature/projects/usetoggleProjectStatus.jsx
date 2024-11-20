import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleProjectStatusApi } from "../../services/projectService";
import toast from "react-hot-toast";   /// *** if forget this the status does not change immediatelly, unless refreshing the page.

/// This hook encapsulates mutation logic well, providing reusability

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
            toast.error(err?.response?.data?.message || "An unexpected error occurred.")
        }
    })

    return {isUpdating, toggleProjectStatus}
}