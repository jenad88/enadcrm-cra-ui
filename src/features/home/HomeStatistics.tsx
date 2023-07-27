const stats = [
  { name: "My Open Tasks", stat: "5" },
  { name: "My Opportunities", stat: "22" },
  { name: "My Closed Deals", stat: "14" },
  { name: "My Leads", stat: "27" },
]

export default function HomeStatistics() {
  return (
    <div className='w-full'>
      <h3 className='text-base font-semibold leading-6 text-gray-900'>
        Last 30 days
      </h3>
      <dl className='mt-5 grid grid-cols-2 gap-5 md:grid-cols-4'>
        {stats.map((item) => (
          <div
            key={item.name}
            className='overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6'
          >
            <dt className='truncate text-sm font-medium text-gray-500'>
              {item.name}
            </dt>
            <dd className='mt-1 text-3xl font-semibold tracking-tight text-gray-900'>
              {item.stat}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
