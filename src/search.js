import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import LocationInfo from './LocationInfo.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      locationResults : [],
      searchStr : '',
    };


    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearch(event) {

    this.setState({ searchStr: event.target.value });
    this.state.locationResults = [];

    //add locations to search results
    if( this.state.searchStr.length > 1){
      for(let i=0; i < LocationInfo.length; i++){
        for(let j=0; j< LocationInfo[i].KeyWords.length; j++){
          if( LocationInfo[i].KeyWords[j].toLowerCase().indexOf(this.state.searchStr.toLowerCase()) != -1){   
            //check if room is already in the result
            if( !this.state.locationResults.includes(LocationInfo[i].Location))
              this.state.locationResults.push(LocationInfo[i].Location);
          }
        }
      }
    }

  }

  handleSubmit(event) {
    event.preventDefault();
  }


  render() {
    
    return (
      
      <div>
        
        <form onSubmit={this.handleSubmit}>
          Search:
          <input type="text" value={this.state.searchStr} onChange={this.handleSearch} />
        </form>

        <div>
        {
          //based upon search result locations display the rooms and their description
          LocationInfo.map( (item) => {        
            for(let i=0; i < this.state.locationResults.length; i++){
              if(this.state.locationResults[i] == item.Location ){
                return(
                  <ul><li><b>{item.Location}</b><ul>
                  {
                    item.KeyWords.map( (subitem) => <li>{subitem}</li> ) 
                  }
                  </ul></li></ul>
                );  
              }
            }
          })
        }
 
        </div>

      </div>
      
    );
  }


}

render(<App />, document.getElementById('root'));