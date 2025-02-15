"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Countdown from "react-countdown";
import CountdownComponent from "@/components/countdown";
import CountDog from "@/components/countDog";
import { Bubblegum_Sans } from "next/font/google";

// Importing Bubblegum Sans font
const bubblegumSans = Bubblegum_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export default function CountdownPage() {
  const [targetDate, setTargetDate] = useState(null);
  const router = useRouter();
  const [showButton, setShowButton] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Setting target date for countdown
    const countdownDate = new Date("2025-02-16T00:00:00");
    setTargetDate(countdownDate);
  }, []);

  // Renderer function for customizing the countdown display
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      setShowButton(true);
      return <h1 className="text-5xl text-[#da829a]">🎉 Time's up! 🎉</h1>;
    } else {
      return (
        <span className="text-7xl text-[#d8dcce] neon-glow tracking-widest">
          {days}d : {hours}h : {minutes}m : {seconds}s
        </span>
      );
    }
  };

  const handleProceed = () => {
    if (password === "nom nom") {
      router.push("/countdown/wish");
    } else {
      alert("Wrong password! Try again.");
    }
  };

  return (
    <div className={`relative flex flex-col items-center min-h-screen bg-[#401d17] text-[#d8dcce] p-6 ${bubblegumSans.className}`}>
      {/* Lottie Animation */}
      <div className="mt-32 w-72 h-72">
        <CountdownComponent />
      </div>

      {/* Countdown Timer with Glow Effect */}
      <div className="mt-10 p-6">
        {targetDate ? (
          <Countdown date={targetDate} renderer={renderer} />
        ) : (
          <p className="text-xl text-[#9c6175]">Loading...</p>
        )}
      </div>

      {/* Password Input and Button revealed when countdown is complete */}
      {showButton && (
        <div className="mt-6 flex flex-col items-center">
          <input
            type="password"
            placeholder="Enter password"
            className="mb-4 px-4 py-2 text-lg text-black rounded-lg border border-[#9c6175] focus:outline-none focus:ring-2 focus:ring-[#da829a]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="px-6 py-3 bg-[#da829a] text-white text-xl font-bold rounded-lg shadow-lg hover:bg-[#9c6175] transition"
            onClick={handleProceed}
          >
            Proceed to Surprise 🎉
          </button>
        </div>
      )}

      {/* CountDog Positioned at Bottom Right */}
      <div className="w-40 h-40 absolute bottom-4 right-4">
        <CountDog />
      </div>
    </div>
  );
}
