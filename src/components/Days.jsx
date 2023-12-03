function Days() {
  return (
    <>
    {/* Dias */}
    <div className="bg-[#252525] flex justify-center lg:ml-[13rem] xs:ml-8 lg:w-[58.5rem] xs:w-[26rem] mt-3 lg:gap-16 xs:gap-6 p-2 text-[#0099FF] font-bold rounded-md">
          <button className="border-b-[#F58220] text-[#F58220]">
            <h1 className="text-lg ">02/12</h1>
            <h2>Hoje</h2>
          </button>
          <button className="active:border-b-[#F58220] active:text-[#F58220]">
            <h1 className="text-lg ">03/12</h1>
            <h2>Dom</h2>
          </button>
          <button className="active:border-b-[#F58220] active:text-[#F58220]">
            <h1 className="text-lg ">04/12</h1>
            <h2>Seg</h2>
          </button>
          <button className="active:border-b-[#F58220] active:text-[#F58220]">
            <h1 className="text-lg ">05/12</h1>
            <h2>Ter</h2>
          </button>
          <button className="active:border-b-[#F58220] active:text-[#F58220]">
            <h1 className="text-lg ">06/12</h1>
            <h2>Qua</h2>
          </button>
        </div>
    </>
  )
}

export default Days