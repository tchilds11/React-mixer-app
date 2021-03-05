import { useParams } from "react-router-dom";
import Styled from "styled-components";

const Banner = Styled.h1`
font-size: 24px;
color: brown;
`;

const SubTitle = Styled.h1`
font-size: 20px;
color: black;
`;

const Ingredients = Styled.h1`
font-size: 20px;
color: black;
`;

const CocktailProfile = ({cocktails}) => {
    const { id } = useParams()
    console.log(cocktails)
    console.log(id)
    const cocktail = cocktails[id]
    return (
       <> 
        <Banner>{cocktail.strDrink}</Banner>
        <img alt="" src={cocktail.strDrinkThumb} width="300" height="300"></img>
        <SubTitle>Ingredients: {cocktail.strIngredient1}, {cocktail.strIngredient2}, {cocktail.strIngredient3}, {cocktail.strIngredient4}</SubTitle>
        <Ingredients>Instructions: {cocktail.strInstructions}</Ingredients>
        </>
    )
}

export default CocktailProfile;