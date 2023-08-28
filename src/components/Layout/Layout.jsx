import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation()

  return (
    <div className=" md:flex md:min-h-screen">
      <aside className="md:w-1/6 bg-gray-900 px-5 py-10">
        <h2 className=" text-4xl font-black text-center text-white">Cost Control</h2>
        <nav className=" mt-10 text-center">

          <Link className={`
          ${location.pathname === '/' ? 'text-emerald-600 border border-emerald-500 rounded-md' : 'text-white'}
          text-2xl block mt-2 py-2 hover:text-emerald-600
          `} 
          to="/">CRM - Customers</Link>

          <Link className={`
          ${location.pathname === '/info/new' ? 'text-emerald-600 border border-emerald-500 rounded-md' : 'text-white'}
          text-2xl block mt-2 py-2 hover:text-emerald-600
          `}  
          to="/info/new">New - Customer</Link>

          <Link className={`
          ${location.pathname === '/expense/planner' ? 'text-emerald-600 border border-emerald-500 rounded-md' : 'text-white'}
          text-2xl block mt-2 py-2 hover:text-emerald-600
          `}  
          to="/expense/planner">Expense Planner</Link>

        </nav>
      </aside>

      <main className="md:w-5/6 py-5 px-3 md:p-10 md:h-screen overflow-scroll bg-gray-100">
        <Outlet/>
      </main>
        
    </div>
  )
}

export default Layout