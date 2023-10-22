"use client";
import { SignUpRequestState } from "@/app/recoil/user";
import { SignUpRequestType } from "@/app/types/user";
import { useRef } from "react";
import { useRecoilState } from "recoil";

export default function InputName() {
  const inputNameValue = useRef<string>("");

  const [signUpRequest, setSignUpRequest] =
    useRecoilState<SignUpRequestType>(SignUpRequestState);

  const onNameBlur = () => {
    const tempSignUpRequest = { ...signUpRequest };
    tempSignUpRequest.name = inputNameValue.current.value;
    setSignUpRequest(tempSignUpRequest);
  };

  return (
    <>
      <tr>
        <td>
          <label htmlFor="">이름</label>
        </td>
        <td>
          <input type="text" ref={inputNameValue} onBlur={onNameBlur} />
        </td>
      </tr>
    </>
  );
}
