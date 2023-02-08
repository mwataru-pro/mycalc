import Display from "./Display";
import ButtonPanel from "./ButtonPanel";

export default function Calculator() {

  const buttonHandler = (code: string) => {
    console.log(code)
  }
  return (
    <div>
      <Display />
      <ButtonPanel buttonHandler={buttonHandler}/>
    </div>
  )
}
