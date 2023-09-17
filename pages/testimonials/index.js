import TestimonialSlider from "../../components/TestimonialSlider";

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="h2 mb-8 xl:mb-0">
        <h2>What clients <span className="text-accent">say.</span></h2>
        <div><TestimonialSlider/></div>
      </div>
    </div>
  );
};

export default Testimonials;
