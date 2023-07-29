import { useEffect } from "react"
import { API_URL } from "../config/constants"
import LeadLayout from "../features/leads/LeadLayout"
import LeadListView from "../features/leads/components/LeadListView"

export default function LeadLandingPage() {
  useEffect(() => {
    async function healthcheck() {
      try {
        const response = await fetch(`${API_URL}/healthcheck`)

        if (!response.ok) {
          console.error(response)
        }

        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }

    healthcheck()
  }, [])

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
