import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";
import Image from "next/image";
import ArrowBack from "/public/ArrowBack.svg";
import ArrowForward from "/public/ArrowForward.svg";

function Arrow({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  disabled: boolean;
  onClick: VoidFunction;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        right: "1%",
        opacity: disabled ? "0" : "1",
        userSelect: "none",
      }}
    >
      {children}
    </button>
  );
}

// export function LeftArrow() {
//   const { isFirstItemVisible, scrollPrev, visibleElements, initComplete } =
//     React.useContext(VisibilityContext);

//   const [disabled, setDisabled] = React.useState(
//     !initComplete || (initComplete && isFirstItemVisible)
//   );
//   React.useEffect(() => {
//     // NOTE: detect if whole component visible
//     if (visibleElements.length) {
//       setDisabled(isFirstItemVisible);
//     }
//   }, [isFirstItemVisible, visibleElements]);

//   return (
//     <Arrow disabled={disabled} onClick={() => scrollPrev()}>
//       <Image className="mx-2" priority src={ArrowBack} height={16} alt="Back" />
//     </Arrow>
//   );
// }

export function RightArrow() {
  const { isLastItemVisible, scrollNext, visibleElements } =
    React.useContext(VisibilityContext);

  console.log({ isLastItemVisible });
  const [disabled, setDisabled] = React.useState(
    !visibleElements.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleElements]);
  // export function RightArrow() {
  //   const {
  //     isLastItemVisible,
  //     scrollNext,
  //     items,
  //     scrollToItem,
  //     getItemElementById,
  //   } = React.useContext(VisibilityContext);

  //   return (
  //     <Arrow disabled={false}    onClick={() => {
  //       if (isLastItemVisible) {
  //         scrollToItem(getItemElementById(items.toArr()?.[0]?.[0]));
  //       } else {
  //         scrollNext();
  //       }
  //     }}
  //   >
  return (
    <Arrow disabled={disabled} onClick={() => scrollNext()}>
      <Image
        className="mx-2 "
        priority
        src={ArrowForward}
        height={16}
        alt="Forward"
      />
    </Arrow>
  );
}
