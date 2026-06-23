import { useState } from "react";
function App() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");
  function checkPrime() {
    let n = parseInt(num);
    let isPrime = true;
    if (n < 2) {
      isPrime = false;
    } else {
      for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
          isPrime = false;
          break;
        }
      }
    }
    if (isPrime) {
      setResult(n + " is a Prime Number");
    } else {
      setResult(n + " is not a Prime Number");
    }
  }
  return (
    <div style={{ textAlign: "center" , marginTop: "50px" }}>
      <h2>Prime Number Checker</h2>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={checkPrime}>Check</button>
      <h3>{result}</h3>
    </div>
  );
}
export default App; 