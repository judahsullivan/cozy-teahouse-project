import Locations from "@/containers/locations";
import TeaoftheMonth from "@/containers/teas";
import Home from "@/containers/home";
import Navbar from "@/components/global/navbar";
import ContactUs from "@/containers/contact";

export default function MainScreen() {
  return (
    <div>
      <Navbar />
      <section className="h-full" id="home" >
        <Home />
      </section>
      <section className=" h-full" id="tea-of-the-month" >
        <TeaoftheMonth />
        </section>
        <section id="locations" >
        <Locations />
        </section>
        <ContactUs />
    </div>
  );
}
