import Skeleton from "react-loading-skeleton";

const ImageSkeleton = () => {
  return (
    <Skeleton
      style={{
        display: "block",
        width: 300,
        height: 100,
      }}
    />
  );
};

export default ImageSkeleton;
