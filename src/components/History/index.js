import React,{useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux'

import { addHistory } from '../../features/counter/counterSlice'


const History = ({videos}) => {

    useEffect(() => {
            setHistory(videos)
        },[videos]
    );

    const histories = useSelector(state => state.counter.items)
    const dispatch = useDispatch();

    // [0].snippet.thumbnails.default.url
    const setHistory = (videos) => {
        if (videos.length !== 0) {
            console.log(videos[0].snippet.title)
            dispatch(addHistory(videos[0].snippet.thumbnails.high.url))
        }
    }

    const listItem = histories.map((img,i) => {
        console.log(img)
        return (
            <li><img src={img} alt="" /></li>
        )
    })


    return (
        <div>
            <ul>
                {listItem}
            </ul>
        </div>
    )
}

export default History