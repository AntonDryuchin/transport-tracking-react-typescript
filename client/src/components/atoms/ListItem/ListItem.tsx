import React from "react";
import "./ListItem.css";

type IListItemProps = {
  id: number;
  category: string;
  driverName: string;
};

export default function ListItem(props: IListItemProps) {
  return (
    <div className="list-item">
      <p>TC#{props.id}</p>
      <p>{props.driverName}</p>
      <p>{props.category}</p>
    </div>
  );
}