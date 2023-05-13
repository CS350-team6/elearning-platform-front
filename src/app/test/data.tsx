"use client";

import { useState } from "react";

interface MyProps{
  response : string;
}
export default function Data({response}:MyProps) {

  return(
    <div>
      {response}
    </div>
  )
}