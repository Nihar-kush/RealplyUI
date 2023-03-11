import Footer from "@/components/Footer";

export default function Cta() {
  return (
    <div className="animate-fade-in-up h-[90vh] flex flex-col items-center justify-between overflow-hidden">
      <div className="flex w-[80%] mt-40">
        <div className="flex flex-col gap-4 w-[55%]">
          <p className="text-[2.5rem] leading-10 font-semibold text-[#ffffff]">
            Get started with Realply today
          </p>
          <p className="text-xl leading-relaxed text-[#6D6F87]">
            To schedule a product Demo with our product consultants.
            <br /> Click the button.
          </p>
        </div>
        {/* FORM */}
        <form
          className="flex items-center justify-center gap-5 w-[45%]"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="Email"
            className="text-[#ffffff] bg-transparent rounded-3xl py-1 px-4 flex items-center ring-1 ring-white"
          />
          <button className="btn">Request a Demo</button>
        </form>
      </div>
      {/* FOOTER */}
      <Footer />
    </div>
  );
}
