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
            handleSubmit=(event)=> {
                alert("Registration successful"+ this.state.value);
                event.preventDefault();
              }
    render() { 
        return ( 
            <div>
                 <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">
                <img src="https://res.cloudinary.com/morayo/image/upload/v1598448200/inec_rpxkc0.jpg" style=
                {{width: "5rem", height:"5rem"}} alt=""/> Register to vote

            </a>
               
            </nav>
                <form className="container-fluid" onSubmit={this.handleSubmit}>
                <fieldset className="one">
                    <h3> Your name and address</h3>
                <option> ForeName(s)</option>  
                    <input type="text"
                    placeholder="forename"
                    onChange={this.Name}
                    className="form-group form-control"
                    value={this.state.foreName} required="required"
                /> <br/> <br/>
                <option> Surname</option> 
                    <input type="text"
                    placeholder="surname"
                    onChange={this.lastName}
                    className="form-group form-control"
                    value={this.state.surname} required="required"
                /> <br/>  <br/>

                <option> Email</option> 
                    <input type="email"
                    placeholder="example@gmail.com"
                    onChange={this.mail}
                    className="form-group form-control"
                    value={this.state.email} required="required"
                /> <br/>  <br/>
                <option> Your Address</option>  
                    <input type="text"
                    onChange={this.myAddress}
                    className="form-group form-control"
                    value={this.state.address} required="required"
                /> <br/>
                    <p> Do you live at another address</p>
                    <label>
                    <input type="radio" onChange={this.onValueChange}
                     className="rating" value="Yes" required="required"
                    checked={this.state.selectedOption === "Yes"}

                    />
                    Yes
                    </label>
                    <label>
                    <input type="radio" onChange={this.onValueChange}
                    className="rating" value="No" required="required"
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
                    className="rating" value="Yes" required="required"
                    checked={this.state.answer === "Yes"}
                    />
                    Yes
                    </label>
                    <label>
                    <input type="radio" onChange={this.Value} 
                     className="rating" value="No" required="required"
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
                    onChange={this.address}
                    className="form-group form-control"
                    value={this.state.address}
                    /> <br/>
                    <h2> Moved in the last 12 Months?</h2>
                   
                    <label>
                    <input type="radio"  onChange={this.onValue}
                     className="rating" value="Yes" required="required"
                     checked={this.state.selected === "Yes"}
                    />
                    Yes
                    </label>
                    <label>
                    <input type="radio"  onChange={this.onValue} 
                    className="rating" value="No" required="required"
                    checked={this.state.selected === "No"}
                    />
                    No
                    </label>
                    <div>
                        Selected option is : {this.state.selected}
                    </div>                
                <p> If yes, please give any previous address where you have lived during the last year</p> 
                <input type="text"
                    onChange={this.newAddress}
                    className="form-group form-control"
                    value={this.state.new}               
                />   
                </fieldset>
                <fieldset className="three">
                    <h3> Your date of birth (MM DD YYYY)</h3>
                   
                    <label>
                    <input type="date" required="required"
                    />
                    </label>
                    <p>If you dont know your date of birth, please click if you are </p>
                    <label>
                    <input type="radio" onChange={this.age} 
                     className="rating"  required="required"  value="under 18" 
                     checked={this.state.options === "under 18"}
                    />
                    Under 18
                   </label>
                   
                    <label>
                    <input type="radio" value="18-70" onChange={this.age} 
                     className="rating"  required="required"
                     checked={this.state.options === "18-70"}
                    />
                    18-70
                    </label>  
                    <label>
                    <input type="radio"  onChange={this.age} 
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
                    <h3> Are you sure that the information entered above are correct?</h3>
                    <label>
                    <input type="radio"  onChange={this.Change}  className="rating" 
                    value="Yes" required="required"
                    checked={this.state.option === "Yes"}
                    />
                    Yes
                    </label>
                    <label>
                    <input type="radio"  onChange={this.Change}  
                    className="rating" value="No" required="required"
                    checked={this.state.option === "No"}
                    />
                    No
                    </label>  <br/> <br/>
                    <div>
                        Selected option is : {this.state.option}
                        </div>
                    <label>
                    <input type="checkBox"  className="rating"  required="required"
                    />
                   Agree to terms and condition
                   </label> <br/> <br/>

                   <button className="btn btn-success"
                   input type="submit" value="Submit">Submit </button>                                                       
                </fieldset>
                </form>
                </div>
           
         );
    }
}
 
export default Form;