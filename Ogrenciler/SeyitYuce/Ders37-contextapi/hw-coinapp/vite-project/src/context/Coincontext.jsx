import { createContext, useEffect, useState, useContext } from "react";

const Coincontext = createContext();
export const CoinProvider = ({ children }) => {
    const [allCoins, setAllCoins] = useState()

    // useEffect(()=>{},[])
    const values = {
        allCoins, setAllCoins
    }
    return (<Coincontext.Provider value={values}>{children}</Coincontext.Provider>)
}

export const useCoin = () => useContext(Coincontext)