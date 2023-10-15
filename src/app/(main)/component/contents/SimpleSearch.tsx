import FilterOptionBox from "../../atoms/FilterOptionBox";
import FilterRange from "../../atoms/FilterRange";
import SearchInputBox from "../../atoms/SearchInputBox";

export default function SimpleSearch() {
  return (
    <section>
      <div className="simple-search">
        <div className="simple-search-area">
          이력서 간단 조회
          <div className="simple-search-row">
            <FilterOptionBox />
            <FilterOptionBox />
          </div>
          <div className="simple-search-row">
            <FilterOptionBox />
            <FilterOptionBox />
          </div>
          <div>
            <FilterRange step={10} rangeLabel={"경력"} />
          </div>
        </div>
      </div>
    </section>
  );
}
