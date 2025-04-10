import TourPackages from '@/components/tour-packages/page';
import React from 'react'
import { Suspense } from "react";

function TourPackagesPage() {
  return (
  <Suspense fallback={<div>Loading...</div>}>
<div className='pt-24 pb-10 bg-black'> 
    <TourPackages/>
  </div>
  </Suspense>

)}

export default TourPackagesPage
