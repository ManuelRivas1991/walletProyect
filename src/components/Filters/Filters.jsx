import PropTypes from 'prop-types';


const Filters = ({filterCategory, setFilterCategory, filterMonth, setFilterMonth, filterYear, setFilterYear}) => {

  return (
    <div className="select-none bg-white shadow-md rounded-md md:w-3/4 mx-auto mb-5 px-4 py-5 text-center  grid grid-cols-1 md:grid-cols-2 gap-6 text-xl font-bold">
       
        <label className='  font-bold '>Filter by category</label>
        <select
        className=' flex-1 text-center bg-gray-100 rounded-md cursor-pointer'
        value={filterCategory}
        onChange={e=>setFilterCategory(e.target.value)}
        >
            <option value="">-- Empty Category --</option>
            <option value="Incomes">Incomes</option>
            <option value="Savings">Savings</option>
            <option value="Food">Food</option>
            <option value="House">House</option>
            <option value="Expenses">Expenses</option>
            <option value="Leisure">Leisure</option>
            <option value="Health">Health</option>
            <option value="Subscriptions">Subscriptions</option>
        </select>

        <label className=' font-bold '>Filter by Month</label>
        <select
        className=' flex-1 text-center bg-gray-100 rounded-md cursor-pointer'
        value={filterMonth}
        onChange={e=>setFilterMonth(e.target.value)}
        >
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July </option>
            <option value="August">August </option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
        </select>
        <label className=' font-bold '>Filter by Year</label>

        <div className=' flex justify-around w-full  md:w-3/4 mx-auto bg-gray-100 rounded-md cursor-pointer'>
          <button type="button" onClick={()=>setFilterYear(filterYear-1)}> {"<"} </button>
          <span> {filterYear} </span>
          <button type="button" onClick={()=>setFilterYear(filterYear+1)}> {">"} </button>
        </div>

        
        
          
  
    </div>
  )
}

Filters.propTypes = {
  filterCategory: PropTypes.string.isRequired,
    setFilterCategory: PropTypes.func.isRequired,
    filterMonth: PropTypes.string.isRequired,
    setFilterMonth: PropTypes.func.isRequired,
    setFilterYear:PropTypes.func.isRequired,
    filterYear: PropTypes.number.isRequired
  }

export default Filters