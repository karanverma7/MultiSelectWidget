import React, {useState, useEffect} from 'react'
import Available from './Available'
import Selected from './Selected'
import Swap from '../Assets/Images/Swap.svg'
import '../Assets/Styles/Widget.css'

const mockData = ['0-24','25-99', '50-99', '100-249', '250-499', '500-999', '1000-4999', '5000-9999', '10000-49999', '50000-100000']

// const mockData2 = ['0-24','25-99', '50-99', '100-249', '250-499']

const Widget = () => {

    const [rangesList, setRangesList] = useState(mockData)
    const [selectedList, setSelectedList] = useState([])
    const [selected, setSelected] = useState([])
    const [clear, setClear] = useState([])
    const [flag, setFlag] = useState()

    const handleSwap = () => {
        if(flag === true){
            setSelectedList([...selectedList, ...selected])
            setRangesList(rangesList.filter(range => !selected.includes(range)))
            setSelected([])
        }
        else {
            setSelectedList(selectedList.filter(range => !clear.includes(range)))
            setRangesList([...rangesList, ...clear])
            setClear([])
        }
    }

    useEffect(() => {
        if(selectedList !== []){
            setRangesList(rangesList.filter(range => !selectedList.includes(range)))
        }
    }, [])

    return(
        <div id="app">
            <Available title="Available:" control="Select All" setFlag={setFlag}
                rangesList={rangesList} setSelected={setSelected} selected={selected}
            />
            <img src={Swap} onClick={handleSwap} alt="swap"/>
            <Selected title="Selected:" control="Clear All" selectedList={selectedList}
                clear={clear} setFlag={setFlag} setClear={setClear}
            />
        </div>
    )
}

export default Widget;