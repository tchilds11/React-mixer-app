import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CocktailList from "./components/CocktailList";
import CocktailProfile from "./components/CocktailProfile";
import './App.css';


class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      cocktails: []
  };
}


  async componentDidMount () {
    const url =  "https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php";
    const cocktailData = await fetch(url)
      .then(response => response.json());
    this.setState({cocktails:cocktailData.drinks})
}

  render() {
    const { cocktails } = this.state;
    return (
        <div className="App" >
          <Router>
            <Route exact path="/">
            {cocktails.length !== 0 ?
              <CocktailList cocktails={cocktails}/> :
              <h2>Loading Cocktail List...</h2>
          }    
            </Route>
            <Route path="/cocktail/:id">
            {cocktails.length !== 0 ?
            <CocktailProfile cocktails={cocktails}/> :
            <h3>Loading Cocktails...</h3>
          }
            </Route>
          </Router>  
        </div>
  );
}
}
export default App;
