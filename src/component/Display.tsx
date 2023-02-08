export default function Display(props: {
  value: string;
}) {
  return <div className="text-black-300 p-5 border-solid border-indigo-300 border text-3xl">{props.value}</div>
}
