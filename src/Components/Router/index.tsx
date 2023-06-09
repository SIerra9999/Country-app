import React from 'react'

const Router = ({path,Component} : {path : string , Component : React.FC}) => {

    const [currentPath,setCurrentPath] = React.useState(window.location.pathname)
    return  path === currentPath ? <Component/> : null
  
}

export default Router