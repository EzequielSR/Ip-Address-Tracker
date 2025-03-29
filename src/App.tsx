import React, { useState } from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchIp/SearchIp";
import Map from "./components/Map/Map";
import InfoCard from "./components/InfoCard/InfoCard";
import ErrorMessage from "./components/ErrorMenssage/ErrorMenssage";
import { fetchIpData } from "./Services/ipService";
import { IpGeolocation } from "./types";

function App() {
  const [ipAddress, setIpAddress] = useState("");
  const [ipData, setIpData] = useState<IpGeolocation | null>(null);
  const [error, setError] = useState("");

  const handleIpDataFetch = async (ip: string = "") => {
    if (!ip) return;

    try {
      const data = await fetchIpData(ip);
      setIpData(data);
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch IP data");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ipAddress) {
      handleIpDataFetch(ipAddress);
    }
  };

  return (
    <div className="min-h-screen relative">
      <div
        className="bg-cover bg-center h-[45vh] sm:h-[40vh] lg:h-[35vh] flex flex-col items-center pt-6 sm:pt-8 px-4 sm:px-6 relative z-20"
        style={{
          backgroundImage:
            "url('/images/pattern-bg-desktop.png')",
        }}
      >
        <Header />
        <SearchBar
          ipAddress={ipAddress}
          onIpAddressChange={setIpAddress}
          onSubmit={handleSubmit}
        />
        <ErrorMessage message={error} />
        <InfoCard data={ipData || undefined} />
      </div>

      <div className="absolute top-[45vh] sm:top-[40vh] lg:top-[35vh] left-0 right-0 bottom-0 z-10">
        
          <Map position={ipData ? [ipData.location.lat, ipData.location.lng] : undefined} />
      </div>
    </div>
  );
}

export default App;
