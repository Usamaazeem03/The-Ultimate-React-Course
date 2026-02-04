import PropTypes from "prop-types";
import styles from "./CityItem.module.css";

const formatDate = (dateString) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));

function CityItem({ city }) {
  const { cityName, emoji, date } = city;

  return (
    <li className={styles.cityItem} title={cityName}>
      <span className={styles.emoji}>{emoji}</span>

      <h3 className={styles.name}>{cityName}</h3>

      <time className={styles.date}>{formatDate(date)}</time>

      <button
        type="button"
        className={styles.deleteBtn}
        aria-label={`Delete ${cityName}`}
      >
        ×
      </button>
    </li>
  );
}

CityItem.propTypes = {
  city: PropTypes.shape({
    cityName: PropTypes.string.isRequired,
    emoji: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default CityItem;
