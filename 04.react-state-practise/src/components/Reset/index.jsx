// eslint-disable-next-line react/prop-types
const Reset = ({ setCount }) => {
  return (
    <button
      onClick={() => {
        setCount(0);
      }}
    >
      Reset
    </button>
  );
};

export default Reset;
