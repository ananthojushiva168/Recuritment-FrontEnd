import React, { useContext } from 'react'
import { Filterstore } from '../../../Contex/filterstore'


const Similarprofiles = () => {
  const { similar, similarlocation } = useContext( Filterstore )
  console.log( similar )
  return (

    <div className='similarprofilecontainer'>
      {
        similar === undefined ? "" :
          similar.map( ( item, id ) => {
            return (
              <div className='mainprofilecontainer'>
                <div>
                  <img src='' alt='' />
                </div>
                <div className='nameandrole'>
                  <h2>
                    Full Name:{item.name}
                  </h2>
                  <h3>Developer:{item.role}</h3>
                </div>


              </div> )
          } )
      }  {
        similarlocation === undefined ? "" :
          similarlocation.map( ( item, id ) => {
            return (
              <div className='mainprofilecontainer'>
                <div>
                  <img src='' alt='' />
                </div>
                <div className='nameandrole'>
                  <h2>
                    Full Name:{item.name}
                  </h2>
                  <h3>Developer:{item.role}</h3>
                </div>


              </div> )
          } )
      }
    </div>
  )

}

export default Similarprofiles