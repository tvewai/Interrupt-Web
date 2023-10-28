import { ButtonPropsType } from "@/app/types/props";

export default function Button({ label, onClick, style }: ButtonPropsType) {
  return (
    <>
      <button onClick={onClick} style={style}>
        {label}
      </button>
    </>
  );
}
