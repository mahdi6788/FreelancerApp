import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProjectApi } from "../../services/projectService";
import { data } from "autoprefixer";
import toast from "react-hot-toast";

function useRemoveProject() {
    const queryClient = useQueryClient()
    const {mutate: removeProject, isPending: isDeleting} = useMutation({
    mutationFn: removeProjectApi,
    onSuccess: () => {
        // console.log(data)
        toast.success(data.messsage),
        queryClient.invalidateQueries({
            queryKey:["owner-projects"]
        })
    },
    onError: (err) => toast.error(err?.response?.data?.messsage)
  });

  return {removeProject, isDeleting}
}

export default useRemoveProject;
