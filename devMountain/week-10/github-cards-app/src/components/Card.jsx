import React from 'react';

const Card = ({ singleCardObject }) => {
  const cardOject = singleCardObject;
  return (
    <div className="github-profile" style={{margin: '1rem'}}>
      <img src={cardOject.avatar_url} />
      <div className="info" style ={{display: 'inline-block', marginLeft: 10}}>
        <div className="name" style={{fontSize: '125%'}}>{cardOject.name}</div>
          <div className="company">{cardOject.company}</div>
      </div>
    </div>
  )
}
  
export default Card;


































// class Card extends React.Component {
//     render() {
//       const profile = this.props;
//       return (
//         <div className="github-profile" style={{margin: '1rem'}}>
//           <img src={profile.avatar_url} />
//           <div className="info" style ={{display: 'inline-block', marginLeft: 10}}>
//             <div className="name" style={{fontSize: '125%'}}>{profile.name}</div>
//             <div className="company">{profile.company}</div>
//           </div>
//         </div>
//       );
//     }
//   }