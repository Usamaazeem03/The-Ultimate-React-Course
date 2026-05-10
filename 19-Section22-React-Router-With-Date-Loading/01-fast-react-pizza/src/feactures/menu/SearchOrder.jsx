import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const navigate = useNavigate();
  const [qurey, setQurey] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!qurey) return;
    navigate(`/order/${qurey}`);
    setQurey("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter Order id #"
        value={qurey}
        onChange={(e) => setQurey(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
