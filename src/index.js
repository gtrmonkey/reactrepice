import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import logo from './assets/cutlery-circle.png';

const Header = (props) => (
    <div className="header">
        <img src={logo} alt="Cutlery"></img>
        <h1 className ='headerTitle'>Recipe App</h1>
    </div>
);
const DirectoryView = (props) => (
    <div>
        <SearchForm searchVal={props.searchVal} handleChange={props.handleChange} searchrecipe={props.searchrecipe} />
        {props.recipes.map(recipe => <RecipeCard clickHandler={props.recipeHandler} name={recipe.name} />)}
    </div>
);

const SearchForm = (props) => (
    <form>
        <input value={props.searchVal} onChange={props.handleChange} />
        <button onClick={props.searchrecipe}>Search</button>
    </form>
);
const DetailView = (props) => (
    
    // <div style ={{"margin-top": "20px","margin-left":"300px","border-color":"black","border-style":"soild","border-width": "1"}}>
    <div>
        <p style ={{"font-weight": "bold"}}>{props.recipe.name}</p>
        <div className="recipe-details">
            <ol className="ingredients">
                {props.recipe.ingredients.map((ingredients, i) => <li key={i}>{ingredients}</li>)}
            </ol>
            <ol className="instructions">
                {props.recipe.instructions.map((instructions, i) => <ol key={i}>{instructions}</ol>)}
            </ol>
        </div>
    </div>
);


const RecipeCard = (props) => (
    <div className="recipecard">

        <p id={props.name} onClick={props.clickHandler}>{props.name}</p>
    </div>
);

