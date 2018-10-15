import React, { Component } from 'react'
import axios from 'axios'
import Header from '../Header/Header';
const unirest = require('unirest');




export default class Loader extends Component {
  componentDidMount() {
    unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?diet=vegetarian&excludeIngredients=coconut&intolerances=egg%2C+gluten&number=10&offset=0&query=burger&type=main+course")
    .header("X-Mashape-Key", "ZxyamyfX5XmshMOdvuDZLjjA7PvTp1o9ngQjsn21LtXRIRQWQn")
    .header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
    .end(function (result) {
      console.log(result.status, result.headers, result.body );
    });
}
render(){
    return(
        <div/>
    )
}
//   return(
//     rapidApiAxios,
//     rapidApiHeaders
//   )
}










// const RapidAPI = new require('rapidapi-connect');
// const rapid = new RapidAPI('cy-bar_5bc0cf26e4b02d6cfa6a9f3e', '/connect/auth/cy-bar_5bc0cf26e4b02d6cfa6a9f3e');

// unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/menuItems/search?query=small+plates&offset=0&number=10&minCalories=0&maxCalories=5000&minProtein=0&maxProtein=100&minFat=0&maxFat=100&minCarbs=0&maxCarbs=100")
// .header("X-Mashape-Key", "d4EtM4j2OsmshKo0N2HxygxHCTQcp16QWM1jsnX4d7BzzWSvAN")
// .header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });

// rapid.call('PackageName', 'FunctionName', { 
// 	'ParameterKey1': 'ParameterValue1',
// 	'ParameterKey2': 'ParameterValue2'
// }).on('success', (payload)=>{
// 	 /*YOUR CODE GOES HERE*/ 
// }).on('error', (payload)=>{
// 	 /*YOUR CODE GOES HERE*/ 
// });

// // const Loader = props =>(
    
// // )

