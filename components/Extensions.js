export default function Extensions() {
  return (
    <div className="h-64 w-full bg-[#070708] border-t-2 border-[#22222D] flex flex-col items-center justify-center gap-10">
      <div className="flex items-center justify-center">
        <button className="bg-[#ffffff] rounded-3xl py-1 px-4 flex items-center text-[#070708]">
          Install Extension for Chrome
        </button>
      </div>
      <div className="flex items-center justify-between w-[70%] text-[#6D6F87]">
        <a
          href="#"
          className="flex flex-col items-center justify-between gap-2 w-10"
        >
          <img src="chrome.png" alt="" />
          <p>Chrome</p>
        </a>
        <a
          href="#"
          className="flex flex-col items-center justify-between gap-2 w-10"
        >
          <img src="firefox.png" alt="" />
          <p>Firefox</p>
        </a>
        <a
          href="#"
          className="flex flex-col items-center justify-between gap-2 w-10"
        >
          <img src="brave.png" alt="" />
          <p>Brave</p>
        </a>
        <a
          href="#"
          className="flex flex-col items-center justify-between gap-2 w-10"
        >
          <img src="edge.png" alt="" />
          <p>Edge</p>
        </a>
        <a
          href="#"
          className="flex flex-col items-center justify-between gap-2 w-10"
        >
          <img src="opera.png" alt="" />
          <p>Opera</p>
        </a>
      </div>
    </div>
  );
}
