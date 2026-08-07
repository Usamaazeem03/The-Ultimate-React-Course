import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getStaysAfterDate } from "../../services/apiBookings";

export function useRecentStays() {
  const [searchParams] = useSearchParams();
  // const numDay = searchParams.get("last") ? "7" : searchParams.get("last");
  const numDay = Number(searchParams.get("last")) || 7;
  const queryData = subDays(new Date(), numDay).toISOString();
  const { isLoading, data: stays } = useQuery({
    queryFn: () => getStaysAfterDate(queryData),
    queryKey: ["stays", `last-${numDay}`],
  });

  const confirmedStays = stays?.filter(
    (stay) => stay.status === "checked-in" || stay.status === "checked-out",
  );
  return { isLoading, stays, confirmedStays, numDay };
}
