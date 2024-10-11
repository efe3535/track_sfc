const Header = ({ left, right }) => {
  return (
    <div className="bg-background2 w-11/12 h-20 flex flex-row m-6 rounded-xl border-b-2 hover:border-b-4 border-b-red-400 transition-all">
      <div className={`basis-full self-center justify-center flex`}>
        <h1>{left}</h1>
      </div>
      {
        right ? <div className="basis-2/5 self-center justify-center h-full bg-red-800 flex rounded-r-xl">
          <h1 className="self-center">{right}</h1>
        </div> : null
      }
    </div >
  )
}

export default Header;