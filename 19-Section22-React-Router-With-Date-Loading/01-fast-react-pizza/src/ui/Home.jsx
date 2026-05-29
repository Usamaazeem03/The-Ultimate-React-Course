import CreateUser from "../feactures/usar/CreateUser";
import { useSelector } from "react-redux";
import { Button } from "./Button";

function Home() {
  const userName = useSelector((state) => state.user.username);
  return (
    <div className="my-10 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="mb-4 text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {userName ? (<>
        <p className="text-lg font-medium text-stone-600 mb-8">
          Welcome back, {userName}!
        </p>
        <Button type="primary" to="/menu">
          Start ordering
        </Button></>
      ) : (
        <CreateUser />
      )}
    </div>
  );
}

export default Home;
