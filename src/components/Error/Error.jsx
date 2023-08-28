import PropTypes from 'prop-types';

const Error = ({children}) => {
  return (
    <div className=' text-center rounded-md bg-red-600 text-white  font-bold p-3 uppercase'>
        {children}
    </div>
  )
}

Error.propTypes = {
    children: PropTypes.array.isRequired
    
  }


export default Error