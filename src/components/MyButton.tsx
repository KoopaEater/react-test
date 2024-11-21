import Thing from "../others/Thing";

let counter: number = 1;

interface MyButtonProps {
  text: string;
  things: Thing[];
  setThings: React.Dispatch<React.SetStateAction<Thing[]>>;
}

const MyButton: React.FC<MyButtonProps> = ({text, things, setThings}) => {

  function clickButton() {
    setThings([...things, new Thing(`Item ${counter}`, counter)]);
    counter++;
  }

  return (
    <button onClick={clickButton}>{text}</button>
  );
}

export default MyButton;