"use client";
import React from "react";

const UserProfileCardComponent: React.FC = () => {
  return (
    <div>
      {/* 서버컴포넌트는 브라우저 api나 이벤트 등은 사용할 수 없기에 use client를 선언하는 것으로 확인됨 */}
      {/* ref : https://nextjs.org/docs/app/building-your-application/rendering/client-components */}
      <button onClick={() => console.log("click Evt")}>Add to Cart</button>
    </div>
  );
};

export default UserProfileCardComponent;
