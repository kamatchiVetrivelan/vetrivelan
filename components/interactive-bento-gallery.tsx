"use client"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"

// MediaItemType defines the structure of a media item
interface MediaItemType {
  id: number
  type: string
  title?: string
  desc?: string
  url: string
  span: string
}

// New interface to accept simple image arrays from tour data
interface InteractiveBentoGalleryProps {
  images: string[]
  alt?: string
  title?: string
  description?: string
}

// MediaItem component renders either a video or image based on item.type
const MediaItem = ({ item, className, onClick }: { item: MediaItemType; className?: string; onClick?: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null) // Reference for video element
  const [isInView, setIsInView] = useState(false) // To track if video is in the viewport
  const [isBuffering, setIsBuffering] = useState(true) // To track if video is buffering

  // Intersection Observer to detect if video is in view and play/pause accordingly
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "50px",
      threshold: 0.1,
    }

    const currentVideoRef = videoRef.current; // Store the ref value

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsInView(entry.isIntersecting) // Set isInView to true if the video is in view
      })
    }, options)

    if (currentVideoRef) {
      observer.observe(currentVideoRef) // Start observing the video element
    }

    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef) // Clean up observer when component unmounts
      }
    }
  }, [])
  // Handle video play/pause based on whether the video is in view or not
  useEffect(() => {
    let mounted = true
    const currentVideoRef = videoRef.current; // Store the ref value

    const handleVideoPlay = async () => {
      if (!currentVideoRef || !isInView || !mounted) return // Don't play if video is not in view or component is unmounted

      try {
        if (currentVideoRef.readyState >= 3) {
          setIsBuffering(false)
          await currentVideoRef.play() // Play the video if it's ready
        } else {
          setIsBuffering(true)
          await new Promise((resolve) => {
            if (currentVideoRef) {
              currentVideoRef.oncanplay = resolve // Wait until the video can start playing
            }
          })
          if (mounted) {
            setIsBuffering(false)
            await currentVideoRef.play()
          }
        }
      } catch (error) {
        console.warn("Video playback failed:", error)
      }
    }

    if (isInView) {
      handleVideoPlay()
    } else if (currentVideoRef) {
      currentVideoRef.pause()
    }

    return () => {
      mounted = false
      if (currentVideoRef) {
        currentVideoRef.pause()
        currentVideoRef.removeAttribute("src")
        currentVideoRef.load()
      }
    }
  }, [isInView])

  // Render either a video or image based on item.type
  if (item.type === "video") {
    return (
      <div className={`${className} relative overflow-hidden`}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          onClick={onClick}
          playsInline
          muted
          loop
          preload="auto"
          style={{
            opacity: isBuffering ? 0.8 : 1,
            transition: "opacity 0.2s",
            transform: "translateZ(0)",
            willChange: "transform",
          }}
        >
          <source src={item.url} type="video/mp4" />
        </video>
        {isBuffering && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        )}
      </div>
    )
  }

  return (
    <Image
      src={item.url || "/placeholder.svg"} // Image source URL
      width={500}
      height={500}
      alt={item.title || "Image"} // Alt text for the image
      className={`${className} object-cover cursor-pointer`} // Style the image
      onClick={onClick} // Trigger onClick when the image is clicked
      loading="lazy" // Lazy load the image for performance
      decoding="async" // Decode the image asynchronously
    />
  )
}

