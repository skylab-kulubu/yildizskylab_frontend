import Lottie from "lottie-react";
import animationData from "../lotties/contact-us.json";

const ContactPage = () => {
  return (
    <div className="w-full h-full bg-gradient-to-r from-[#57baec] to-[#f37695]">
      <div className="container mx-auto px-4 flex gap-4 pt-8 flex-col md:flex-row items-center justify-center h-[calc(100%-4rem)] ">
        <div className="bg-white/25 rounded-2xl text-violet-700 p-16 text-4xl bold">
          Bize Ulaşın!
          <form action="" className="text-base mt-5">
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="İsmin"
                className="border mb-2 placeholder:text-violet-800 bg-violet-300/30 rounded-md p-3"
              />
              <input
                type="text"
                placeholder="Soyadın"
                className="border mb-2 placeholder:text-violet-800 bg-violet-300/30 rounded-md p-3"
              />
            </div>
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Email"
                className="border mb-2 placeholder:text-violet-800 bg-violet-300/70 rounded-md p-3"
              />
              <input
                type="text"
                placeholder="GSM No"
                className="border mb-2 placeholder:text-violet-800 bg-violet-300/70 rounded-md p-3"
              />
            </div>
            <textarea
              name=""
              id=""
              cols="46"
              placeholder="Mesajınızı buraya yazın"
              rows="4"
              className="border resize-none placeholder:text-violet-800 bg-violet-400/70 rounded-md p-3"
            ></textarea>
            <div className="flex mt-2 justify-center">
              <button
                type="submit"
                className="bg-violet-500 cursor-pointer rounded-md border-white hover:text-violet-700 hover:bg-transparent border hover:border-2 hover:border-violet-700 text-white mx-auto h-10 w-full"
              >
                Gönder
              </button>
            </div>
          </form>
        </div>
        <Lottie
          animationData={animationData}
          loop={true}
          style={{ width: "100%", height: "100%", maxHeight: "30rem" }}
        />
      </div>
    </div>
  );
};

export default ContactPage;