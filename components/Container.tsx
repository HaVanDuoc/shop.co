import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="container max-w-7xl mx-auto px-4">{children}</div>;
};

export default Container;
