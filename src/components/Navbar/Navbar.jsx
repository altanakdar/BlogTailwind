

const Navbar = () => {
  return (
    <div className="bg-blue-50 mb-2">
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg">
                    BLOGS
                </div>
                <div className="block lg:hidden">
                <button class="text-white focus:outline-none">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar