import "./dataComponent.css"

const DataComponent = ({ index, text, className }) => {
    return (
        <div className="component-wrapper"> 
            <div className="index-wrapper">
                <p>{index}</p>
            </div>
            <p className="data-text">{text}</p>
        </div>
    )
}

export default DataComponent