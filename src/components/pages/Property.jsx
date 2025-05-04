import { useParams } from 'react-router-dom';

function Property() {
    const { id } = useParams();
    return <h1>Page de propriété avec l'ID: {id}</h1>;
}
export default Property;
