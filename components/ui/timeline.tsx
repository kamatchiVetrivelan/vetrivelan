"use client"

import { useScroll, useTransform, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

interface TimelineEntry {
  day: string
  title: string
  description: string
}

export const TourTimeline = ({ itinerary }: { itinerary: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setHeight(rect.height)
    }
  }, [ref])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      }
    })
  }

  const dayIndicatorVariants = {
    normal: { scale: 1 },
    hover: { scale: 1.2, backgroundColor: "#ff0000" }
  }

  return (
    <div className="w-full bg-black dark:bg-neutral-950 font-sans md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
        <h2 className="text-xl font-bold md:text-3xl mb-4 text-red-500 underline dark:text-red-400 max-w-4xl">
          Tour Itinerary
        </h2>
        <p className="text-neutral-300 dark:text-neutral-300 text-md md:text-base max-w-sm">
          Follow the day-by-day journey of this amazing tour experience.
        </p>
      </div>
      
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {itinerary.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-8 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <motion.div 
                className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-red-900/30 border border-red-500/30 flex items-center justify-center"
                variants={dayIndicatorVariants}
                initial="normal"
                whileHover="hover"
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="h-4 w-4 rounded-full bg-red-500 border border-red-300 p-2" />
              </motion.div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-red-500 dark:text-red-400">
                {item.day}
              </h3>
            </div>
            
            <motion.div 
              className="relative pl-20 pr-4 md:pl-4 w-full"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
            >
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-red-500 dark:text-red-400">
                {item.day}
              </h3>
              <motion.div 
                className="bg-white border border-red-900/30 p-6 rounded-lg shadow-lg mb-6 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 0 15px rgba(255, 0, 0, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                <h4 className="text-xl font-bold text-blue-950 dark:text-white mb-2">{item.title}</h4>
                <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
              </motion.div>
            </motion.div>
          </div>
        ))}
        
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 md:overflow-y-auto overflow-hidden w-[3px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-red-700/30 dark:via-red-700/30 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ 
              height: heightTransform, 
              opacity: opacityTransform 
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-red-600 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  )
}