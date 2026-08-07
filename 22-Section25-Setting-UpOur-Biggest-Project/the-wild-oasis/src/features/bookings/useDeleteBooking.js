import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";

// this function delete cabin help of this function { deleteCabin as deleteCabinApi } this fun.. to supebase
export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: (id) => deleteBookingApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries(
        {
          assertLiteral: toast.success("booking sucessfully deleted"),
          queryKey: ["booking"],
        },
        queryClient.invalidateQueries({ active: true }),
      );
    },
    onError: (err) => {
      if (err.code === "23503") {
        toast(
          "This booking cannot be deleted because it has existing bookings.",
          { icon: "⚠️" },
        );
      } else {
        toast.error(err.message);
      }
    },
  });

  return { isDeleting, deleteBooking };
}
