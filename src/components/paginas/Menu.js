import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../../firebase';

import Platillo from '../ui/Platillo';

const Menu = () => {

     const [platillos, guardarPlatillos] = useState([]);

     const { firebase } = useContext(FirebaseContext);

     useEffect( () =>{
          const obtenerPlatillo = () =>{
               firebase.db.collection('productos').onSnapshot(manejarSnapshot);
               
          }
          obtenerPlatillo();
     }, []);

     // Snapshot nos permite utilizar la base de datos en tiempo real de firestore
     function manejarSnapshot(snapshot){
          const platillos = snapshot.docs.map(doc => {
               return{
                    id: doc.id,
                    ...doc.data()
               }
          });

          //almacenar los resultados eb el state
          guardarPlatillos(platillos);
     }

  return (
     <>
          <h1 className="text-3xl font-light mb-4">Menú</h1>
          <Link to="/nuevo-platillo" className="bg-blue-800 hover:bg-blue-700 inline-block mb-5 p-2 text-white uppercase font-bold">
               Agregar Platillo
          </Link>

          {platillos.map(platillo => (
               <Platillo
                    key={platillo.id}
                    platillo={platillo}
               />
          ))}
     </>
  )
}

export default Menu
