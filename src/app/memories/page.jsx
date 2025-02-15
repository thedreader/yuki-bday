"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import BackgroundMusic from "@/components/music";

const memories = [
  {
    id: 1,
    date: "2023-03-22",
    title: "Smile Story",
    description: "Where each selfie becomes a chapter of your journey",
    left: "/images/bday-pix/desilane-bday.jpg",
    middle: "/images/bday-pix/train.jpg",
    right: "/images/bday-pix/saree-sexy.jpg",
    type: "photo",
  },
  {
    id: 2,
    date: "2023-05-10",
    title: "Pure Magic",
    description: "Where chemistry meets destiny, creating something beautiful",
    left: "/images/bday-pix/us-maidan.jpg",
    middle: "/images/bday-pix/cat-dog.jpg",
    right: "/images/bday-pix/novotel-selfie.jpg",
    type: "photo",
  },
  {
    id: 3,
    date: "2023-01-15",
    title: "Forever Framed",
    description:
      "Celebrating the love, laughter, and little memories that make family life truly special.",
    left: "/images/bday-pix/fam-pic.jpg",
    middle: "/images/bday-pix/baby-pic.jpg",
    right: "/images/bday-pix/dad.jpg",
    type: "photo",
  },
  {
    id: 4,
    date: "2023-07-04",
    title: "Group Groove",
    description: " Where laughter echoes and friendship shines",
    left: "/images/bday-pix/koushiki.jpg",
    middle: "/images/bday-pix/shantiGroup2.png",
    right: "/images/bday-pix/soum.jpg",
    type: "photo",
  },
  {
    id: 5,
    date: "2023-09-30",
    title: "Amazing You",
    description:
      "You are amazing, unique, weird and capable of achieving greatness.",
    left: "/videos/cutieWerid.mp4",
    middle: "/videos/thumbsup.mp4",
    right: "/videos/waveSong.mp4",
    type: "video",
  },
];

export default function MemoryLane() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardClick = (id) => {
    setExpandedCard(id);
  };

  const handleClose = () => {
    setExpandedCard(null);
  };

  return (
    <div
      style={{ backgroundColor: "#d8dcce" }}
      className={`min-h-screen py-12 overflow-hidden monomakh-font`}
    >
      <BackgroundMusic audioUrl="/videos/blue.mp3" volume={0.3} />
      {expandedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20" />
      )}

      <div className="max-w-4xl mx-auto px-4 relative ">
        <h1
          className="text-4xl font-bold text-center mb-8"
          style={{ color: "#9c6175" }}
        >
          Memory Lane
        </h1>

        <div className="space-y-8 relative">
          <div
            className="absolute left-1/2 w-1 h-full transform -translate-x-1/2"
            style={{ backgroundColor: "#da829a" }}
          />

          {memories.map((memory) => (
            <div
              key={memory.id}
              className={`flex items-center justify-center relative ${
                expandedCard === memory.id ? "z-30" : "z-10"
              }`}
              onClick={() => handleCardClick(memory.id)}
              onMouseEnter={() => setHoveredCard(memory.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* left */}
              {(expandedCard === memory.id || hoveredCard === memory.id) && (
                <motion.div
                  className={`w-56 bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer ${
                    expandedCard === memory.id ? "mx-2" : "absolute z-0"
                  }`}
                  initial={{ opacity: 0, x: -50, y: 20, rotate: 0, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    x: -120,
                    y: 0,
                    rotate:
                      hoveredCard === memory.id && !expandedCard ? -15 : 0,
                    scale: 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`w-full ${expandedCard === memory.id ? "h-full" : "h-32"} flex items-center justify-center`}
                    style={{ backgroundColor: "#d8dcce" }}
                  >
                    <span className="text-gray-600">
                      {memory.type === "photo" ? (
                        <Image
                          src={memory.left}
                          width={224} // w-56 equivalent
                          height={128} // Adjust height proportionally
                          alt="memory-pic"
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <video
                          muted
                          className="w-full h-full object-contain"
                          width="224"
                          height="128"
                          autoPlay
                          loop
                          preload="none"
                        >
                          <source src={memory.left} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </span>
                  </div>
                </motion.div>
              )}

              {/* middle */}
              <motion.div
                className={`w-96 bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer ${
                  expandedCard === memory.id ? "mx-2" : "relative z-40"
                }`}
                whileHover={{ scale: expandedCard ? 1 : 1.05 }}
              >
                <div className={`w-full ${expandedCard === memory.id ? "h-full" : "h-48"} flex items-center justify-center`}>
                  <span className="text-white text-lg">
                    {memory.type === "photo" ? (
                      <Image
                        src={memory.middle}
                        width={224} // w-56 equivalent
                        height={128} // Adjust height proportionally
                        alt="memory-pic"
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <video
                        muted
                        className="w-full h-full object-contain"
                        width="224"
                        height="128"
                        autoPlay
                        loop
                        preload="none"
                      >
                        <source src={memory.middle} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </span>
                </div>

                <div className="p-4">
                  <h2
                    className="text-xl font-semibold"
                    style={{ color: "#d8dcce" }}
                  >
                    {memory.title}
                  </h2>
                  <p className="text-black mt-2">{memory.description}</p>
                </div>
              </motion.div>

              {/* right */}
              {(expandedCard === memory.id || hoveredCard === memory.id) && (
                <motion.div
                  className={`w-56 bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer ${
                    expandedCard === memory.id ? "mx-2" : "absolute z-0"
                  }`}
                  initial={{ opacity: 0, x: 50, y: 20, rotate: 0, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    x: 120,
                    y: 0,
                    rotate: hoveredCard === memory.id && !expandedCard ? 15 : 0,
                    scale: 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`w-full ${expandedCard === memory.id ? "h-full" : "h-32"} flex items-center justify-center`}
                    style={{ backgroundColor: "#d8dcce" }}
                  >
                    <span className="text-gray-600">
                      {memory.type === "photo" ? (
                        <Image
                          src={memory.right}
                          width={224} // w-56 equivalent
                          height={128} // Adjust height proportionally
                          alt="memory-pic"
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <video
                          muted
                          className="w-full h-full object-contain"
                          width="224"
                          height="128"
                          autoPlay
                          loop
                          preload="none"
                        >
                          <source src={memory.right} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </span>
                  </div>
                </motion.div>
              )}

              {expandedCard === memory.id && (
                <button
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg z-40"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClose();
                  }}
                >
                  <span className="text-gray-600">✕</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
