import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

function Home() {
  return (
    <main className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.ui}>
        <div className={styles.navWrapper}>
          <PageNav />
        </div>

        <section className={styles.content}>
          <h1 className={styles.title}>
            You travel
            <br />
            the world.
          </h1>

          <p className={styles.subtitle}>
            WorldWise keeps track of your adventures.
            <br />A world map that tracks your footsteps into every city you can
            think of.
          </p>

          <Link to="/app" className="cta">
            Start your journey
          </Link>
        </section>
      </div>
    </main>
  );
}

export default Home;
