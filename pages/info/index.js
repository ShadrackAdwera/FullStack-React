import { Fragment, useState } from 'react';
import path from 'path';
import fs from 'fs';

const Info = props => {
    const [currentInfo, setCurrentInfo] = useState();

    const fetchInfoDetails = async(id) => {
        try {
            const response = await fetch(`/api/${id}`);
            const responseData = await response.json();
            if(!response.ok) {
                throw new Error('An error occured');
            }
            setCurrentInfo(responseData.info);
        } catch (error) {
            
        }
    }

return <Fragment>
    {currentInfo && <h5>{currentInfo.email}</h5>}
    <ul>
    {props.data.map(comment=><li key={comment.id}>
        <div style={{display:'flex', flexDirection:'column'}}>
            <h5>{`Name: ${comment.name} - ${comment.feedbacc}`}</h5>
            <button onClick={()=>fetchInfoDetails(comment.id)} style={{maxWidth:'10rem'}}>View Details</button>
        </div>
    </li>)}
</ul>
</Fragment>
}

export default Info;

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'data', 'info.json');
    const strigifiedData = fs.readFileSync(filePath);
    const data = JSON.parse(strigifiedData);
    return { props: { data: data }, revalidate: 10 }
}