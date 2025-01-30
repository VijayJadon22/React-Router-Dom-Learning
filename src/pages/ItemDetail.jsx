import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import items from "../itemData";

const ItemDetail = () => {
  const { id } = useParams();
  const item = items.find((ele) => ele.id === id);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(-1);
    }, 5000);

    return ()=>{
      clearTimeout(timer);
    }
  }, [navigate]);

  return (
    <div>
      <h1>Item details</h1>
      <h3>Item Name: {item.title}</h3>
      <h3>Item Details: {item.detail}</h3>
    </div>
  );
};

export default ItemDetail;