class App extends React.Component {
    state = {
        recipes: [
            {
                id: 1,
                name: 'Turkey Mayhem',
                ingredients: ['Turkey', 'Mustard', 'Greens', 'Celery', 'Potato'],
                instructions: ['Pre-heat over to 350 degrees', 'Tickle the turkey', 'Cut some celery']
            },
            {
                id: 2,
                name: 'Mac and Cheese',
                ingredients: ['Mac', 'Cheese'],
                instructions: ['Put the mac in the cheese', 'Swish it around', 'Bake for 15 minutes at 350 degrees']
            },
            {
                id: 3,
                name: 'Spanakopita',
                ingredients: ['Olive oil', 'Onion', 'Garlic', 'Spinach'],
                instructions: ['Put the stuff in a bowl', 'Cook the stuff']
            },
            {
                id: 4,
                name: 'Vasilopita',
                ingredients: ['Flower', 'Baking Soda', 'Butter', 'Sugar', 'Eggs'],
                instructions: ['Throw everything in the air and hope it comes together', 'Knead the bread', 'Show the bread some love', 'Bake it at 400 degrees']
            },
            {
                id: 5,
                name: 'Ribeye Grub',
                ingredients: ['Ribeye Steak', 'JEff Gordon Dry Rub', 'Butter'],
                instructions: ['Poke Ribeye Steak', 'Apply Dry Rub', 'Cook with butter on top', 'cook until steak is nice and pink']
            },
            {
                id: 6,
                name: 'Cheese Royal',
                ingredients: ['Mexican Cheese', 'Guda Cheese', 'Goat Cheese', 'Feta Cheese', 'Eggs'],
                instructions: ['Heat oven 350', 'Insert all Cheese', 'Cook till melt', 'Stir while cooling']
            },
            {
                id: 7,
                name: 'Grill Cheese',
                ingredients: ['American Cheese', 'Swiss Cheese', 'Butter', 'Garlic Salt', 'Bread'],
                instructions: ['Toast Slices of Bread Till Golden and Apply Butter ', 'Apply Cheese to bread while hot', 'Sprinkle Garlic Salt', 'Press to pan']
            },
            {
                id: 8,
                name: 'Carpise ',
                ingredients: ['Tomato', 'Olive oil', 'Brown seasoning', 'Lettue', 'Bread', 'Moz Cheese'],
                instructions: ['Toast Bread', 'Put lettue Tomato and moz cheese on bread', 'Mix Olive oil and brown seasoning', 'Apply on top off bread and toppings']
            },
            {
                id: 9,
                name: 'Chef Pasta Broke method',
                ingredients: ['Ramen', 'Chef Ravoli Can', 'ketup', 'Sugar'],
                instructions: ['Throw everything in the pot', 'Stir', 'heat till warm', 'hope for the best']
            },
            {
                id: 10,
                name: 'Hamburger Royal',
                ingredients: ['Hamburger Meat', 'meat', 'Cheese american', 'bread', 'Eggs'],
                instructions: ['Cook HamBurger Meat', 'Apply cooked meat bread ', 'Cook eggs with cheese', 'apply to burger meat and bread']
            },
            {
                id: 11,
                name: 'Moz Chicken Fried',
                ingredients: ['Flower', 'Chicken', 'Salt and Pepper', 'Moz Cheese'],
                instructions: ['Bread the Chicken', 'Fry it', 'Put Moz Cheese on top and let it melt', 'let cool for 3 mins']
            },
            {
                id: 12,
                name: 'Chicken Wings Super Sayien',
                ingredients: ['Chicken Wings', 'Texas Pete'],
                instructions: ['Fry Chicken Wings', 'Put into bowl', 'Apply Texas Pete to bowl with lid', 'Shake in Bowl']
            },
            {
                id: 13,
                name: 'Burrito De Nacho',
                ingredients: ['Flower torita', 'Mexican Cheese', 'Doritios', ],
                instructions: ['Crush Doritios', 'Heat Torita with Cheese', 'Mix Crush Doritos with with cheese', 'Roll like a Burrito']
            },
            {
                id: 14,
                name: 'Shrimp Pizza',
                ingredients: ['Pizza Bread', 'Red Sauce', 'Cheese Moz', 'Shrimp'],
                instructions: ['Pan out pizza' , 'Apply Topping Red sauce, Cheese and peeled Shrimp', 'Cook at 425 for 17 mins', 'let cool for 5 mins']
            },
            {
                id: 15,
                name: 'Da Dude Chili',
                ingredients: ['Beans', 'Da Magic Mix', 'rice', 'bacon', 'Eggs'],
                instructions: ['Cook Beans and the Da MAgic Mix togheter', 'Cook Bacon and Eggs together', 'Put rice in bowl', 'Then toss them all together']
            },
            {
                id: 16,
                name: 'Grateful Phish',
                ingredients: ['Sea Bass', 'Jerry Seasoning', 'Trey Butter'],
                instructions: ['Lather Sea Bass in Trey Butter', 'Then poke with fork and apply Jerry Seasoning', 'Cook until the Seabass starts jammin with smells']
            },

        ],
        searchVal: '',
        selectedRecipes: '',
        chosenRecipe: {
            id: '',
            name: '',
            ingredients: [],
            instructions: []
        },
        filteredRecipes: [],
    }
    chooseRecipe = (event) => {
        const nameclick = event.target.id
        console.log(nameclick);
        this.setState({ chosenRecipe: this.state.recipes.find(recipe => recipe.name === nameclick) })
    }

    selectRecipes = (event) => {
        event.preventDefault()
        
        // this.setState({ selectedRecipes: this.state.recipes.filter(recipe => recipe.name.toLowerCase().includes(this.state.searchVal.toLowerCase())) });
        const recipeMatch = this.state.recipes.filter(recipe => recipe.name.toLowerCase().includes(this.state.searchVal.toLowerCase()))
        this.setState({ filteredRecipes: recipeMatch });
        console.log(recipeMatch);
    }

    handleChange = (event) => {
        this.setState({ searchVal: event.target.value });
    };

    render() {
        return (
            <div>
                <Header />
                <div className="content">
                    <div>
                        <DirectoryView
                            recipes={this.state.filteredRecipes}
                            searchVal={this.state.searchVal}
                            handleChange={this.handleChange}
                            selectedRecipes={this.state.selectedRecipes}
                            searchrecipe={this.selectRecipes}
                            recipeHandler={this.chooseRecipe}


                        />
                    </div>

                    <div>
                        <div className="detailview">
                            <DetailView recipe={this.state.chosenRecipe} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));