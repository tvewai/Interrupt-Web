"use client";
import { SignUpRequestState } from "@/app/recoil/user";
import { SignUpRequestType } from "@/app/types/user";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";

export default function InputID() {
  const inputIDValue = useRef<string>("");

  const [signUpRequest, setSignUpRequest] =
    useRecoilState<SignUpRequestType>(SignUpRequestState);

  const duplicationCheck = async () => {
    const IDInput = inputIDValue.current.value;
    const response = await fetch(
      `http://localhost:8080/api/v1/members/check-login-id?loginId=${IDInput}`,
      {
        method: "GET",
      }
    );
    const res = await response.json();
    console.log(res);
    if (res.message === "success") {
      alert("사용가능한 ID 입니다!");
    } else {
      alert("ID를 다시 확인해주세요");
    }
  };

  const onIDBlur = () => {
    const tempSignUpRequest = { ...signUpRequest };
    tempSignUpRequest.loginId = inputIDValue.current.value;
    setSignUpRequest(tempSignUpRequest);
  };

  return (
    <>
      <tr>
        <td>
          <label htmlFor="">ID</label>
        </td>
        <td>
          <input type="text" ref={inputIDValue} onBlur={onIDBlur} />
        </td>
        <td>
          <button onClick={duplicationCheck}> ID 중복확인 </button>
        </td>
      </tr>
    </>
  );
}
