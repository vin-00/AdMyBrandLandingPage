import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PricingCalculator = ({ isMonthly }) => {
  const [channels, setChannels] = useState(3);
  const [campaigns, setCampaigns] = useState(5);
  const [support, setSupport] = useState("email");
  const [totalPrice, setTotalPrice] = useState(0);

  // Base prices
  const basePrice = isMonthly ? 99 : 79;
  const channelPrice = isMonthly ? 25 : 20;
  const campaignPrice = isMonthly ? 15 : 12;
  const supportPrices = {
    email: 0,
    priority: isMonthly ? 50 : 40,
    dedicated: isMonthly ? 150 : 120,
  };

  useEffect(() => {
    // Calculate total price based on selections
    const channelCost = (channels - 3) * channelPrice; // First 3 channels included in base price
    const campaignCost = (campaigns - 5) * campaignPrice; // First 5 campaigns included in base price
    const supportCost = supportPrices[support];
    
    const total = basePrice + Math.max(0, channelCost) + Math.max(0, campaignCost) + supportCost;
    setTotalPrice(total);
  }, [channels, campaigns, support, isMonthly]);

  return (
    <motion.div 
      className="mt-12 p-8 rounded-3xl border-2 border-s4/25 bg-s2/5 backdrop-blur-sm relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h4 className="h5 text-p3 mb-6 text-center">Customize Your Plan</h4>
      
      <div className="space-y-8">
        <div>
          <div className="flex justify-between mb-2">
            <label className="base-bold text-p4">Advertising Channels</label>
            <span className="base text-p3">{channels}</span>
          </div>
          <input 
            type="range" 
            min="3" 
            max="15" 
            value={channels} 
            onChange={(e) => setChannels(parseInt(e.target.value))}
            className="w-full h-2 bg-s4/25 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between mt-1 small-compact text-s3">
            <span>3</span>
            <span>15</span>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <label className="base-bold text-p4">Monthly Campaigns</label>
            <span className="base text-p3">{campaigns}</span>
          </div>
          <input 
            type="range" 
            min="5" 
            max="30" 
            value={campaigns} 
            onChange={(e) => setCampaigns(parseInt(e.target.value))}
            className="w-full h-2 bg-s4/25 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between mt-1 small-compact text-s3">
            <span>5</span>
            <span>30</span>
          </div>
        </div>
        
        <div>
          <label className="base-bold text-p4 block mb-3">Support Level</label>
          <div className="grid grid-cols-3 gap-3">
            <button 
              className={`p-3 rounded-xl border-2 transition-all ${support === 'email' ? 'border-p3 bg-s4/20' : 'border-s4/25'}`}
              onClick={() => setSupport('email')}
            >
              <p className="base-bold text-center">Email</p>
              <p className="small-compact text-center text-s3">Basic</p>
            </button>
            <button 
              className={`p-3 rounded-xl border-2 transition-all ${support === 'priority' ? 'border-p3 bg-s4/20' : 'border-s4/25'}`}
              onClick={() => setSupport('priority')}
            >
              <p className="base-bold text-center">Priority</p>
              <p className="small-compact text-center text-s3">Faster</p>
            </button>
            <button 
              className={`p-3 rounded-xl border-2 transition-all ${support === 'dedicated' ? 'border-p3 bg-s4/20' : 'border-s4/25'}`}
              onClick={() => setSupport('dedicated')}
            >
              <p className="base-bold text-center">Dedicated</p>
              <p className="small-compact text-center text-s3">Personal</p>
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-10 p-6 rounded-2xl bg-s4/10 flex justify-between items-center">
        <div>
          <p className="base-bold text-p4">Estimated Price</p>
          <p className="small-compact text-s3">{isMonthly ? 'Monthly' : 'Annual (per month)'}</p>
        </div>
        <div className="flex items-baseline">
          <span className="h4 text-p3">${totalPrice}</span>
          <span className="small-1 ml-1">/mo</span>
        </div>
      </div>
      
      <motion.button
        className="g4 w-full py-4 mt-6 rounded-xl text-p1 base-bold uppercase transition-all hover:shadow-lg"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
};

export default PricingCalculator;