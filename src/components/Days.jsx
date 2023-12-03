function Days() {
  return (
    <>
    {/* Dias */}
    <div className="bg-[#252525] flex justify-center ml-[13rem] w-[58.5rem] mt-3 gap-16 p-2 text-[#0099FF] font-bold rounded-md">
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