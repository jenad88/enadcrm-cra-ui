import HomeRecentContacts from "../features/home/HomeRecentContacts"
import HomeStatistics from "../features/home/HomeStatistics"

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-start p-5 bg-red-200'>
      <HomeStatistics />
      <div className='w-full p-4 bg-white mt-5'>
        <HomeRecentContacts />
      </div>
    </main>
  )
}
