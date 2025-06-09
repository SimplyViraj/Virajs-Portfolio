import { useState,useRef } from 'react';
import Globe from "react-globe.gl";
import Button from '../components/Button';
import { useGSAP } from '@gsap/react';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const globeRef = useRef(null);

useGSAP(() => {
  if (globeRef.current) {
    setTimeout(() => {
      globeRef.current.pointOfView(
        { lat: 17.385, lng: 78.4867, altitude: 0.6 },
        2000
      );
    }, 10);
  }
}, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('virajtammana@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
    
  };
  return (
    <section className="c-space my-20">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container border-anim">
                    <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276] object-contain" />
                    <div>
                      <p className="grid-headtext">Hi, Im Viraj</p>
                      <p className="grid-subtext">
                      A Computer Science student with a passion for Software Engineering, Machine Learning and Full Stack Web Development.
                      Im always looking forward to learn new technologies and test them out like a real engineer
                        </p>
                        </div>
                </div>
            </div>
            <div className="col-span-1 xl:row-span-3">
              <div className="grid-container border-anim">
              <img src="/assets/Illustration (2).png" alt="grid-2" className="w-full h-[272px] sm:h-[276] h-fit object-cover" />
                <div>
                  <p className="grid-headtext">
                    Skills
                  </p>
                  <p className="grid-subtext">
                    I specialize in a variety of programming languages,machine learning and in framework and tools that allow me to build robust and scalable applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1 xl:row-span-4">
              <div className="grid-container border-anim">
                <div className="rounded-3xl w-full sm:h[-326] h-fit flex justify-center items-center">
                  <Globe
                  ref={globeRef}
                   height={276}
                   width={326}
                   backgroundColor="rgba(0,0,0,0)"
                   backgroundImageOpacity={0.5}
                   showAtmosphere
                   showGraticules
                   globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                   bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                   labelsData={[{ lat: 17.385, lng: 78.4867, text: 'Hyderabad, India', color: 'white', size:1000 }]}
                   />
                </div>
                
                <div>
                  <p className="grid-headtext">
                    Work Preference Location
                  </p>
                  <p className="grid-subtext">
                  I currently reside in Hyderabad, India, and am open to remote opportunities worldwide. I am also willing to relocate for the right opportunity, depending on the role and organization. I am particularly interested in positions that offer flexibility, innovation, and the ability to collaborate with global teams.
                  </p>
                  <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                </div>
              </div>
            </div>
            <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container border-anim">
            <div>
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            </ div>
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
                I can code in C++,Java,Python and other programming languages and versed in React and other skills.
                I also have a keen interest in GSAP, Three.js, and other libraries that help me create visually appealing and interactive web applications, like this one right here!!
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container border-anim">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">virajtammana@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        </div>
    </section>
  )
}

export default About;
