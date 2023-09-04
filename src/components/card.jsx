import PropTypes from "prop-types";

function Card (props) {
  const title = props.title;

  return (
    <div className="card mb-3">
      <h3 className="card-header">{title}</h3>
        <div className="card-body">
          {props.children}
        </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default Card;