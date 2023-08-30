import Skeleton from "react-loading-skeleton";

const ImageSkeleton = () => {
  return (
    <Skeleton
      style={{
        display: "block",
        width: "100%",
        height: 100,
      }}
    />
  );
};

export default ImageSkeleton;
