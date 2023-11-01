"use client";
import { SignUpRequestState } from "@/app/recoil/user";
import { SignUpRequestType } from "@/app/types/user";
import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import Input from "../../../component/common/Input";

export default function InputID() {
  const [signUpRequest, setSignUpRequest] =
    useRecoilState<SignUpRequestType>(SignUpRequestState);

  const { loginId } = signUpRequest;

  const duplicationCheck = async () => {
    const response = await fetch(
      `http://localhost:8080/api/v1/members/check-login-id?loginId=${loginId}`,
      {
        method: "GET",
      }
    );
    const res = await response.json();
    if (res.data.isUnique) {
      alert("사용가능한 ID 입니다!");
    } else {
      alert("중복된 ID가 존재합니다.");
    }
  };

  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    const tempSignUpRequest = { ...signUpRequest };
    tempSignUpRequest.loginId = e.target.value;
    setSignUpRequest(tempSignUpRequest);
  };

  return (
    <>
      <tr>
        <td>
          <label htmlFor="id">ID</label>
        </td>
        <td>
          <Input
            type="text"
            id="id"
            value={loginId}
            onChange={handleIdChange}
          />
        </td>
        <td>
          <button onClick={duplicationCheck}> ID 중복확인 </button>
        </td>
      </tr>
    </>
  );
}
