
import data from '../../data/db.json'

function Tours(props){
    return (
        <>
          {
            data.map(element=>{
              return(
                <div>
                    <h3> {element.name} </h3>
                    <br></br>
                    <img src={element.image} alt="Picture"/>
                </div>
              );
            })
          }
        </>
      );
}

export default Tours;