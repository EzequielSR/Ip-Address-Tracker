import { IpGeolocation } from "../../types";

interface InfoCardProps {
  data: IpGeolocation;
}

export default function InfoCard({ data }: InfoCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg py-6 sm:p-8 grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl w-[90%] mx-auto absolute -bottom-48 sm:-bottom-32 left-1/2 -translate-x-1/2 z-30">
      <div className="text-center md:text-left md:border-r md:border-gray-300 px-4">
        <h2 className="text-[10px] sm:text-xs uppercase text-gray-500 font-bold tracking-wider mb-1 sm:mb-2">
          IP Address
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 truncate">
          {data.ip}
        </p>
      </div>

      <div className="text-center md:text-left md:border-r md:border-gray-300 px-4">
        <h2 className="text-[10px] sm:text-xs uppercase text-gray-500 font-bold tracking-wider mb-1 sm:mb-2">
          Location
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 truncate">
          {`${data.location.city}, ${data.location.region}`}
        </p>
      </div>

      <div className="text-center md:text-left md:border-r md:border-gray-300 px-4">
        <h2 className="text-[10px] sm:text-xs uppercase text-gray-500 font-bold tracking-wider mb-1 sm:mb-2">
          Timezone
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
          UTC {data.location.timezone}
        </p>
      </div>

      <div className="text-center md:text-left px-4">
        <h2 className="text-[10px] sm:text-xs uppercase text-gray-500 font-bold tracking-wider mb-1 sm:mb-2">
          ISP
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 truncate">
          {data.isp}
        </p>
      </div>
    </div>
  );
}