// GalleryModal component displays the selected media item in a modal
interface GalleryModalProps {
  selectedItem: MediaItemType
  isOpen: boolean
  onClose: () => void
  setSelectedItem: (item: MediaItemType | null) => void
  mediaItems: MediaItemType[] // List of media items to display in the modal
}
const GalleryModal = ({ selectedItem, isOpen, onClose, setSelectedItem, mediaItems }: GalleryModalProps) => {
  const [dockPosition, setDockPosition] = useState({ x: 0, y: 0 }) // Track the position of the dockable panel

  if (!isOpen) return null // Return null if the modal is not open

  return (
    <>
      {/* Main Modal */}
      <motion.div
        initial={{ scale: 0.98 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.98 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        className="fixed inset-0 w-full min-h-screen sm:h-[90vh] md:h-[600px] backdrop-blur-lg 
                          rounded-none sm:rounded-lg md:rounded-xl overflow-hidden z-10"
      >
        {/* Main Content */}
        <div className="h-full flex flex-col">
          <div className="flex-1 p-2 sm:p-3 md:p-4 flex items-center justify-center bg-black">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedItem.id}
                className="relative w-full aspect-[16/9] max-w-[95%] sm:max-w-[85%] md:max-w-3xl 
                                         h-auto max-h-[70vh] rounded-lg overflow-hidden shadow-md"
                initial={{ y: 20, scale: 0.97 }}
                animate={{
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    mass: 0.5,
                  },
                }}
                exit={{
                  y: 20,
                  scale: 0.97,
                  transition: { duration: 0.15 },
                }}
                onClick={onClose}
              >
                <MediaItem
                  item={selectedItem}
                  className="w-full h-full object-contain bg-gray-900/20"
                  onClick={onClose}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 
                                              bg-gradient-to-t from-black/50 to-transparent"
                >
                  <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold">{selectedItem.title}</h3>
                  <p className="text-white/80 text-xs sm:text-sm mt-1">{selectedItem.desc}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Close Button */}
        <motion.button
          className="absolute top-2 sm:top-2.5 md:top-3 right-2 sm:right-2.5 md:right-3 
                              p-2 rounded-full bg-gray-200/80 text-gray-700 hover:bg-gray-300/80 
                              text-xs sm:text-sm backdrop-blur-sm "
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="w-3 h-3" />
        </motion.button>
      </motion.div>

      {/* Draggable Dock */}
      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0.1}
        initial={false}
        animate={{ x: dockPosition.x, y: dockPosition.y }}
        onDragEnd={(_, info) => {
          setDockPosition((prev) => ({
            x: prev.x + info.offset.x,
            y: prev.y + info.offset.y,
          }))
        }}
        className="fixed z-50 left-1/2 bottom-4 -translate-x-1/2 touch-none"
      >
        <motion.div
          className="relative rounded-xl bg-primary/40 backdrop-blur-xl 
                             border border-sky-400/60 shadow-lg
                             cursor-grab active:cursor-grabbing"
        >
          <div className="flex items-center -space-x-2 px-3 py-2">
            {mediaItems.map((item, index) => (
              <motion.div
                key={item.id}
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedItem(item)
                }}
                style={{
                  zIndex: selectedItem.id === item.id ? 30 : mediaItems.length - index,
                }}
                className={`
                                    relative group
                                    w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex-shrink-0 
                                    rounded-lg overflow-hidden 
                                    cursor-pointer hover:z-20
                                    ${
                                      selectedItem.id === item.id
                                        ? "ring-2 ring-primary/90 shadow-lg"
                                        : "hover:ring-2 hover:ring-white/30"
                                    }
                                `}
                initial={{ rotate: index % 2 === 0 ? -15 : 15 }}
                animate={{
                  scale: selectedItem.id === item.id ? 1.2 : 1,
                  rotate: selectedItem.id === item.id ? 0 : index % 2 === 0 ? -15 : 15,
                  y: selectedItem.id === item.id ? -8 : 0,
                }}
                whileHover={{
                  scale: 1.3,
                  rotate: 0,
                  y: -10,
                  transition: { type: "spring", stiffness: 400, damping: 25 },
                }}
              >
                <MediaItem item={item} className="w-full h-full" onClick={() => setSelectedItem(item)} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/20" />
                {selectedItem.id === item.id && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute -inset-2 bg-white/20 blur-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

// Helper function to convert simple image URLs to MediaItemType objects
const convertImagesToMediaItems = (images: string[]): MediaItemType[] => {
  return images.map((url, index) => {
    // Determine if the URL is for a video or image
    const isVideo = url.endsWith(".mp4") || url.endsWith(".webm")

    // Generate span classes for the bento grid layout
    const spanClasses = [
      "row-span-1 col-span-1 md:row-span-1 md:col-span-1",
      "row-span-1 col-span-1 md:row-span-2 md:col-span-1",
      "row-span-1 col-span-1 md:row-span-1 md:col-span-2",
      "row-span-2 col-span-1 md:row-span-2 md:col-span-2",
      "row-span-1 col-span-1 md:row-span-1 md:col-span-1",
      "row-span-2 col-span-1 md:row-span-1 md:col-span-1",
    ]

    // Select a span class based on the index
    const spanClass = spanClasses[index % spanClasses.length]

    return {
      id: index + 1,
      type: isVideo ? "video" : "image",
      url: url,
      span: spanClass,
    }
  })
}

const InteractiveBentoGallery: React.FC<InteractiveBentoGalleryProps> = ({
  images,
}) => {
  // Convert the simple image URLs to MediaItemType objects
  const mediaItems = convertImagesToMediaItems(images)

  const [selectedItem, setSelectedItem] = useState<MediaItemType | null>(null)
  const [items, setItems] = useState(mediaItems)
  const [isDragging, setIsDragging] = useState(false)

  // Update items when images prop changes
  useEffect(() => {
    setItems(convertImagesToMediaItems(images))
  }, [images])

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
     
      <AnimatePresence mode="wait">
        {selectedItem ? (
          <GalleryModal
            selectedItem={selectedItem}
            isOpen={true}
            onClose={() => setSelectedItem(null)}
            setSelectedItem={setSelectedItem}
            mediaItems={items}
          />
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 auto-rows-[120px] sm:auto-rows-[150px] md:auto-rows-[180px] lg:auto-rows-[200px]"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                layoutId={`media-${item.id}`}
                className={`relative overflow-hidden rounded-xl cursor-move ${item.span}`}
                onClick={() => !isDragging && setSelectedItem(item)}
                variants={{
                  hidden: { y: 50, scale: 0.9, opacity: 0 },
                  visible: {
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 350,
                      damping: 25,
                      delay: index * 0.05,
                    },
                  },
                }}
                whileHover={{ scale: 1.02 }}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={1}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={(e, info) => {
                  setIsDragging(false)
                  const moveDistance = info.offset.x + info.offset.y
                  if (Math.abs(moveDistance) > 50) {
                    const newItems = [...items]
                    const draggedItem = newItems[index]
                    const targetIndex =
                      moveDistance > 0 ? Math.min(index + 1, items.length - 1) : Math.max(index - 1, 0)
                    newItems.splice(index, 1)
                    newItems.splice(targetIndex, 0, draggedItem)
                    setItems(newItems)
                  }
                }}
              >
                <MediaItem
                  item={item}
                  className="absolute inset-0 w-full h-full"
                  onClick={() => !isDragging && setSelectedItem(item)}
                />
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-colors duration-300" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default InteractiveBentoGallery