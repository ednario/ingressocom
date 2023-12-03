function DubbingButtons() {
  return (
    <>
      {/* Versões de audio */}
      <div className="flex mt-4 lg:ml-[13rem] lg:gap-10 xs:gap-2 xs:ml-8">
          <button className="border-2 rounded-2xl border-[#0099FF] text-[#0099FF] uppercase h-8 w-32">Dublado</button>
          <button className="border-2 rounded-2xl border-[#0099FF] text-[#0099FF] uppercase h-8 w-32">Legendado</button>
        </div>
    </>
  )
}

export default DubbingButtons