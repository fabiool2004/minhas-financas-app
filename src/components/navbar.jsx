import NavbarItem from "./navbarItem";


function Navbar() {
  return (
    <div className='navbar navbar-expand-lg fixed-top navbar-dark bg-primary'>
      <div className='container'>
        <a href='http://bootswatch.com/' className='navbar-brand'>Minhas Finanças</a>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive' 
          aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'/>
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav'>
            <NavbarItem referencia='/' titulo='Home'/>
            <NavbarItem referencia='cadastro-usuario' titulo='Usuários'/>
            <NavbarItem referencia='lancamentos' titulo='Lançamentos'/>
            <NavbarItem referencia='login' titulo='Login'/>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default Navbar;