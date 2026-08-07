import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import PropTypes from "prop-types";
import Stat from "./Stat";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  const totalBookings = bookings?.length || 0;

  const totalSales =
    bookings?.reduce((acc, cur) => acc + cur.totalPrice, 0) || 0;

  const totalCheckedIn = confirmedStays.length || 0;

  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={totalBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(totalSales)}
      />{" "}
      <Stat
        title="Checked In"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={totalCheckedIn}
      />
      <Stat
        title="Occupancy Rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

export default Stats;

Stats.propTypes = {
  bookings: PropTypes.array,
  confirmedStays: PropTypes.array,
  numDays: PropTypes.number,
  cabinCount: PropTypes.number,
};
