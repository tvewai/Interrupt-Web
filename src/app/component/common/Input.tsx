import { InputPropsType } from "@/app/types/props";

export default function Input({ type, id, value, onChange, style }: InputPropsType) {
  return (
    <>
      <input type={type} id={id} value={value} onChange={onChange} style={style} />
    </>
  );
}
