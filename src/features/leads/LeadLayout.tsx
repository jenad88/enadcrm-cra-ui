import SubModuleHeader, {
  SubModuleDef,
} from "../../components/sub-module/SubModuleHeader"
import NewLeadDialog from "../../features/leads/components/NewLeadDialog"
import LeadContextProvider from "../../features/leads/context/LeadContext"

export default function LeadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const subModule: SubModuleDef = { moduleName: "CRM", name: "Leads" }

  return (
    <>
      <LeadContextProvider>
        <section className='m-3'>
          <SubModuleHeader subModule={subModule} />
          <div className='px-4'>{children}</div>
          <NewLeadDialog />
        </section>
      </LeadContextProvider>
    </>
  )
}
