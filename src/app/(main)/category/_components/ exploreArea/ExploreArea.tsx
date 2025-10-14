"use client";
import React from "react";

const ExploreArea = () => {
  return (
    <section className="w-full py-12">
      <div className="">

        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
          Explore the Area
        </h2>

        <p className="text-gray-700 mb-6">
          88 Tuscaloosa Ave, Atherton, CA 94027, Atherton, California, United
          States.{" "}
          <a
            href="https://www.google.com/maps/place/88+Tuscaloosa+Ave,+Atherton,+CA+94027"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            See on Google Maps
          </a>
        </p>

        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-sm">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.812465429183!2d-122.20825962474172!3d37.443722372066446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fa3d015b6c26b%3A0xa9d05b22b7f543f!2s88%20Tuscaloosa%20Ave%2C%20Atherton%2C%20CA%2094027!5e0!3m2!1sen!2sus!4v1715671234567!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ExploreArea;
