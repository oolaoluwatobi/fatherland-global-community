import React from "react";
interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  children
}) => {
  return (
    <div className="mx-auto w-full max-w-[90rem] px-20  bg-whit">
      {children}
    </div>
  )
}

export default Container;