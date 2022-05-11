
// 



//17



import Tour from './tour/Tour';
import { Link } from 'react-router-dom';



function Tours(props) {
 //taking data from props  from home 
    return (
        <>
            {
                props.data.map(value => {

                    return (

                        <Link to={`/city/${value.id}`}>

                            <Tour key={value.id} city={value} />

                        </Link>

                    );
                })
            }
        </>
    )
}

export default Tours;
