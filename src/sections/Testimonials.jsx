import { testimonials } from "../constants/index.jsx";
import TestimonialItem from "../components/TestimonialItem.jsx";
import { useEffect, useRef, useState } from "react";

const Testimonials = () => {
  const halfLength = Math.floor(testimonials.length / 2);
  const [speed, setSpeed] = useState(1);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  
  // Duplicate testimonials for infinite scroll effect
  const leftColumnItems = [...testimonials.slice(0, halfLength), ...testimonials.slice(0, halfLength)];
  const rightColumnItems = [...testimonials.slice(halfLength), ...testimonials.slice(halfLength)];

  useEffect(() => {
    const leftColumn = leftColumnRef.current;
    const rightColumn = rightColumnRef.current;
    let animationFrameId;
    let leftPosition = 0;
    let rightPosition = 0;

    const animate = () => {
      // Move columns in opposite directions for visual interest
      leftPosition += 0.5 * speed;
      rightPosition += 0.7 * speed;
      
      // Reset position when first set of testimonials is out of view
      if (leftPosition >= leftColumn.scrollHeight / 2) {
        leftPosition = 0;
      }
      if (rightPosition >= rightColumn.scrollHeight / 2) {
        rightPosition = 0;
      }
      
      leftColumn.style.transform = `translateY(-${leftPosition}px)`;
      rightColumn.style.transform = `translateY(-${rightPosition}px)`;
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed]);

  return (
    <section className="relative z-2 py-16 md:py-20 lg:py-28">  {/* Reduced padding */}
      <div className="container block lg:flex">
        <div className="testimonials_head-res relative z-2 mr-20 flex-300">
          <p className="caption mb-3 max-md:mb-2">Wall of Love</p> {/* Reduced margin */}
          <h3 className="h3 max-md:h5 text-p4">Words from our fans</h3>
        </div>

        <div 
          className="testimonials_inner-after testimonials_inner-before relative -my-8 -mr-3 flex items-start max-lg:static max-md:block overflow-hidden h-[400px]" /* Added fixed height */
          onMouseEnter={() => setSpeed(0.2)}
          onMouseLeave={() => setSpeed(1)}
        >
          <div 
            ref={leftColumnRef}
            className="testimonials_group-after flex-50 transition-transform"
            style={{ willChange: 'transform' }}
          >
            {leftColumnItems.map((testimonial, index) => (
              <TestimonialItem
                key={`${testimonial.id}-${index}`}
                item={testimonial}
                containerClassName="last:after:hidden last:after:max-md:block"
              />
            ))}
          </div>

          <div 
            ref={rightColumnRef}
            className="flex-50 transition-transform"
            style={{ willChange: 'transform' }}
          >
            {rightColumnItems.map((testimonial, index) => (
              <TestimonialItem
                key={`${testimonial.id}-${index}`}
                item={testimonial}
                containerClassName="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
