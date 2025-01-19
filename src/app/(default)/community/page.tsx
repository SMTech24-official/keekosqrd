import { PhotoGallery } from '@/components/Community/PhotoGallery/PhotoGallery'
import { UpcomingVoting } from '@/components/Community/UpcomingVoting/UpcomingVoting'
import { Testimonials } from '@/components/Home/Testimonials/Testimonials'
import React from 'react'

export default function page() {
  return (
    <div>
        <PhotoGallery/>
        <UpcomingVoting/>
        <Testimonials/>
    </div>
  )
}
