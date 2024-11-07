import { useAppDispatch } from "../../hooks/useStore";
import { decrement, increment } from "../../redux/reducers/counterSlice";

export const Counter = () => {
  const dispatch = useAppDispatch();

  const incrementCounter = () => {
    dispatch(increment());
  };

  const decrementCounter = () => {
    dispatch(decrement());
  };

  return (
    <>
      <div>
        <section>
          <button type="button" onClick={incrementCounter}>
            Increment +
          </button>
        </section>
        <section>
          <button type="button" onClick={decrementCounter}>
            Decrement -
          </button>
        </section>
      </div>
    </>
  );
};
