import "./widgetLg.css";
import React from 'react'

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div></div>
  );
}
