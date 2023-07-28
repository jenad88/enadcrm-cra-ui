import AccountLayout from "../features/accounts/AccountLayout"
import AccountListView from "../features/accounts/components/AccountListView"

export default function LeadLandingPage() {
  return (
    <>
      <AccountLayout>
        <div className='w-full bg-white mt-5'>
          <AccountListView />
        </div>
      </AccountLayout>
    </>
  )
}
