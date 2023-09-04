import PropTypes from "prop-types";

function NavbarItem(props) {

  const { referencia, titulo } = props;

  return (
    <li className='nav-item'>
    <a className='nav-link' href={referencia}>{titulo}</a>
  </li>
  )
}

NavbarItem.propTypes = {
  referencia: PropTypes.string,
  titulo: PropTypes.string
};

export default NavbarItem;