"use client";

import Image from "next/image";

export default function Homepage() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <section className="homepage" id="homepage">
      <Image
        src="/tushti-logo.png"
        alt="Tushti — Harvested with Love"
        width={500}
        height={400}
        className="homepage-logo"
      />
      <p className="homepage-tagline">— Harvested with Love —</p>
      <h1 className="homepage-title">Pure <em>Masalas</em><br/>from Nature</h1>
      <p className="home-sub">100% natural, small-batch spices sourced directly from the farms of India.</p>
      <button className="home-cta" onClick={() => scrollTo('masalas')}>
        Explore Our Masalas →
      </button>
    </section>
  );
}
