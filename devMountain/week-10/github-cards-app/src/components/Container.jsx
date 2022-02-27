import React from 'react';
// import Card from './Card'
import CardList from './CardList';
import Form from './Form'

const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
  ]; // test data json object

class Container extends React.Component {
    // create state value that is an array of cards
    // state = testData
    state = {
        newCardsArray: testData
    }
    render () {
        return(
            <div>
                <Form />
                <CardList cardsArr={this.state.newCardsArray} />
            </div>
        )
    }

}

// const Container = () => {
//     const testData = [
//         {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
//         {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
//         {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
//       ]; // array of card objects
//     return (
//         <div>
//             <Form />
//             {/* CardsList, takes in an array called cardsArr*/}
//             <CardList cardsArr={testData}/> 
//         </div>
//     )
// }

export default Container;