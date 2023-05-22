import { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get("select-value");

  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSearchParams((prev) => {
      prev.set("select-value", value);
      return prev;
    });
  };

  return (
    <select value={value || 1} onChange={handleOnChange}>
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
    </select>
  );
}

export default App;
