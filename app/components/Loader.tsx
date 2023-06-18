"use client"

import { GridLoader } from "react-spinners";

interface LoaderProps {}

const Loader: React.FC<LoaderProps> = ({}) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <GridLoader
        size={12}
        color={"#5046e5"}
      />
    </div>
  );
};

export default Loader;
