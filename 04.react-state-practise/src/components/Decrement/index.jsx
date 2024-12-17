// eslint-disable-next-line react/prop-types
const Decrement = ({ setCount }) => {
  // console.log(setCount);

  const handleDecrement = () => {
    setCount((c) => c - 1);
  };
  return <button onClick={handleDecrement}>Decrement</button>;
};

export default Decrement;
