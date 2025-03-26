import { Suspense } from "react"
import { tourPackagesData } from "@/components/tour-packages/tour-data"
import TourDetailClient from "./tour-detail-content"

// Helper function to find tour data by ID
const findTourById = (packageName: string, tourId: string) => {
  const normalizedPackageName = packageName.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())

  if (!tourPackagesData[normalizedPackageName as keyof typeof tourPackagesData]) {
    return null
  }

  const packageData = tourPackagesData[normalizedPackageName as keyof typeof tourPackagesData]
  return packageData.features.find((feature) => feature.id === tourId)
}

export default async function Page({
  params,
}: {
  params: Promise<{ package: string; id: string }>
}) {
  // Since we're using an async function, we need to await the params
  const resolvedParams = await params
  const { package: packageName, id: tourId } = resolvedParams
  
  // Pre-fetch the tour data on the server
  const tourData = findTourById(packageName, tourId)

  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-16 text-center">Loading tour details...</div>}>
      <TourDetailClient
        tourData={
          tourData ?? {
            title: "",
            fullDescription: "",
            detailImages: [],
            image: "",
            itinerary: [],
            exclusions: [],
            termsAndConditions: [],
          }
        }
        packageName={packageName}
        tourId={tourId}
      />
    </Suspense>
  )
}

