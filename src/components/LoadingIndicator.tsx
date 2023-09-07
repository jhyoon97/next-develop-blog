import { Oval } from "react-loader-spinner";

const LoadingIndicator = () => {
  return (
    <Oval
      height={80}
      width={80}
      color="#4fa94d"
      secondaryColor="#4fa94d"
      wrapperStyle={{ margin: "1rem" }}
      wrapperClass=""
      visible
      ariaLabel="oval-loading"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

export default LoadingIndicator;
