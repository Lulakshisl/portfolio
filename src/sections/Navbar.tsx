const Navbar = () => {
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']
  return (
    <nav className="fixed top-0 w-full bg-[#0a0a0f]/90 backdrop-blur-sm z-50 px-8 py-4 flex justify-between items-center border-b border-white/10">
      <span className="text-white font-bold text-xl">Portfolio</span>
      <ul className="flex gap-8">
        {navItems.map(item => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-purple-400 transition-colors">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Navbar
