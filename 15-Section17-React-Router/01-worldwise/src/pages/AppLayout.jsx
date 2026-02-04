import { useState, useRef, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import styles from "./AppLayout.module.css";

function AppLayout() {
  const [sidebarWidth, setSidebarWidth] = useState(450);
  const isResizing = useRef(false);

  function handleMouseDown(e) {
    e.preventDefault();
    isResizing.current = true;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  }

  function handleMouseMove(e) {
    if (isResizing.current) {
      const newWidth = Math.min(550, Math.max(200, e.clientX));
      setSidebarWidth(newWidth);
    }
  }
  function handleMouseUp() {
    isResizing.current = false;
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  }
  // event cleanup to avoid memory leaks
  useEffect(function () {
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);
  return (
    <div className={styles.app}>
      <div className={styles.sidebarWrapper} style={{ width: sidebarWidth }}>
        <Sidebar />
        <div className={styles.resizer} onMouseDown={handleMouseDown} />
      </div>
      <div className={styles.mapWrapper}>
        <Map />
      </div>
    </div>
  );
}

export default AppLayout;
