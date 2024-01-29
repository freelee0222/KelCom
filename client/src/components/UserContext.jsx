import React, { createContext, useState, useContext, useEffect } from "react"

const UserContext = createContext()
export const useUser = () => useContext(UserContext)

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        if(user)  return
        setUser(JSON.parse(localStorage.getItem('user')))
    }, [])

    useEffect(() => {
        if(!user){
            localStorage.removeItem('user')
        } else {
          localStorage.setItem('user', JSON.stringify(user))
        }
    }, [user])


    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider