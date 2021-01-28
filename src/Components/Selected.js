import React from 'react'

const Selected = ({title, control, clear, selectedList, setClear, setFlag}) => {

    let newList = selectedList.map( range => {
        return(
            <div key={range} 
                onClick={() => {
                setClear([...clear, range]);
                setFlag(false);
                }} 
                style={{textAlign: 'center'}}
                className={`${clear.includes(range) ? 'active' : ''}`}
            >
                <p className="range" >{range}</p>
            </div>
        )
    })
    return(
        <div id="widget">
            <p>{title}
                <span id="control"
                    onClick={() => {
                        setFlag(false);
                        setClear(selectedList);
                    }}
                >{control}</span>
            </p>
            <div id="container" style={{backgroundColor: 'rgba(227, 237, 255, 0.877)'}}>
                {newList}
            </div>
        </div>
    )
}

export default Selected;