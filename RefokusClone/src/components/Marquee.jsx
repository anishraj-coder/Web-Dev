import React from "react";
import { nanoid } from "nanoid";
import { ImGift } from "react-icons/im";
import { div } from "motion/react-client";
import { motion } from "motion/react";
function Marquee({ data,index }) {
  
  return (
    <div className="w-full flex overflow-hidden ">
      <motion.div initial={{x:index===0? '0%':'-100%'}} animate={{x: index==1?'0':'-100%'}} transition={{ease:"linear",duration:20, repeat:Infinity}} className="flex gap-[5rem] shrink-0 flex-nowrap py-5 pr-[5rem]">
        {data.map((item) => {
          return (
            <img className="shrink-0 w-32" key={nanoid()} src={item} alt="" />
          );
        })}
      </motion.div>
      <motion.div initial={{x:index===0? '0%':'-100%'}} animate={{x: index==1?'0':'-100%'}} transition={{ease:"linear",duration:20,repeat:Infinity}}  className="flex gap-[5rem] shrink-0 flex-nowrap py-5 pr-[5rem]">
        {data.map((item) => {
          return (
            <img className="shrink-0 w-32" key={nanoid()} src={item} alt="" />
          );
        })}
      </motion.div>
    </div>
  );
}

export default Marquee;
