function TourDetails(props) {

    const [showMore, setShowMore] = useState(false);

    let { id } = useParams();

    let dataFilter = props.data.filter(element => element.id === id);

    return (

        <div>
            <Header />

            <br></br>
            <br></br>
            <br></br>
            <br></br>


            <div className="Details">
                <div>
                    <h3>{dataFilter[0].name}</h3>
                    <img src={dataFilter[0].image} style={{ width: "350px" }} />
                </div>

                <br></br>

                <div >
                    <h4 className="price">


                        {`Price: ${dataFilter[0].price} $`}</h4>

                    <br></br>

                    <p>
                        {showMore ? dataFilter[0].info : `${dataFilter[0].info.substring(0, 200)}...`}

                        <button className="btn"
                            onClick={() => setShowMore(!showMore)}>

                            {showMore ? "Show less" : "Show more"}
                        </button>
                    </p>

                </div>

            </div>

            <br></br>
            <br></br>

            <Footer />

        </div>
    );
}

export default TourDetails;