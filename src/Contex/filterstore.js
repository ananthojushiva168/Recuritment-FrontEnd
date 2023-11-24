import React, { createContext, useState } from 'react'

export const Filterstore = createContext();
export const Globalstore = ( { children } ) => {
  const [similar, setSimilar] = useState()
  const [similarlocation, setSimilarlocation] = useState()
  // console.log(similar)
  return ( <Filterstore.Provider value={{ similar, setSimilar, similarlocation, setSimilarlocation }}>
    {children}
  </Filterstore.Provider>
  )
}

