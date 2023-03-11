import Extensions from "@/components/Extensions";

export default function Hero() {
  return (
    <div className="h-[90vh] flex flex-col items-center justify-between overflow-hidden animate-fade-in-up">
      <div className="flex flex-col w-[30%] gap-4 mt-20">
        <p className="text-5xl text-[#ffffff] text-center">
          10x Your LinkedIn on Auto-Pilot
        </p>
        <p className="text-2xl text-[#6D6F87] text-center">
          We write, craft and send thousands of data driven, messages to your
          target audience so you can drive more revenue.
        </p>
        <button className="btn w-fit m-auto">Request a Demo</button>
      </div>
      <Extensions />
    </div>
  );
}
