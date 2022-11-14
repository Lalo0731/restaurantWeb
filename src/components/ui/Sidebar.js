import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="md:w-2/5 xl:w-1/5 bg-gray-800">
          <div className="p-6">
               <p className="uppercase text-white tracking-wide text-center font-bold">RestaurantApp</p>
               <p className="mt-3 text-gray-600">Administra tu Restaurant en las siguientes opciones:</p>

               <nav className="mt-10">
                    <NavLink 
                         className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" to="/" 
                         activeStyle={{ color: '#9198a4'}}
                         style={({ isActive }) => ({ color: isActive ? '#FCF800' : '#9198a4' })}
                    >Ordenes</NavLink>

                    <NavLink 
                         className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" to="/menu"
                         activeStyle={{ color: '#9198a4'}}
                         style={({ isActive }) => ({ color: isActive ? '#FCF800' : '#9198a4' })}
                    >Menú</NavLink>
                    
               </nav>
          </div>      
    </div>
  )
}

export default Sidebar
