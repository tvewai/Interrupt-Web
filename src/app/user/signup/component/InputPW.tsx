"use client";
import { SignUpRequestState } from "@/app/recoil/user";
import { SignUpRequestType } from "@/app/types/user";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";

export default function InputPW() {
  const inputPWValue = useRef<string>("");
  const inputPWCheckValue = useRef<string>("");

  const [signUpRequest, setSignUpRequest] =
    useRecoilState<SignUpRequestType>(SignUpRequestState);
  const [isPWSame, setIsPWSame] = useState<boolean>(false);

  const checkPW = () => {
    const pw1 = inputPWValue.current.value;
    const pw2 = inputPWCheckValue.current.value;

    if (pw1 === pw2) {
      setIsPWSame(true);
    }
  };

  useEffect(() => {
    if (isPWSame) {
      const tempSignUpRequest = { ...signUpRequest };
      tempSignUpRequest.password = inputPWValue.current.value;
      setSignUpRequest(tempSignUpRequest);
    }
  }, [isPWSame]);

  return (
    <>
      <tr>
        <td>
          <label htmlFor="">PW</label>
        </td>
        <td>
          <input type="password" ref={inputPWValue} />
        </td>
      </tr>
      <tr>
        <td>
          <label htmlFor="">PW 확인</label>
        </td>
        <td>
          <input
            type="password"
            ref={inputPWCheckValue}
            onChange={checkPW}
            style={
              isPWSame
                ? { backgroundColor: "green" }
                : { backgroundColor: "red" }
            }
          />
        </td>
      </tr>
    </>
  );
}
