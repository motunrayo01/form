import React, {Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Form extends Component {
    constructor(){
        super()
        this.state={
           foreName:'',
            surname:'',
            email: '',
            address: '',
            selectedOption: '',
            option:'',
            selected: '',
            answer: '',
            options: '',
            new: '',
        }
    }
            Name=(event)=>{
                this.setState({
                foreName:event.target.value,
                
                })
            }
            lastName=(event)=>{
                this.setState({
                surname:event.target.value,
                
                })
            }
            mail=(event)=>{
                this.setState({
                email:event.target.value,
                
                })
            }
            myAddress=(event)=>{
                this.setState({
                address:event.target.value,
                
                })
            }
            newAddress=(event)=>{
                this.setState({
                new:event.target.value,
                
                })
            }
            onValueChange=(event)=> {
                this.setState({
                  selectedOption: event.target.value,
                });
              }
              onValue=(event)=> {
                this.setState({
                  selected: event.target.value,
                });
              }
              Value=(event)=> {
                this.setState({
                  answer: event.target.value,
                });
              }
              Change=(event)=> {
                this.setState({
                  option: event.target.value,
                });
              }
              age=(event)=> {
                this.setState({
                  options: event.target.value,
                });
              }
           
    render() { 
        return ( 
            <div>
                 <nav className="navbar navbar-light bg-light">
            <h2 className="navbar-brand">
                <img src="https://res.cloudinary.com/morayo/image/upload/v1598448200/inec_rpxkc0.jpg" style=
                {{width: "5rem", height:"5rem", Float:"left",}} alt=""/> Register to vote

            </h2>
               
            </nav>
               
                <form className="container-fluid" action="https://formspree.io/xgenjrzn"
                    method="POST"
                    enctype="multipart/form-data">
                <nav className="navbar justify-content-center">
                <fieldset className="one ">
                    <h3> Your name and address</h3>
                    <option> ForeName(s)</option>  
                <input type="text"
                    placeholder="forename" name="firstname"
                    onChange={this.Name}
                    className="form-group form-control"
                    value={this.state.foreName} required="required"
                /> <br/> <br/>
                    <option> Surname</option> 
                <input type="text"
                    placeholder="surname" name="surname"
                    onChange={this.lastName}
                    className="form-group form-control"
                    value={this.state.surname} required="required"
                /> <br/>  <br/>

                    <option> Email</option> 
                <input type="email"
                    placeholder="example@gmail.com" name="mail"
                    onChange={this.mail}
                    className="form-group form-control"
                    value={this.state.email} required="required"
                /> <br/>  <br/>
                <option> Your Address</option>  
                <input type="text" name="address"
                    onChange={this.myAddress}
                    className="form-group form-control"
                    value={this.state.address} required="required"
                /> <br/>
                    <p> Do you live at another address</p>
                    <label>
                <input type="radio" onChange={this.onValueChange}
                     className="rating" value="Yes" required="required" name="checkbox"
                    checked={this.state.selectedOption === "Yes"}

                />
                    Yes
                    </label>
                    <label>
                <input type="radio" onChange={this.onValueChange}
                    className="rating" value="No" required="required" name="checkbox"
                    checked={this.state.selectedOption === "No"}
                />
                    No
                    </label>
                    <div>
                        Selected option is : {this.state.selectedOption}
                    </div>
                </fieldset>
                <fieldset className="two">
                    <h3> Changed your name in the last 12 months?</h3>
                    <label>
                <input type="radio" onChange={this.Value}
                    className="rating" value="Yes" required="required"name="checkbox1"
                    checked={this.state.answer === "Yes"}
                />
                    Yes
                    </label>
                    <label>
                <input type="radio" onChange={this.Value} 
                     className="rating" value="No" required="required" name="checkbox1"
                     checked={this.state.answer === "No"}
                />
                    No
                    </label> 
                    <div>
                        Selected option is : {this.state.answer}
                    </div> 
                   <br/> <br/>
                    <p> If yes, please give us your previous name</p> 
                <input type="text"
                    onChange={this.surname}
                    className="form-group form-control"
                    value={this.state.username}
                /> <br/>  <br/>
                    <p> Please tell us the date you changed your name (MM DD YYYY)</p> 
                <input type="date"
                    
                    className="form-group form-control"
                   
                /> <br/>
                    <h2> Moved in the last 12 Months?</h2>
                   
                    <label>
                <input type="radio"  onChange={this.onValue}
                     className="rating" value="Yes" required="required" name="checkbox2"
                     checked={this.state.selected === "Yes"}
                />
                    Yes
                    </label>
                    <label>
                    <input type="radio"  onChange={this.onValue} 
                    className="rating" value="No" required="required" name="checkbox2"
                    checked={this.state.selected === "No"}
                    />
                    No
                    </label>
                    <div>
                        Selected option is : {this.state.selected}
                    </div> <br/>
                <p> If yes, please give any previous address where you have lived during the last year</p> 
                <input type="text"
                    onChange={this.newAddress}
                    className="form-group form-control"
                    value={this.state.new}               
                />   
                </fieldset>
                <fieldset className="three">
                    <h3> Your date of birth (MM DD YYYY)</h3>
                    <input type="date" name="date"
                    
                    className="form-group form-control"
                   
                /> <br/>
                   
                    <p>If you dont know your date of birth, please click if you are </p>
                    <label>
                <input type="radio" onChange={this.age} name="checkbox3"
                     className="rating"  required="required"  value="under 18" 
                     checked={this.state.options === "under 18"}
                />
                    Under 18
                   </label>
                   
                    <label>
                <input type="radio" value="18-70" onChange={this.age} name="checkbox3"
                     className="rating"  required="required"
                     checked={this.state.options === "18-70"}
                />
                    18-70
                    </label>  
                    <label>
                <input type="radio"  onChange={this.age} name="checkbox3"
                    className="rating" value="70 above" required="required"
                    checked={this.state.options === "70 above"}   
                />
                    70 above
                    </label>  
                   <br/> <br/>
                   <div>
                        Selected option is : {this.state.options}
                    </div>
                                                                                
                </fieldset>
              
                <fieldset className="four">
                    <p> Are you sure that the information entered above are correct?</p>
                    <label>
                <input type="radio"  onChange={this.Change}  className="rating" name="confirmation"
                    value="Yes" required="required"
                    checked={this.state.option === "Yes"}
                />
                    Yes
                    </label>
                    <label>
                <input type="radio"  onChange={this.Change}  name="confirmation"
                    className="rating" value="No" required="required"
                    checked={this.state.option === "No"}
                />
                    No
                    </label>  <br/> <br/>
                        <div>
                                Selected option is : {this.state.option}
                        </div>
                    <label>
                <input type="checkBox"  className="rating"  required="required"name="checkbox"
                />
                   Agree to terms and condition
                   </label>
                    <br/> <br/>

                   <button className="btn btn-success"
                   input type="submit" value="Submit">Submit </button>                                                       
                </fieldset>
                </nav>
                </form>
               
                </div>
           
         );
    }
}
 
export default Form;
