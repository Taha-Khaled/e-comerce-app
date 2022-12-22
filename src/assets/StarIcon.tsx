import * as React from "react";

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 15" fill="none" {...props}>
      <path
        d="M8 0l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L8 11.056l-4.702 3.416 1.796-5.528L.392 5.528h5.812L8 0z"
        fill="#F86338"
      />
    </svg>
  );
}

const MemoStarIcon = React.memo(StarIcon);
export default MemoStarIcon;
