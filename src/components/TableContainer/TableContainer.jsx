import PropTypes from 'prop-types';
import Row from '../Row/Row';

const TableContainer = ({info}) => {



  return (
    <>
    <div className= {`w-full md:w-3/4 mx-auto mt-5 text-center grid grid-cols-1`}>
      
          {info.map(customer =>(
            <Row key={customer.id} customer={customer}/>
        ))}
        
    </div>
    
    </>
    
  )
}

TableContainer.propTypes = {
    info: PropTypes.array.isRequired
    
  }

export default TableContainer