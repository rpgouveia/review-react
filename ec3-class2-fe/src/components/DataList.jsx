import "../styles/DataList.css"
function DataList(props){
    return (
        <>
            <div className="containerCard" onClick={() => {
                props.onClickCard(props.item)
            }}>
                Nome: {props.item.name}<br></br>
                Email: {props.item.email}<br></br>
                Phone: {props.item.phone}
            </div>
        </>
    )
}

export default DataList;