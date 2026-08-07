import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading: isUpdateing } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success("User successfully update");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
  return { isUpdateing, updateUser };
}
