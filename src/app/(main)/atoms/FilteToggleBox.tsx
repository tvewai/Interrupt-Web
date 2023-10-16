"use client";
import React, { useState } from "react";

interface FilteToggleBoxProps {
  title?: string;
  optionBoxList?: any[]; // 옵션 리스트의 타입을 지정합니다.
}

const FilteToggleBox: React.FC<FilteToggleBoxProps> = ({
  title = "",
  optionBoxList = [],
}) => {
  const [filterKey, setfilterKey] = useState<string>("");

  const handleToggle = () => {
    if (optionBoxList.length > 0) {
      setfilterKey(filterKey === title ? "" : title);
    }
  };

  return (
    <div className="filter-option">
      <div className="filter-select">
        <label>{title}</label>
        <button onClick={handleToggle}>조회버튼</button>
        {filterKey === title && (
          <div className="filter-modal">
            {optionBoxList.map((item, index) => (
              <div key={item.id}>
                <input
                  type="checkbox"
                  onBlur={() => {
                    console.log("이벤트");
                  }}
                  value={item.value}
                ></input>
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
