import React from 'react'

const Available = ({title, control, selected, rangesList, setSelected, setFlag}) => {

    let newList = rangesList.map( range => {
        return(
            <div key={range} onClick={() => {
                setSelected([ ...selected, range]);
                setFlag(true);
                }} 
                className={`${selected.includes(range) ? 'active' : ''}`}
                style={{textAlign: 'center'}}>
                <p className="range" >{range}</p>
            </div>
        )
    })
    return(
        <div id="widget">
            <p>{title} <span id="control" onClick={() => {
                setFlag(true);
                setSelected(rangesList);
            }}>{control}</span></p>
            <div id="container" style={{backgroundColor: 'rgba(227, 237, 255, 0.377)'}}>
                {newList}
            </div>
        </div>
    )
}

export default Available;