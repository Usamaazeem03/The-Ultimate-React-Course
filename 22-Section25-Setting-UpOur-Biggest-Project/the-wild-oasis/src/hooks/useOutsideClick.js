import { useEffect, useRef } from "react";

function useOutsideClick(callback, listenCapturing = true) {
  const ref = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener("click", handleClickOutside, listenCapturing);
    return () => {
      document.removeEventListener("click", handleClickOutside, listenCapturing);
    };
  }, [callback, listenCapturing]);

  return ref;
}
export default useOutsideClick;
