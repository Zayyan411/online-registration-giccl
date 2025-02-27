import React from "react";
import { Link } from "react-router-dom";

const LinkRouter = ({
  children,
  path,
  title,
  className = "text-black",
  ...props
}) => {
  return (
    <Link
      to={path}
      className={`text-decoration-none fw-bolder fs-6 ${className}`}
      {...props}
    >
      {title} {children}
    </Link>
  );
};

export { LinkRouter };
