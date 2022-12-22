import * as React from "react";

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 21 21" fill="none" {...props}>
      <path
        d="M20.707 19.293l-3.682-3.682a9.023 9.023 0 10-1.414 1.414l3.682 3.682 1.414-1.414zM10 17a7 7 0 117-7 7.008 7.008 0 01-7 7z"
        fill="#9A9AB0"
      />
    </svg>
  );
}

const MemoSearchIcon = React.memo(SearchIcon);
export default MemoSearchIcon;
