import Lottie from "lottie-react";
import animationData from "../lotties/contact-us.json";

const ContactPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-full bg-gradient-to-r from-[#57baec] to-[#f37695]">
      <div className="container mx-auto px-4 grid grid-cols-5 md:place-content-center gap-4 pt-24 h-[calc(100vh-4rem)]">
        <div className="col-span-5 md:col-span-3 flex flex-col justify-center items-center bg-white/25 rounded-2xl px-5 py-12">
          <h2 className='text-2xl bold text-violet-700'>Bize Ulaşın</h2>
          <form className="flex flex-col gap-2 text-base mt-5" onSubmit={onSubmit}>
            <div className="flex flex-col md:flex-row justify-between gap-2">
              <input
                type="text"
                placeholder="İsmin"
                className="w-full outline-none focus:border-violet-600 border placeholder:text-violet-800 bg-violet-300/30 rounded-md p-3"
              />
              <input
                type="text"
                placeholder="Soyadın"
                className="w-full outline-none focus:border-violet-600 border placeholder:text-violet-800 bg-violet-300/30 rounded-md p-3"
              />
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-2">
              <input
                type="text"
                placeholder="Email"
                className="w-full outline-none focus:border-violet-600 border placeholder:text-violet-800 bg-violet-300/70 rounded-md p-3"
              />
              <input
                type="text"
                placeholder="GSM No"
                className="w-full outline-none focus:border-violet-600 border placeholder:text-violet-800 bg-violet-300/70 rounded-md p-3"
              />
            </div>
            <textarea
              name=""
              id=""
              cols="46"
              placeholder="Mesajınızı buraya yazın"
              rows="4"
              className="w-full outline-none focus:border-violet-600 border resize-none placeholder:text-violet-800 bg-violet-400/70 rounded-md p-3"
            ></textarea>
            <div className="flex mt-2 justify-center">
              <button
                type="submit"
                className="outline-none bg-violet-500 cursor-pointer rounded-md border-white hover:text-violet-700 hover:bg-transparent border hover:border-2 hover:border-violet-700 text-white mx-auto h-10 w-full"
              >
                Gönder
              </button>
            </div>
          </form>
        </div>
        <Lottie
          animationData={animationData}
          loop={true}
          className="hidden md:block md:col-span-2"
          style={{ width: "100%", height: "100%", maxHeight: "20rem" }}
        />
      </div>
    </div>
  );
};

export default ContactPage;