import { SignUpRequestState } from "@/app/recoil/user";
import { SignUpRequestType } from "@/app/types/user";
import { useRecoilState } from "recoil";
import { useRouter } from 'next/navigation';
import Button from "../../../component/common/Button";

export default function SignUpButton() {
  const [signUpRequest, setSignUpRequest] =
    useRecoilState<SignUpRequestType>(SignUpRequestState);

   const router = useRouter(); 

  const onSignUp = async () => {
    const { loginId, password, name, email, emailVerifyCodeKey } =
      signUpRequest;

    const response = await fetch("http://localhost:8080/api/v1/members", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        loginId: loginId,
        password: password,
        name: name,
        email: email,
        emailVerifyCodeKey: emailVerifyCodeKey,
      }),
    });

    const data = await response.json();
    if( data.statusCode === 201) {
        alert('회원가입 성공!')
        router.push('/');
    } else {
        alert(data.message)
    }
  };
  return (
    <>
      <tr>
        <td>
          <Button label="회원가입" onClick={onSignUp} />
        </td>
      </tr>
    </>
  );
}
