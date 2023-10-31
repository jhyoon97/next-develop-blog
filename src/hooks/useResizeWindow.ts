import { useEffect } from "react";

interface OnResize {
  (): void;
}

const useResizeWindow = (onResize: OnResize | undefined, deps: any[]) => {
  const handleResize = () => {
    if (onResize) {
      onResize();
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, deps);
};

export default useResizeWindow;
