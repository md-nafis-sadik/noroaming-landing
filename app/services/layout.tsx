import React from "react";

const ServicesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="h-full w-full">{children}</div>;
};

export default ServicesLayout;
