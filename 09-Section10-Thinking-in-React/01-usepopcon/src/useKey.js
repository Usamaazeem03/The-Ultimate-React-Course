import { useEffect } from "react";
export function useKey(key, action) {
  useEffect(
    function () {
      function onKeyDown(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", onKeyDown);

      return function () {
        document.removeEventListener("keydown", onKeyDown);
      };
    },
    [action, key]
  );
}
