"use client";

interface MyProps{
  response : string;
}
export default function Data({response}:MyProps) {
  console.log("??")
  return(
    <div>
      {response}
    </div>
  )
}