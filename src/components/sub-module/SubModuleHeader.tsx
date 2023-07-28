import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"

export type SubModuleDef = {
  moduleName: string
  name: string
}

type SubModuleHeaderProps = {
  subModule: SubModuleDef
}

const SubModuleHeader: React.FunctionComponent<SubModuleHeaderProps> = (
  props
) => {
  const { subModule } = props

  return (
    <div>
      <div>
        <nav className='sm:hidden' aria-label='Back'>
          <a
            href='#'
            className='flex items-center text-sm font-medium text-gray-500 hover:text-gray-700'
          >
            <ChevronLeftIcon
              className='-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400'
              aria-hidden='true'
            />
            Back
          </a>
        </nav>
        <nav className='hidden sm:flex px-4 py-4' aria-label='Breadcrumb'>
          <ol role='list' className='flex items-center space-x-4'>
            <li>
              <div className='flex'>
                <a
                  href='#'
                  className='text-sm font-medium text-gray-500 hover:text-gray-700'
                >
                  {subModule.moduleName}
                </a>
              </div>
            </li>
            <li>
              <div className='flex items-center'>
                <ChevronRightIcon
                  className='h-5 w-5 flex-shrink-0 text-gray-400'
                  aria-hidden='true'
                />
                <a
                  href='#'
                  aria-current='page'
                  className='ml-4 text-sm font-medium text-gray-500 hover:text-gray-700'
                >
                  {subModule.name}
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className='mt-2 md:flex md:items-center md:justify-between px-4'>
        <div className='min-w-0 flex-1'>
          <h3 className='text-lg font-bold leading-7 text-gray-900 sm:truncate sm:text-lg sm:tracking-tight'>
            {subModule.name}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default SubModuleHeader
