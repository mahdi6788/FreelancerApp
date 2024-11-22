import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LogoutApi } from "../../services/authService";
import { replace, useNavigate } from "react-router-dom";

export default function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isPending, mutate: logout } = useMutation({
    mutationFn: LogoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/auth", { replace: true });
    },
  });

  return { isPending, logout };
}
