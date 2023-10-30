"use client";
import { error } from "console";
import React, { useState, useRef, useEffect } from "react";

interface FilteToggleBoxProps {
  title?: string;
  optionBoxList?: any[]; // 옵션 리스트의 타입을 지정합니다.
}

const FilteToggleBox: React.FC<FilteToggleBoxProps> = ({
  title = "",
  optionBoxList = [],
}) => {
  // 토글 이벤트
  const [isToggle, setIsToggle] = useState<boolean>(false);

  const handleToggle = (event: any) => {
    if (optionBoxList.length > 0) {
      setIsToggle(!isToggle);
    }
  };

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onOutSideClick(event: any) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsToggle(false);
      }
    }
    document.addEventListener("click", onOutSideClick);

    return () => {
      document.removeEventListener("click", onOutSideClick);
    };
  }, []);

  return (
    <div className="filter-option">
      <div className="filter-select" ref={containerRef}>
        <label>{title}</label>
        <div className="toggleButton" onClick={handleToggle}>
          더보기
        </div>
        {isToggle && (
          <div className="filter-modal">
            {optionBoxList.map((item, index) => (
              <div key={item.id}>
                <input type="checkbox" value={item.value}></input>
                {item.value}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilteToggleBox;
