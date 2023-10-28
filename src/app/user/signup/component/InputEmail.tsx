"useClient";
import { SignUpRequestState } from "@/app/recoil/user";
import { SignUpRequestType } from "@/app/types/user";
import { ChangeEvent, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import Input from "../components/common/Input";

export default function InputEmail() {
  const [signUpReqest, setSignUpRequest] =
    useRecoilState<SignUpRequestType>(SignUpRequestState);
  const { email } = signUpReqest;

  const [authCode, setAuthCode] = useState<string>("");
  const [emailVerifyCodeKey, setEmailVeryifyCodeKey] = useState<string>("");

  const [verifyVisible, setVerifyVisible] = useState<boolean>(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const tempSignUpRequest = { ...signUpReqest };
    tempSignUpRequest.email = e.target.value;
    setSignUpRequest(tempSignUpRequest);
  };
  const handleAuthCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAuthCode(e.target.value);
  };

  const verifyEmail = async () => {
    const response = await fetch(
      "http://localhost:8080/api/v1/auth/verify-code",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      }
    );
    const res = await response.json();
    if (res.statusCode === 200) {
      alert("인증코드가 전송되었습니다.");
      setVerifyVisible(true);
      setEmailVeryifyCodeKey(res.data.emailVerifyCodeKey);
    }
  };

  const checkVerifyCode = async () => {
    const response = await fetch(
      "http://localhost:8080/api/v1/auth/verification/verify-code",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          emailVerifyCodeKey: emailVerifyCodeKey,
          verifyCode: authCode,
        }),
      }
    );
    if (response.status === 204) {
      alert("이메일 인증에 성공하였습니다.");

      const tempSignUpRequest = { ...signUpReqest };
      tempSignUpRequest.email = email;
      tempSignUpRequest.emailVerifyCodeKey = emailVerifyCodeKey;
      setSignUpRequest(tempSignUpRequest);
    } else if (response.status === 400) {
      alert("이메일 인증 코드를 잘못 입력하였습니다.");
    }
  };

  const verifyInputVisible = {
    visibility: verifyVisible ? "visible" : "hidden",
  };

  return (
    <>
      <tr>
        <td>
          <label htmlFor="email">E-MAIL</label>
        </td>
        <td>
          <Input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </td>
        <td>
          <button onClick={verifyEmail}> E-MAIL 인증 </button>
        </td>
      </tr>
      <tr style={verifyInputVisible}>
        <td>
          <label htmlFor="authCode">E-MAIL 인증</label>
        </td>
        <td>
          <Input
            type="text"
            id="authCode"
            value={authCode}
            onChange={handleAuthCodeChange}
          />
        </td>
        <td>
          <button onClick={checkVerifyCode}>E-MAIL 확인하기</button>
        </td>
      </tr>
    </>
  );
}
