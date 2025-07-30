import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="relative z-2 py-16 md:py-20 lg:py-28">
      <div className="container">
        <motion.div 
          className="max-w-960 mx-auto border-l border-r border-s2 bg-s1/50 p-10 rounded-3xl overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Glass effect background */}
          <div className="absolute inset-0 bg-s2/5 backdrop-blur-sm z-[-1]" />
          
          <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-8 max-w-lg text-center text-p4">
            Get in touch with us
          </h3>
          
          <div className="max-w-xl mx-auto">
            {isSubmitted ? (
              <motion.div 
                className="text-center p-8 bg-s4/10 rounded-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="h5 text-p3 mb-4">Thank you!</h4>
                <p className="body-1 text-p4">Your message has been sent successfully. We'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block base-bold mb-2 text-p4">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full p-4 bg-s2/10 border border-s4/25 rounded-xl focus:outline-none focus:border-p3 transition-colors"
                    placeholder="John Doe"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-red-500 mt-1 small-compact">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block base-bold mb-2 text-p4">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-4 bg-s2/10 border border-s4/25 rounded-xl focus:outline-none focus:border-p3 transition-colors"
                    placeholder="your@email.com"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 mt-1 small-compact">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block base-bold mb-2 text-p4">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full p-4 bg-s2/10 border border-s4/25 rounded-xl focus:outline-none focus:border-p3 transition-colors"
                    placeholder="How can we help you?"
                    {...register("message")}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 mt-1 small-compact">{errors.message.message}</p>
                  )}
                </div>
                
                <motion.button
                  type="submit"
                  className="g4 w-full py-4 px-8 rounded-xl text-p1 base-bold uppercase transition-all hover:shadow-lg disabled:opacity-70"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;