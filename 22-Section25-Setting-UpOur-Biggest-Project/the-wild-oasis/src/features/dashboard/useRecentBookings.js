import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";

export function useRecentBookings() {
  const [searchParams] = useSearchParams();
  // const numDay = searchParams.get("last") ? "7" : searchParams.get("last");
  const numDay = Number(searchParams.get("last")) || 7;
  const queryData = subDays(new Date(), numDay).toISOString();
  const { isLoading, data: bookings } = useQuery({
    queryFn: () => getBookingsAfterDate(queryData),
    queryKey: ["bookings", `last-${numDay}`],
  });
  return { isLoading, bookings };
}
