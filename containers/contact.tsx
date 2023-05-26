import { footers } from "@/utils/data";

export default function ContactUs() {
  const title ="Contact Us";
  return (
    <div className="text-center w-full text-white   space-y-10">
        <h1 className="text-4xl md:text-6xl">{title}</h1>
        {footers.map((footer, index) => (
            <div key={index} id="contact"  className="h-full flex flex-col space-y-8">
            <h1 className="text-4xl">{footer.title}</h1>
            <h4 className="text-">{footer.email}</h4>
            <h2>{footer.number}</h2>
            </div>
        ))}
    </div>
  )
}
