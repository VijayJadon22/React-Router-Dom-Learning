import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(-1);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return <h1>Something went wrong!</h1>;
};

export default ErrorPage;
