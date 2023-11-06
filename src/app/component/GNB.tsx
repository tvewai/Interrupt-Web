import Link from "next/link";

export const GNB = () => {
  return (
    <>
      <div className="gnb">
        <div className="logo">
          <Link href="/">
            <div>Interrupt</div>
          </Link>
        </div>
        <div className="menu">
          <button> 내 이력서</button>
        </div>
        <div className="sign">
          <button>
            <Link href="/user/signup">회원가입</Link>
          </button>
          <button>로그인</button>
        </div>
      </div>
    </>
  );
};
