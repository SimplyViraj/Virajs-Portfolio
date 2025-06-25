import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lanyard from "./components/Lanyard";


gsap.registerPlugin(ScrollTrigger);

const Contact = () => 
{
  const formRef = useRef();
  const containerRef = useRef();
  const formCardRef = useRef();
  const rightBlockRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    
    
    emailjs
      .send('service_7ozuofh','template_m13h8xj',
        {
          from_name: form.name,
          to_name: "Viraj",
          from_email: form.email,
          to_email: "virajtammana@gmail.com",
          message: form.message,
        },
        'MAPuFKBkbSDEFiFPr'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formCardRef.current, {
        opacity: 0,
        y:100,
        duration: 5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(rightBlockRef.current, {
        opacity: 0,
        x: 100,
        duration: 5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className={`sm:px-16 px-0 mx-0 my-0 sm:py-5 py-5 w-[100%] relative z-0 bg-black-200`}
    >
      <div className="flex xl:flex-row flex-col-reverse gap-5 overflow-hidden">
        <div
          ref={formCardRef}
          className="flex-[0.75] bg-black-200 p-8 rounded-2xl"
        >
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-white">Get in touch</p>
          <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Ex:John@gmail.com?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
        <div
          ref={rightBlockRef}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] bg-black-200 rounded-2xl flex items-center justify-center text-white text-xl font-bold z-[10]"
        >
          <Lanyard position={[1,-4,-12]} gravity={[0, -40, 0]} />
        </div>
      </div> 
    </section>
  );
};

export default Contact;
