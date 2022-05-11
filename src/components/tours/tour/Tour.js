


function Tour(props) {

    return (
        <>
            <div className='secion' style={{ padding: 20 }}>
                <h2>{props.city.name}</h2>
                <img className="imgSize" src={props.city.image} alt={props.city.name} />
                <br></br>
                <hr></hr>
            </div>
        </>
    )
}
export default Tour;


