import React from 'react'

const Navigation = ({onRouteChange, issignedin}) => {
    if (issignedin){
        return (
            <div>
                <nav style={{display:'flex', justifyContent:'flex-end'}}>
                    <p
                    onClick={() => onRouteChange('signin')} 
                    className='f3 link dim blank underline pa3 pointer'
                    >Sign Out</p>
                </nav>
                
            </div>
        )
    } else {
        return (
            <div>
                <nav style={{display:'flex', justifyContent:'flex-end'}}>
                    <p
                    onClick={() => onRouteChange('signin')} 
                    className='f3 link dim blank underline pa3 pointer'
                    >Sign In</p>
                    <p
                    onClick={() => onRouteChange('register')} 
                    className='f3 link dim blank underline pa3 pointer'
                    >Register</p>
                </nav>
                
            </div>
        )
    }
    
}

export default Navigation;
