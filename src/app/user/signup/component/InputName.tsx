"use client";
import { SignUpRequestState } from "@/app/recoil/user";
import { SignUpRequestType } from "@/app/types/user";
import { ChangeEvent, useRef } from "react";
import { useRecoilState } from "recoil";
import Input from "../../../component/common/Input";

export default function InputName() {
  const [signUpRequest, setSignUpRequest] =
    useRecoilState<SignUpRequestType>(SignUpRequestState);

  const { name } = signUpRequest;

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const tempSignUpRequest = { ...signUpRequest };
    tempSignUpRequest.name = e.target.value;
    setSignUpRequest(tempSignUpRequest);
  };

  return (
    <>
      <tr>
        <td>
          <label htmlFor="name">이름</label>
        </td>
        <td>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </td>
      </tr>
    </>
  );
}
