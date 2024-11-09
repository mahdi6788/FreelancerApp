import { ThreeDots } from "react-loader-spinner";

function Loading({ height = "50", width = "100", radius = "9" }) {
  return (
    <ThreeDots
      height={height}
      width={width}
      radius={radius}
      color="rgb(var(--color-primary-900))"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
      }}
      visible={true}
    />
  );
}

export default Loading;
