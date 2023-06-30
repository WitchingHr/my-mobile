"use client"

import Loader from "@/app/components/Loader";

interface loadingProps {}

const loading: React.FC<loadingProps> = ({}) => {
  return (
    <Loader />
  );
};

export default loading;
