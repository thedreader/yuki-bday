"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import MyLottieComponent from "@/components/loading"
export default function Homepage() {
  const router= useRouter();
  const [loading, setLoading]= useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      
      // Date check after loading screen
      const today = new Date();
      const isFeb16 = today.getDate() === 16 && today.getMonth() === 1; // Month is 0-indexed, so 1 = February
      
      if (isFeb16) {
        router.push('/countdown/wish');  // Redirect to memories if Feb 16
      } else {
        router.push('/countdown');  // Redirect to countdown otherwise
      }
    }, 5000); // 3 seconds for loading screen

    return () => clearTimeout(timer); // Cleanup
  }, [router]);

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center font-mono text-sm">
        {loading && (
          <div className="w-2/4 h-2/4 animate-fadeInOut flex items-center justify-center">
            <MyLottieComponent />
          </div>
        )}
      </div>
    </main>
  );
  
 }

