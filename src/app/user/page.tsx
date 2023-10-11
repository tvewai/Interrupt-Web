import React from "react";

interface User {
  id: number;
  name: string;
}

// example for ServerComponent
// this comoponent from render  BE
const userPage: React.FC = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  return (
    <>
      <h1>Users</h1>
      <h3>해당 데이터는 네트워크탭 > 프리뷰에서 클라이언트 사이드로 렌더링된 것을 확인할 수 있따.</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default userPage;
