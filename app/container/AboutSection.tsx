"use client";
import React from "react";

const AboutZera = {
  title: "About Zerahaans",
  content:
    "Founded in 2020, Zerahaans is a forward-driven company committed to delivering innovative solutions across education, technology, and business services.",
};

const AboutSection = () => {
  return (
    <>
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-gold font-semibold tracking-wide uppercase">
              About Zerahaans
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl">
              Bridging the gap between corporate needs and individual growth
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-neutral-100 lg:mx-auto">
              Founded in 2020, Zerahaans emerged with a clear vision to empower
              businesses and individuals alike.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-neutral-50 mb-4">
                Our Journey
              </h3>
              <p className="text-lg text-gray-600 dark:text-neutral-200 mb-6">
                Our journey began by assisting businesses in completing their
                projects efficiently and providing training to individuals eager
                to enhance their skills. We take pride in being a company that
                people love to work with, building lasting relationships with
                our clients and partners.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-neutral-50 mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-600 dark:text-neutral-200">
                To empower businesses and individuals alike by delivering
                tailored solutions that cater to the unique challenges of each
                client and by offering training programs that equip individuals
                with the skills needed to thrive in today's dynamic environment.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <img
                className="w-full h-auto"
                src="https://placehold.co/800x500"
                alt="Diverse team collaborating in a modern office space with laptops and whiteboards"
              />
              <div className="absolute inset-0 bg-gold opacity-20"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
