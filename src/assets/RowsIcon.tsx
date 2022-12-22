import * as React from "react";

function RowsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 14" fill="none" {...props}>
      <path
        d="M2 0H0v2h2V0zM2 6H0v2h2V6zM2 12H0v2h2v-2zM16 0H4v2h12V0zM16 6H4v2h12V6zM16 12H4v2h12v-2z"
        fill="#000"
      />
    </svg>
  );
}

const MemoRowsIcon = React.memo(RowsIcon);
export default MemoRowsIcon;
