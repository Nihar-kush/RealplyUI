export default function FeatureCard({ title, description, img }) {
  return (
    <div className="flex items-center gap-10 justify-center text-[#ffffff] w-[70%] m-auto">
      <div className="flex flex-col gap-5 w-[50%]">
        <h1 className="text-5xl font-semibold">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="flex items-center justify-center w-[50%]">
        <img
          src="feature.png"
          alt="#"
          className="bg-[#ffffff0c] rounded-[70px] w-full cursor-pointer hover:animate-pulse"
        />
      </div>
    </div>
  );
}
