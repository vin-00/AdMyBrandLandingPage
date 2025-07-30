import clsx from "clsx";
import { motion } from "framer-motion";

const TestimonialItem = ({ item, containerClassName }) => {
  return (
    <motion.div
      className={clsx(
        "testimonial-item relative rounded-3xl border-2 border-s2 px-10 pb-8 pt-8 max-md:px-6 max-md:pb-6 max-md:pt-6",
        containerClassName,
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Glassmorphism effect */}
      <div className="absolute inset-0 bg-s2/5 backdrop-blur-sm z-1 rounded-3xl" />
      <blockquote className="body-1 mb-4 text-p4 line-clamp-3">{item.comment}</blockquote>

      <div className="flex items-center max-xl:-mr-8">
        <div className="mr-3 size-16 shrink-0 rounded-half border-2 border-s2 p-1">
          <img
            src={item.avatarUrl}
            alt={item.name}
            className="size-full object-cover"
          />
        </div>
        <div>
          <h4 className="base-bold mb-0.5 text-p1">{item.name}</h4>
          <p className="small-compact uppercase text-s3">{item.role}</p>
        </div>
      </div>
    </motion.div>
  );
};
export default TestimonialItem;
