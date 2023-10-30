"use client";

import { useState, useEffect } from "react";
import FilteToggleBox from "./SimpleSearch/FilteToggleBox";
import FilterRange from "./SimpleSearch/FilterRange";
interface filterItem {
  id: number;
  value: string;
}
export default function SimpleSearch() {
  const [responseList, setResponseList] = useState<filterItem[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const newData: filterItem[] = [];
    for (let i = 0; i < 10; i++) {
      newData.push({ id: i, value: `value ${i}` });
    }
    setResponseList(newData);
  };

  return (
    <section>
      <div className="simple-search">
        <div className="simple-search-area">
          이력서 간단 조회
          <div className="simple-search-row">
            <FilteToggleBox title={"직군"} optionBoxList={responseList} />
            <FilteToggleBox title={"직종"} optionBoxList={responseList} />
          </div>
          <div className="simple-search-row">
            <FilteToggleBox />
            <FilteToggleBox />
          </div>
          <div>
            <FilterRange step={10} rangeLabel={"경력"} />
          </div>
        </div>
      </div>
    </section>
  );
}
