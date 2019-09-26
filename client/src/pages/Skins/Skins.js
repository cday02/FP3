import React, { Component } from "react";
import API from "../../utils/API"
import SteamAPI from "../../utils/SteamAPI";
import axios from "axios";
import { SaveBtn } from "../../Form"
export default class Skins extends React.Component {

  state={
    posts: [],
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

 apiSearch(){
   axios
    .get(`http://api.steamapis.com/market/items/489940?api_key=b1eQml-g5_-9vAshjf0X-anQHAQ`)
    .then(res => {
      console.log(res.data.data.slice(408,))
      this.setState({posts: res.data.data.slice(408)})
    })
 }

 handleFormSubmit = event => {
    event.preventDefault();
    let id = event.target.id;
    let market_name = "";
    let border_color = "";
    let nameID = "";

    for(var key in this.state.posts) {
      console.log("key:" + this.state.posts[key].nameID);
      if(this.state.posts[key].nameID == id) {
        market_name = this.state.posts[key].market_name;
        nameID = this.state.posts[key].nameID;
        border_color = this.state.posts[key].border_color;
        break;
      }
    }

  console.log('adding item: ' + nameID)
  API.saveItem({
    marketname: market_name,
    rarity: border_color,
    nameid: nameID
})
     .then(res => alert(`${res.data.marketname} has been added to cart`))
     .catch(err => console.log(err));
  // event.target.hidden = true; 
 }
 
 componentDidMount(){ 
  this.apiSearch();
 }

 render(){
   const { posts } = this.state;
   const postList = posts.length ? (
     posts.map(post => {
       return(
         
         <div className="post card"
           style={{
             position: "flex",
             width:300,
                   }}
           key={post._id}>
            <img
              style={{width: 200, height: 150}}
              src={post.image}
              alt="this cannot display" />
            <div className="card-content">
            <SaveBtn
                 
               id={post.nameID}
               onClick={this.handleFormSubmit}
               hidden={false}
              >Add to Cart</SaveBtn>
             <div className="card-title">{post.market_name}</div>
             <p>Price: ${post.prices.mean}</p>
           </div> 
           
         </div>

       )
     }
     )
   ) : (
     <div className="center">Loading...</div>)
     return(
     <div className="post card">
       <h4 className="center">
         Available Skins
       </h4>
       {postList}
     </div>
    )
   
 }
}



