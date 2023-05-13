"use client";

interface MyProps{
  response : string;
}
export default function Second({response}:MyProps) {
  console.log("??")
  return(
    <h1 style={{color:"red"}}>
      {response}
    </h1>
  )
}