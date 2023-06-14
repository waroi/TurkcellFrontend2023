import { createContext, useEffect, useState, useContext } from "react";
import { getAllCoins } from "../service/api";

const Coincontext = createContext();
export const CoinProvider = ({ children }) => {
    const [allCoins, setAllCoins] = useState([])
    useEffect(() => {
        getAllCoins().then((data) => setAllCoins(data));
    }, []);
    const values = {
        allCoins, setAllCoins
    }
    return (<Coincontext.Provider value={values}>{children}</Coincontext.Provider>)
}

export const useCoin = () => useContext(Coincontext)