import RandomJoke from "../components/RandomJoke/RandomJoke"
import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux';
import { getJoke } from "../redux/slices/jokeSlice";
const RandomView = () => {
    const categories = ["animal", "career", "celebrity", "dev", "explicit", "fashion", "food", "history", "money", "movie", "music", "political", "religion", "science", "sport", "travel"]
    const [category, setCategory] = useState("All");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getJoke(category))
    }, [category])

    return (
        <div>
            <select onChange={(e) => setCategory(e.target.value)} name="jokeCat" id="jokeCat">
                <option value="All" selected>All</option>
                {
                    categories.map((cat, index) => <option key={index} value={cat}>{cat}</option>)
                }
            </select>
            <RandomJoke />
        </div>
    )
}


export default RandomView