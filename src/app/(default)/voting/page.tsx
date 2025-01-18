import { AvailableVoting } from '@/components/AvailableVoting/AvailableVoting'
import Faq from '@/components/Home/Faq/Faq'
import VotingTermsAndConditions from '@/components/Voting/VotingTermsAndConditions/VotingTermsAndConditions'
import React from 'react'

export default function page() {
  return (
    <div>
        <AvailableVoting/>
        <VotingTermsAndConditions/>
        <Faq/>
    </div>
  )
}
