// "use client"

// import { useRef, useState, useEffect, JSX } from "react"
// import { Canvas, useFrame } from "@react-three/fiber"
// import { Environment, OrbitControls, PerspectiveCamera, useTexture } from "@react-three/drei"
// import { Button } from "@/components/ui/button"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import type * as THREE from "three"

// interface CarouselItemProps {
//   position: [number, number, number]
//   rotation: [number, number, number]
//   texture: THREE.Texture
//   index: number
//   isActive: boolean
// }

// // The individual carousel item component
// function CarouselItem({ position, rotation, texture, index, isActive }: CarouselItemProps): JSX.Element {
//   const meshRef = useRef<THREE.Mesh>(null)

//   // Apply a subtle animation to the active item
//   useFrame((state) => {
//     if (isActive && meshRef.current) {
//       meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1
//     }
//   })

//   return (
//     <mesh ref={meshRef} position={position} rotation={rotation} castShadow>
//       <boxGeometry args={[3, 4, 0.2]} />
//       <meshStandardMaterial
//         map={texture}
//         emissive="#ffffff"
//         emissiveIntensity={isActive ? 0.2 : 0}
//         metalness={0.5}
//         roughness={0.4}
//       />
//     </mesh>
//   )
// }

// interface CarouselProps {
//   itemCount?: number
//   radius?: number
//   activeIndex?: number
//   onSelectItem?: (index: number) => void
// }

// // The main carousel component that arranges items in a circle
// function Carousel({ itemCount = 5, radius = 8, activeIndex = 0, onSelectItem }: CarouselProps): JSX.Element {
//   const groupRef = useRef<THREE.Group>(null)
//   const [targetRotation, setTargetRotation] = useState<number>(0)

//   // Load textures for the carousel items
//   const textures = [
//     useTexture("./ ?height=400&width=300"),
//     useTexture("/Image/kerala.jpg?height=400&width=300"),
//     useTexture("/Image/Hills.jpg?height=400&width=300"),
//     useTexture("/Image/conoor-4448487.jpg?height=400&width=300"),
//     useTexture("/Image/mussoorie-7243347.jpg?height=400&width=300"),
//   ]

//   // Update rotation when active index changes
//   useEffect(() => {
//     setTargetRotation(((Math.PI * 2) / itemCount) * activeIndex)
//   }, [activeIndex, itemCount])

//   // Smoothly animate to the target rotation
//   useFrame(() => {
//     if (groupRef.current) {
//       groupRef.current.rotation.y += (targetRotation - groupRef.current.rotation.y) * 0.05
//     }
//   })

//   return (
//     <group ref={groupRef}>
//       {Array.from({ length: itemCount }).map((_, index) => {
//         // Calculate position in a circle
//         const angle = ((Math.PI * 2) / itemCount) * index
//         const x = Math.sin(angle) * radius
//         const z = Math.cos(angle) * radius

//         // Calculate rotation to face the center
//         const rotation: [number, number, number] = [0, Math.PI + angle, 0]

//         return (
//           <CarouselItem
//             key={index}
//             position={[x, 0, z]}
//             rotation={rotation}
//             texture={textures[index % textures.length]}
//             index={index}
//             isActive={index === activeIndex}
//           />
//         )
//       })}
//     </group>
//   )
// }

// // Main component that sets up the 3D scene
// export default function Carousel3D(): JSX.Element {
//   const [activeIndex, setActiveIndex] = useState<number>(0)
//   const itemCount = 5

//   const goToPrevious = (): void => {
//     setActiveIndex((prev) => (prev - 1 + itemCount) % itemCount)
//   }

//   const goToNext = (): void => {
//     setActiveIndex((prev) => (prev + 1) % itemCount)
//   }

//   return (
//     <div className="relative w-full h-screen">
//       <Canvas shadows>
//         <PerspectiveCamera makeDefault position={[0, 2, 16]} fov={50} />
//         <ambientLight intensity={0.5} />
//         <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={1} castShadow />
//         <Carousel itemCount={itemCount} activeIndex={activeIndex} onSelectItem={setActiveIndex} />
//         <OrbitControls enableZoom={true} enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 2} />
//         <Environment preset="city" />
//         <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
//           <planeGeometry args={[50, 50]} />
//           <meshStandardMaterial color="#303030" metalness={0.8} roughness={0.4} />
//         </mesh>
//       </Canvas>

//       {/* Navigation controls */}
//       <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4">
//         <Button
//           variant="secondary"
//           size="icon"
//           onClick={goToPrevious}
//           className="h-12 w-12 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70"
//         >
//           <ChevronLeft className="h-6 w-6" />
//         </Button>
//         <Button
//           variant="secondary"
//           size="icon"
//           onClick={goToNext}
//           className="h-12 w-12 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70"
//         >
//           <ChevronRight className="h-6 w-6" />
//         </Button>
//       </div>

//       {/* Item indicator */}
//       <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
//         {Array.from({ length: itemCount }).map((_, index) => (
//           <button
//             key={index}
//             className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-white" : "bg-white/30"}`}
//             onClick={() => setActiveIndex(index)}
//             aria-label={`Go to item ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

