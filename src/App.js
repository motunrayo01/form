import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

 class App extends Component {
     constructor(){
        super()
        this.state={
          number:0,
          num: 0,
          nums: 0,
          numb: 0
        }
      }
      like=()=>{
        this.setState({
          number:this.state.number +1,
         
        })
      }
      liked=()=>{
        this.setState({
          num:this.state.num +1,
         
        })
      }
      likes=()=>{
        this.setState({
          nums:this.state.nums +1,
         
        })
      }
      click=()=>{
        this.setState({
          numb:this.state.numb +1,
         
        })
      }
     render() { 
         return ( 
            <div>
               
            <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">
                <img src="https://res.cloudinary.com/morayo/image/upload/v1598392767/ig_dnvuz3.jpg" style=
                {{width: "5rem", height:"5rem"}} alt=""/> Instagram

            </a>
            </nav>
            <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">
               Stories

            </a>
            </nav>
            <div className="container">
            <div className="row">
                <div className="col-3">
                <div className="container">
                <div className="card"  style={{width: "15rem",  height: "30rem"}}>
                <img src="https://res.cloudinary.com/morayo/image/upload/v1598391832/IMG_20200706_154708_9_t90hax.jpg" 
               style={{height: "20rem"}} className="card-img-top"  alt="..."/>
                <div className="card-body">
                    <p className="card-text">smile</p>
                    <button className="btn btn-primary"onClick={this.like}> like</button>
                    <h2>{this.state.number}</h2>
                   
                </div>
                </div>
                </div>
            </div>
           
            <div className="col-3">
                <div className="container">
                <div className="card" style={{width: "15rem",  height: "30rem"}}>
                <img src="https://res.cloudinary.com/morayo/image/upload/v1598391834/IMG_20200809_140552_6_qmawve.jpg" 
               style={{height: "20rem"}} className="card-img-top" alt="..."/>
                <div className="card-body">
                <p className="card-text">smile</p>
                    <button className="btn btn-primary"onClick={this.liked}> like</button>
                    <h2>{this.state.num}</h2>
                </div>
                </div>
                </div>
            </div>
            <div className="col-3">
                <div className="container">
                <div className="card"  style={{width: "15rem",  height: "30rem"}}>
                <img src="https://res.cloudinary.com/morayo/image/upload/v1598391833/IMG_20200706_154712_7_pqjjqb.jpg" 
               style={{ height: "20rem"}} className="card-img-top" alt="..."/>
                <div className="card-body">
                <p className="card-text">smile</p>
                    <button className="btn btn-primary"onClick={this.likes}> like</button>
                    <h2>{this.state.nums}</h2>
                </div>
                </div>
                </div>
            </div>
            <div className="col-3">
                <div className="container">
                <div className="card" style={{width: "15rem", height: "30rem"}}>
                <img src="https://res.cloudinary.com/morayo/image/upload/v1598391834/IMG_20200823_114839_5_xxprhg.jpg" 
               style={{ height: "20rem"}} className="card-img-top"  alt="..."/>
                <div className="card-body">
                <p className="card-text">smile</p>
                    <button className="btn btn-primary"onClick={this.click}> like</button>
                    <h2>{this.state.numb}</h2>
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
   
          );
     }
 }
export default App;