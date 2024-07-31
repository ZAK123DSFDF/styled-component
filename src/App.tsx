import Button from "./components/Button";

const App = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };
  return (
    <>
      <div>
        <Button
          backgroundColor="green"
          hoverBackgroundColor="blue"
          onClick={handleClick}
        >
          Click Me
        </Button>
      </div>
      <button>clicked</button>
    </>
  );
};

export default App;
