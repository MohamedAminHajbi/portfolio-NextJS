import {FaQuoteLeft} from 'react-icons/fa';
import {SwiperSlide , Swiper} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { Pagination } from 'swiper';
import Image from 'next/image';

// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

const TestimonialSlider = () => {
  return (
    <>
      <Swiper spaceBetween={10} pagination={{clickable: true}} modules={[ Pagination]} className='h-[440px] sm:h-[540px]'>
        {
          testimonialData.map((person, index) => {
            return(
              <SwiperSlide key={index}>
                <div className=''>
                  <div key={index}>
                    <div className=''>
                          <div className=''>
                            Avatar
                          </div>
                          <div className=''>
                            Name
                          </div>
                          <div className=''>
                            Position
                          </div>
                    </div>
                  </div>
                  <div className='bg-pink-500/10 flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20'>
                    <div className='mb-4'>
                    <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0'/>
                    </div>
                    <div>{person.message}</div>
                  </div>
                </div>
                
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
