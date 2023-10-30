import React from "react";
import interruptClient from "@/app/(main)/api";

interface FilterRangeProps {
  step?: number; // step 프로퍼티를 옵셔널로 만듭니다.
  rangeLabel?: string;
}

const FilterRange: React.FC<FilterRangeProps> = ({ step = 5, rangeLabel }) => {
  return (
    <>
      <label>{rangeLabel}</label>
      {/* https://developer.mozilla.org/ko/docs/Web/API/Range */}
      <input type="range" step={step} max="30" min="0"></input>
    </>
  );
};

export default FilterRange;
