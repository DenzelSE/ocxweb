const Features = () => {
    return (
        <section id="features" className="dark:text-white text-gray-600 body-font dark:bg-[#244f6b]">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font dark:text-[#c4d4e0]  text-gray-900 mb-4">Our Features:
      Revolutionizing Offline Transactions</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto dark:text-[#c4d4e0]">{`In today's hyper-connected world, `}<span className="font-semibold dark:text-[#00b4d8]  text-blue-500">OffConnectX</span>{` stands out by enabling transactions without the need for internet access. This innovation tackles some of the most frustrating issues users face, such as the ones listed below:`}</p>
    </div>
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div className="p-2 sm:w-1/2 w-full">
        <div className="dark:bg-[#00a0c0] bg-blue-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="dark:text-[#023e8a] text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium dark:text-white">Internet Dependency</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="dark:bg-[#00b4d8] bg-blue-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="dark:text-[#023e8a] text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium dark:text-white">Service Interruptions</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="dark:bg-[#2b799a]  bg-blue-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="dark:text-[#023e8a] text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium dark:text-white">Remote Inaccessibility</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="dark:bg-[#00b4d8] bg-blue-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="dark:text-[#023e8a] text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium dark:text-white">Security Risks</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="dark:bg-[#2a6782] bg-blue-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="dark:text-[#023e8a] text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium dark:text-white">High Data Costs</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="dark:bg-[#27647d] bg-blue-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="dark:text-[#023e8a] text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium dark:text-white">Battery Drain</span>
        </div>
      </div>
    </div>
    {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
  </div>
</section>

    )
}

export default Features;