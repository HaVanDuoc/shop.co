import React from "react";

interface IHeaderTitle {
  content?: string;
  children?: string;
}

const HeadTitle: React.FC<IHeaderTitle> = ({ content, children }) => {
  return (
    <div className="lg:text-5xl text-4xl  font-extrabold uppercase px-5">
      {children || content}
    </div>
  );
};

export default HeadTitle;
