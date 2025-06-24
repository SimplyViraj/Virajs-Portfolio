import Spline from '@splinetool/react-spline';
import SplitTexts from '../components/SplitTexts';

const Hero = () => {
  return (
    <div className='c-space my-20'>
       <div className="gap-5 h-full flex justify-center items-center">
        <div className='relative'>
        <div>
       <Spline scene="https://prod.spline.design/qjVtOVkmvgrHamH9/scene.splinecode" />
       </div>
        <div className="absolute bottom-[3%] right-[2%] w-[30vw] max-w-[142px] h-[8vw] max-h-[40px] bg-black rounded-md z-10" />
       </div>
        <SplitTexts
          text="Scroll down to know About me ↓"
          className="text-white text-xl font-bold"
          delay={60}
          duration={0.8}
        />
       </div>
    </div>
  )
}

export default Hero