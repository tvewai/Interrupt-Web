"use client";
import React from "react";

interface SearchInputBoxProps {
  placeholderText?: string;
}

const SearchInputBox: React.FC<SearchInputBoxProps> = ({
  placeholderText = "검색어를 입력해주세요.",
}) => {
  return (
    <div>
      <input placeholder={placeholderText}></input>
      <button
        onClick={() => {
          console.log("onSearchBy My documents ");
        }}
      >
        검색
      </button>
    </div>
  );
};

export default SearchInputBox;
