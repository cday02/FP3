import React, { Component } from "react";
import API from "../../utils/API";
import { SaveBtn, DeleteBtn } from "../../Form";
import StripeCheckout from "react-stripe-checkout";

class Inventory extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    this.loadItems();
  }

  onToken = token => {
    fetch("/save-stripetoken", {
      method: "POST",
      body: JSON.stringify(token)
    }).then(response => {
      response.json().then(data => {
        alert("We are in business!");
      });
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    let id = event.target.id;
    let market_name = "";
    let border_color = "";
    let nameID = "";
    let image = "";
    let price = "";

    for (var key in this.state.items) {
      console.log("key:" + this.state.items[key].nameID);
      if (this.state.items[key].nameID === id) {
        market_name = this.state.items[key].market_name;
        nameID = this.state.items[key].nameID;
        border_color = this.state.items[key].border_color;
        image = this.state.items[key].image;
        price = this.state.items[key].prices.mean;
        break;
      }
    }

    console.log("removing item: " + nameID);
    API.deleteItem({
      marketname: market_name,
      rarity: border_color,
      nameid: nameID,
      image: image
    });
  };

  loadItems = () => {
    API.getItems()
      .then(res =>
        this.setState({
          items: res.data,
          marketname: "",
          rarity: "",
          nameid: "",
          price: ""
        })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { items } = this.state;
    const itemList = items.length ? (
      items.map(item => {
        return (
          <div
            className="post card"
            style={{
              position: "flex",
              width: 300
            }}
            key={item._id}
          >
            <img
              style={{ width: 200, height: 150, margin: "20px" }}
              src={item.image}
              alt="this cannot display"
            />
            <div className="card-content">
              {/* <DeleteBtn
                style={{ margin: "auto", width: "50%" }}
                id={item.nameID}
                onClick={this.handleFormSubmit}
                hidden={false}
              >
                Remove from Cart
              </DeleteBtn> */}
              <div className="card-title" style={{ textAlign: "center" }}>
                {item.marketname}
              </div>
              <div style={{ textAlign: "center" }} className="price-title">
                ${item.price}
              </div>
            </div>
            {console.log(this.state.items)}
          </div>
        );
      })
    ) : (
      <div className="center">Loading...</div>
    );
    return (
      <div className="post card">
        <h4 className="center">Your Cart</h4>
        {itemList}
        <StripeCheckout
          token={this.onToken}
          stripeKey="pk_test_BnWgdp4EtVIWDcp5ai5gtGK400qUA8bdXu"
          currency="USD"
          amount={items.price}
        ></StripeCheckout>
      </div>
    );
  }
}

export default Inventory;
