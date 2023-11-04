import { atom } from 'recoil';
import { SignUpRequestType } from "../types/user"

export const SignUpRequestState = atom<SignUpRequestType>({
    key: "SignUpRequestState",
    default: {
        loginId: "",
        password: "",
        name: "",
        email: "",
        emailVerifyCodeKey: "",
    } as SignUpRequestType
})

