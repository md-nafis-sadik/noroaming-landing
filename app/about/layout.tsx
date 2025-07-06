import React from "react";

const AboutLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="h-full w-full">{children}</div>;
};

export default AboutLayout;
