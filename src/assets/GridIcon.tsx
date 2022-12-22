import * as React from "react";

function GridIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18 18" fill="none" {...props}>
      <path
        d="M0 8h8V0H0v8zm2-6h4v4H2V2zM0 18h8v-8H0v8zm2-6h4v4H2v-4zM10 18h8v-8h-8v8zm2-6h4v4h-4v-4zM10 0v8h8V0h-8zm6 6h-4V2h4v4z"
        fill="#000"
      />
    </svg>
  );
}

const MemoGridIcon = React.memo(GridIcon);
export default MemoGridIcon;
