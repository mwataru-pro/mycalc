export default function ButtonPanel(props:{
  buttonHandler: (code: string) => void;
}) {
  return (
    <div>
      <div className="grid grid-cols-4 grid-rows-4 gap-5 p-5 border-solid border-indigo-300 border text-xl">
        <button className="bg-indigo-100 p-2.5 shadow" onClick={() => props.buttonHandler("7")}>7</button>
        <button className="bg-indigo-100 p-2.5 shadow" onClick={() => props.buttonHandler("8")}>8</button>
        <button className="bg-indigo-100 p-2.5 shadow" onClick={() => props.buttonHandler("9")}>9</button>
        <button className="bg-indigo-100 p-2.5 shadow" onClick={() => props.buttonHandler("AC")}>AC</button>
        <button className="bg-indigo-100 p-2.5 shadow" onClick={() => props.buttonHandler("4")}>4</button>
        <button className="bg-indigo-100 p-2.5 shadow" onClick={() => props.buttonHandler("5")}>5</button>
        <button className="bg-indigo-100 p-2.5 shadow" onClick={() => props.buttonHandler("6")}>6</button>
        <button className="bg-indigo-100 p-2.5 shadow" onClick={() => props.buttonHandler("-")}>-</button>
        <button className="bg-indigo-100 p-2.5 shadow" onClick={() => props.buttonHandler("1")}>1</button>
        <button className="bg-indigo-100 p-2.5 shadow" onClick={() => props.buttonHandler("2")}>2</button>
        <button className="bg-indigo-100 p-2.5 shadow" onClick={() => props.buttonHandler("3")}>3</button>
        <button className="bg-indigo-100 p-2.5 shadow" onClick={() => props.buttonHandler("+")}>+</button>
        <button className="bg-indigo-100 p-2.5 shadow" onClick={() => props.buttonHandler("0")}>0</button>
        <button className="bg-indigo-100 p-2.5 shadow" onClick={() => props.buttonHandler(".")}>.</button>
        <button className="bg-indigo-100 p-2.5 shadow" onClick={() => props.buttonHandler("D")}>D</button>
        <button className="bg-indigo-100 p-2.5 shadow" onClick={() => props.buttonHandler("=")}>=</button>
      </div>
    </div>
  )
}
