import PropTypes from "prop-types";

function FormGroup (props) {
  return(
    <div className='form-group' style={{marginBottom: '20px'}}>
      <label htmlFor={props.htmlFor}>{props.label}</label>
      {props.children}
    </div>
  )
}

FormGroup.propTypes = {
  htmlFor: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node
};

export default FormGroup;