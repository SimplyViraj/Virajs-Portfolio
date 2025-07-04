import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Suspense, useState } from "react";
import { myProjects } from "../constants"
import { Canvas } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import CanvasLoader from "../components/Loading";
import DemoComputer from "../components/DemoComputer";
import { OrbitControls } from "@react-three/drei";

const projectCount=myProjects.length;
const Projects = () => {
    const [selectedProjectIndex,setSelectedProjectIndex]=useState(0);
    const currentProject=myProjects[selectedProjectIndex];
    
    const handleNavigation=(direction)=>
    {
        setSelectedProjectIndex((prevIndex)=>
        {
            if(direction=='previous')
            {
                return prevIndex==0? projectCount-1:prevIndex-1;
            }
            else
            {
                return prevIndex==projectCount-1?0:prevIndex+1;
            }
        })
    }
    useGSAP(()=>{gsap.fromTo('.animatedText',{opacity:0},{opacity:1,duration:1,stagger:0.2,ease:'power2.inOut'});},[selectedProjectIndex]);
  return (
    <section id="work" className='c-space my-20'>
        <p className='head-text'>My Work</p>
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 mt-12 gap-5">
            <div className="col-span-2 gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                <div className="absolute top-0 right-0">
                    <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" /> 
                </div>
                <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
                    <img src={currentProject.logo} alt="logo" className="w-10 h-10 shadow-sm" />
                </div>
                <div className="flex flex-col gap-5 text-white-600 my-5">
                    <p className="text-white text-2ml font-semibol animatedText">{currentProject.title}</p>
                    <p className="animatedText">{currentProject.desc}</p>
                    <p className="animatedText">{currentProject.subdesc}</p>
                </div>
             <div className="flex items-center justify-between flex-wrap gap-5">
                <div className="flex items-center gap-3">
                    {currentProject.tags.map((tag,index)=>(<div key={index} className="tech-logo"><img src={tag.path} alt={tag.name} /></div>))}
                </div>
                <div className="flex justify-between gap-3 items-center mt-7">
                    <button className="arrow-btn" onClick={()=>handleNavigation('previous')}><img src="/assets/left-arrow.png" alt="left-arrow" className="w-4 h-4" /></button>
                    <button className="arrow-btn" onClick={()=>handleNavigation('next')}><img src="/assets/right-arrow.png" alt="right-arrow" className="w-4 h-4" /></button>
                </div>
            </div>
            </div>
            <div className="border lg:col-span-2 sm:col-span-4 border-black-300 bg-black-200 rounded-lg">
            <Canvas>
                    <ambientLight intensity={Math.PI}/>
                    <directionalLight position={[10,10,5]}/>
                    <Center>
                        <Suspense fallback={<CanvasLoader />}>
                        <group scale={2} position={[0,-3,0]} rotation={([0,-0.1,0])}>
                            <DemoComputer texture={currentProject.texture} />
                        </group>
                        </Suspense>
                    </Center>
                    <OrbitControls enablePan={false} maxPolarAngle={Math.PI / 2} enableZoom={false} enableRotate={true} />
                </Canvas>
            </div>   
            
        </div>
    </section>
  )
}

export default Projects
