import * as React from "react";

function LoveIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 22 20" fill="none" {...props}>
      <path
        d="M11 19.57l-8.485-8.484A6 6 0 1111 2.6a6.005 6.005 0 018.485 0 6.007 6.007 0 010 8.485L11 19.57zM6.757 2.844a4 4 0 00-2.828 6.829L11 16.742l7.071-7.07a4 4 0 10-6.221-4.927L11 6.117l-.85-1.372a3.913 3.913 0 00-3.393-1.9v-.002z"
        fill="#F86338"
      />
    </svg>
  );
}

const MemoLoveIcon = React.memo(LoveIcon);
export default MemoLoveIcon;
