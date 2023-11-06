"use client";
import InputID from "./component/InputID";
import InputEmail from "./component/InputEmail";
import InputPW from "./component/InputPW";
import InputName from "./component/InputName";
import SignUpButton from "./component/SignUpButton";
import { RecoilRoot } from "recoil";

export default function SignUp() {

  return (
    <RecoilRoot>
      <table>
        <tbody>
          <InputID />
          <InputPW />
          <InputName />
          <InputEmail />
          <SignUpButton />
        </tbody>
      </table>
      </RecoilRoot>
  );
}
