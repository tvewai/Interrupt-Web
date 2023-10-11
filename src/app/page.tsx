import Link from "next/link";
import UserMainCardComponent from "./components/UserMainCard";

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <h2>router navication</h2>
          <Link href="/main">
            link 태그를 이용한 별도에 정크파일을 불러오지 않는 방식
          </Link>
        </li>
        <li>
          <h2>클라이언트 컴포넌트</h2>
          <span>
            서버컴포넌트는 브라우저 api나 이벤트 등은 사용할 수 없기에 use
            client를 선언하는 것으로 확인됨{" "}
          </span>
          <UserMainCardComponent />
        </li>
        <li>
          <Link href="/user">서버사이드 렌더링</Link>
        </li>
      </ul>
    </main>
  );
}
