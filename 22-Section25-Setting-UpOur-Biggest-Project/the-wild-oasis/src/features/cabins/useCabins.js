import { useQuery } from "@tanstack/react-query";
import { getCabine } from "../../services/apiCabins";

export function useCabins() {
  const { isLoading, data: cabins } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabine,
  });
  return { isLoading, cabins };
}
