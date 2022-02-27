import React, { Profiler } from 'react'
import Card from './Card'

class CardList extends React.Component {
    render () {
        const cardListArray = this.props.cardsArr; // = [] = 10
        return(
            <div>
                {cardListArray.map((cardObject) => <Card singleCardObject={cardObject} />)}
            </div>
        )
    }
};

export default CardList



































// const CardList = (props) => (
//     <div>
//         <Card {...testData[0]}/>
//         <Card {...testData[1]} />
//         <Card {...testData[2]} />
//     </div>
// )