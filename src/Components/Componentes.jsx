
const Componentes = props => {
        return (
        <>
            <h1>{props.lastName} {props.firstName}</h1>
            <p>Age: {props.Age}</p>
            <p>{props.haircolor}</p>
        </>
        );
    }
 
export default Componentes;