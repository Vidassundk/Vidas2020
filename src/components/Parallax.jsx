import React, { useEffect, useState } from "react";

export default function Parallax() {
  useEffect(() => {
    const parallax = document.querySelectorAll(".parallax");
    const parallax1 = document.querySelectorAll(".parallax1");
    const parallax2 = document.querySelectorAll(".parallax2");
    const parallax3 = document.querySelectorAll(".parallax3");
    document.addEventListener("scroll", () => {
      const distance = window.pageYOffset;
      parallax.forEach((div) => {
        div.style.transform = `translateY(${distance / 2.6}px)`;
      });
      parallax1.forEach((div) => {
        div.style.transform = `translateY(${distance - distance * 1.5}px)`;
      });
      parallax2.forEach((div) => {
        div.style.transform = `translateY(${distance * 0.15}px)`;
      });
      parallax3.forEach((div) => {
        div.style.transform = `translateY(${distance * 0.148}px)`;
      });
    });
  }, []);
  return <div></div>;
}
