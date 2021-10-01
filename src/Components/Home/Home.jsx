import React, { useState } from "react";
import Form from "../Form";
import Card from "../Card";

export default function Home() {
  const [data, setData] = useState('');

  const childToParent = async (childdata) => {
    await setData(childdata);
  }
  return (
    <div className="home">
      <Form childToParent={childToParent}/>
      <Card value={data}/>
    </div>
  );
}
