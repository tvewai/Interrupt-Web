"useClient";
import { SignUpRequestState } from "@/app/recoil/user";
import { SignUpRequestType } from "@/app/types/user";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";

export default function InputEmail() {
  const inputEmailValue = useRef<string>("");
  const inputVerifyCodeValue = useRef<string>("");

  const [verifyVisible, setVerifyVisible] = useState<boolean>(false);
  const [emailVerifyCodeKey, setEmailVeryifyCodeKey] = useState<string>("");

  const [signUpReqest, setSignUpRequest] =
    useRecoilState<SignUpRequestType>(SignUpRequestState);

  const verifyEMail = async () => {
    const email = inputEmailValue.current.value;
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
    const data = await response.json();
    setVerifyVisible(true);
    setEmailVeryifyCodeKey(data.data.emailVerifyCodeKey);
  };


  const checkVerifyCode = async () => {
    const email = inputEmailValue.current.value;
    const verifyCode = inputVerifyCodeValue.current.value;
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
          verifyCode: verifyCode,
         }),
      }
    );
    if(response.status === 204) {
      alert("이메일 인증에 성공하였습니다.")
      
      const tempSignUpRequest = { ...signUpReqest }
      tempSignUpRequest.email = email;
      tempSignUpRequest.emailVerifyCodeKey = emailVerifyCodeKey;
      setSignUpRequest(tempSignUpRequest);
    } else if(response.status === 400) {
      alert("이메일 인증 코드를 잘못 입력하였습니다.");
    }
  };

  const onEmailBlur = () => {
    const tempSignUpRequest = {...signUpReqest};
    tempSignUpRequest.emailVerifyCodeKey =
      inputEmailValue.current.value;
    setSignUpRequest(tempSignUpRequest);
  };

  return (
    <>
      <tr>
        <td>
          <label htmlFor="">E-MAIL</label>
        </td>
        <td>
          <input type="text" ref={inputEmailValue} onBlur={onEmailBlur} />
        </td>
        <td>
          <button onClick={verifyEMail}> E-MAIL 인증 </button>
        </td>
      </tr>
      <tr
        style={
          verifyVisible ? { visibility: "visible" } : { visibility: "hidden" }
        }
      >
        {/* <tr> */}
        <td>
          <label htmlFor="">E-MAIL 인증</label>
        </td>
        <td>
          <input type="text" ref={inputVerifyCodeValue} />
        </td>
        <td>
          <button onClick={checkVerifyCode}>E-MAIL 확인하기</button>
        </td>
      </tr>
    </>
  );
}
