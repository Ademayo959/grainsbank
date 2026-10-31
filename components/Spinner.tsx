export default function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F6F6F2]">
      <div className="relative flex justify-center items-center">
        <div className="w-16 h-16 border-4 border-green-950/20 rounded-full"></div>
        <div className="absolute w-16 h-16 border-4 border-green-950 border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p className="mt-6 text-green-950 font-medium animate-pulse">
        Loading...
      </p>
    </div>
  );
}