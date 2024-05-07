import NavbarItems from "./NavbarItems"

function Navbar() {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-4">
        <NavbarItems title="Trending" params='fetchTrending'/>
        <NavbarItems title='Top Rated' params= 'fetchTopRated'/>
    </div>
  )
}

export default Navbar