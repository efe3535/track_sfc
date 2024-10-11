"use client"

import Header from "@/app/components/header";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const router = useRouter();

  const handleSubmit = function (e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formJson = Object.fromEntries(formData.entries())
    const { trackNumber } = formJson;
    if (trackNumber.toUpperCase().startsWith("SFC")) {
      router.push(`/track/${trackNumber}`)
    } else {
      toast.error("Kargo takip numarası SFC ile başlamalıdır.", { style: { backgroundColor: "#111", color: "#fff" } })
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Header left={"Havya Takip"} />
      <Toaster position="top-center" />
      <div className="absolute top-1/2 w-full justify-center">
        <form method="post" className="sm:w-2/3 flex sm:flex-row max-sm:flex-col max-sm:w-full justify-center gap-6 align-middle m-auto" onSubmit={handleSubmit}>
          <input name="trackNumber" type="text" placeholder="Kargo takip numarası (SFC????)" className="w-3/4 h-12 p-6 bg-background2 rounded-md placeholder-gray-500 outline-none border-2 focus:border-4 border-red-400 ease-linear self-center transition-all"></input>
          <button type="submit" className="bg-background2 hover:bg-red-400 transition-all border-2 border-red-400 w-1/4 justify-center rounded-md max-sm:self-center max-sm:h-12">Takip</button>
        </form>
      </div>
    </main>
  );
}

export default Home;
