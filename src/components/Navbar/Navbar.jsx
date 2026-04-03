import './Navbar.css'

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView();
    }
  };

  return (
    <nav className="nav">
      <div className="nav__logo">Ben Parker</div>

      <ul className="nav__menu">
        {navItems.map((item) => (
          <li key={item.id}>
            <button onClick={() => scrollToSection(item.id)}>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;