import LeadLayout from "../features/leads/LeadLayout"
import LeadListView from "../features/leads/components/LeadListView"

export default function LeadLandingPage() {
  return (
    <>
      <LeadLayout>
        <div className='w-full bg-white mt-5'>
          <LeadListView />
        </div>
      </LeadLayout>
    </>
  )
}
