import ServiceSlider from '../../components/ServiceSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const Services = () => {
  return(
  <div className='h-full bg-primary/30 py-36 flex items-center'>
    <Circles/>
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
          <h2 className='h2 xl:mt-8'>
            My services <span className='text-accent'>.</span>
          </h2>
          <p className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
            Eu nisi Lorem ut voluptate et enim ad duis dolor ea aliquip. Excepteur nostrud nostrud eiusmod minim cillum esse id aute do. Dolore veniam nulla officia dolore sunt pariatur consequat. Esse laboris aliqua laboris ex ut est. Ullamco non aliqua labore minim eu ea et ea occaecat officia.
          </p>
        </div>
        <ServiceSlider/>
      </div>
    </div>
    <Bulb/>
  </div>
  );
};

export default Services;
