"use client";

import { useState } from "react";

export default function HomeClient({ data }) {
  const [info] = useState(data);

  return (
    <div className="text-4xl font-bold text-green-500 p-10">
      <div>Title:</div>
      <div dangerouslySetInnerHTML={{ __html: info.title }} />

      <div>Description:</div>
      <div dangerouslySetInnerHTML={{ __html: info.description }} />

      <div>Price: {info.price}</div>
    </div>
  );
}
