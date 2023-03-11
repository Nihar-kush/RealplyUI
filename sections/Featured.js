export default function Featured() {
  return (
    <div className="animate-fade-in-up h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="flex flex-col gap-1 items-center text-[#6D6F87]">
        <p>Featured In</p>
        <div className="flex items-center justify-between ">
          <img src="image(1).png" alt="brand" className="w-48" />
          <img src="image(2).png" alt="brand" className="w-48" />
          <img src="image(3).png" alt="brand" className="w-48" />
          <img src="image(4).png" alt="brand" className="w-48" />
          <img src="image(5).png" alt="brand" className="w-48" />
        </div>
      </div>
    </div>
  );
}
