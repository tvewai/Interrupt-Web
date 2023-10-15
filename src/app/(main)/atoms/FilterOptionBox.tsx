"use client";
import React from "react";

//#region 해당 부분에서 프롭스로 어떤타입의 리스트를 받을지 규약이 필요해보임.
interface FilterOptionBoxProps {
  optionBoxList?: any[];
}
//#endregion

const FilterOptionBox: React.FC<FilterOptionBoxProps> = ({
  optionBoxList = [{ optName: "not Found", value: "this use maybe enum" }],
}) => {
  return (
    <div className="filter-option">
      <select className="filter-select">
        {optionBoxList.map((item, idx) => {
          return (
            <option
              key={idx}
              value={item.value}
              onChange={() => {
                console.log(
                  `you are change this option ${item.optName}, and valeu ${item.value}`
                );
              }}
            >
              {item.optName}
            </option>
          );
        })}
        <option></option>
      </select>
    </div>
  );
};

export default FilterOptionBox;
