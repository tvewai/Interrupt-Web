"use client";
import { SignUpRequestState } from "@/app/recoil/user";
import { SignUpRequestType } from "@/app/types/user";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import Input from "../../../component/common/Input";

export default function InputPW() {
  const [password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");

  const [signUpRequest, setSignUpRequest] =
    useRecoilState<SignUpRequestType>(SignUpRequestState);

  const [isPWSame, setIsPWSame] = useState<boolean>(false);

  const checkPW = () => {
    const pw1 = password;
    const pw2 = passwordCheck;
    if (pw1 === pw2) {
      setIsPWSame(true);
    }
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordCheckChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(e.target.value);
  };

  const checkInputStyle = {
    backgroundColor: isPWSame ? "green" : "red",
  };

  useEffect(() => {
    if (passwordCheck !== "") {
      checkPW();
    }
  }, [passwordCheck]);

  useEffect(() => {
    if (isPWSame) {
      const tempSignUpRequest = { ...signUpRequest };
      tempSignUpRequest.password = passwordCheck;
      setSignUpRequest(tempSignUpRequest);
    }
  }, [isPWSame]);

  return (
    <>
      <tr>
        <td>
          <label htmlFor="password">PW</label>
        </td>
        <td>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </td>
      </tr>
      <tr>
        <td>
          <label htmlFor="passwordCheck">PW 확인</label>
        </td>
        <td>
          <Input
            type="password"
            id="passwordCheck"
            value={passwordCheck}
            onChange={handlePasswordCheckChange}
            style={checkInputStyle}
          />
        </td>
      </tr>
    </>
  );
}
