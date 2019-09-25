import React, { Component } from "react";
import API from "../../utils/API"
import Toolbar from "../../components/Toolbar"

class Inventory extends Component {
state={
        items:[],
    }
componentDidMount() {
    this.loadItems()
}

  // Loads all Items  and sets them to this.state.items
  loadItems = () => {
    API.getItems()
      .then(res =>
        this.setState({ items: res.data })
      )
      .catch(err => console.log(err));
  };
  
  render(){
    const {type, rarity}=this.state.items
    return(
    <>
    <h1>test</h1>
    </>
    )
  }
}
export default Inventory