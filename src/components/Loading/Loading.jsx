import React from "react";

const Loading = () => {
  return (
    <div className="h-screen grid grid-cols-1 place-items-center place-content-center">
      <span className="loading loading-ring loading-lg text-red-900 "></span>
    </div>
  );
};

export default Loading;
