import React from 'react';
import CompanyCard from './CompanyCard';

class DisplaySingleList extends React.Component{
  render() {
    const {addCard, updateCard, deleteCard, createBlank} = this.props;
    return (
      <div>
          <h1>Display Single List</h1>
         <CompanyCard addCard={addCard} updateCard={updateCard} deleteCard={deleteCard} createblank={createBlank}/>
      </div>
    )
  }
}

export default DisplaySingleList;