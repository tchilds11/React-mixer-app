import { Link } from "react-router-dom";
import Styled from "styled-components";

const Title = Styled.h1`
font-size: 48px;
color: black;
`;


const CocktailList = ({cocktails}) => {
    console.log("This is the results: ", cocktails);
        
    
    return (
        
        <>
            <Title>Cocktail List</Title>
                {cocktails.map((cocktail, index) => (
                    <Link to={`/cocktail/${index}`}>
                    <h1 key={index}>{cocktail.strDrink}</h1>
                    </Link>

                )        
    )}   
        </>
    )
}

export default CocktailList;
