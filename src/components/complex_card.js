import React  from 'react';
import Logo1 from '../images/Capture.PNG';
import Logo2 from '../images/Capture2.PNG';

class Card extends React.Component {
 constructor(props) {
   super(props)
   this.state = {cardnumber:"" , name : "" , validthru: ""}
   this.checkname = this.checkname.bind(this) 
   this.checkcardnumber = this.checkcardnumber.bind(this) 
   this.checkvalidthru = this.checkvalidthru.bind(this)
   this.checknamelength =  this.checknamelength.bind(this) 
 
  }
 

checkname (y) {

  this.setState({name:y.trim().replace(/[^a-zA-Z]/g, "").toLocaleUpperCase()})
}


checknamelength (a) {
if (a.length > 20) {

alert ("The name has a maximum length of 20 characters")
}
else return a
}


checkcardnumber (x) { 

  this.goststate= x.trim().replace(/\D/g , "").slice(0,16)
  this.setState({cardnumber:this.goststate.toString().replace(/\B(?=(\d{4})+(?!\d))/g, " ")})
 
}
  

checkvalidthru (z) {

   this.gostvalidthru= z.trim().replace(/\D/g, "").slice(0,4)
   var d = new Date ()
   var year = parseInt(d.getFullYear().toString().slice(2))+5

  if (this.gostvalidthru.length>1 ){
      if (this.gostvalidthru.toString().slice(0,2) > 12  ) alert ("Enter a Valid Month")
   }
  
   if (this.gostvalidthru.length>2 ){
      if (this.gostvalidthru.toString().slice(2) > year ) alert ("Enter a Valid Year")
   }

   this.setState({validthru:this.gostvalidthru.toString().slice(0,2).concat("/",this.gostvalidthru.toString().slice(2) )})
   
}
handleBlur = e => {
   if(e.target.value.length !==19){
      alert ("The card number has a length of 16 characters")
   }
}


handleBlurr = e => {
   var s = new Date ()
   var actualyear = parseInt(s.getFullYear().toString().slice(2))
   if (e.target.value.toString().slice(3) <= actualyear ){
      alert ("Enter a Valid Year")
   }
}


 render() {
 
    return ( <div className="maincontainer">

    <div className="unserinput">
         <p> Enter Card Number: </p> <input type="text" value ={this.state.cardnumber}  onChange={(event)=> this.checkcardnumber(event.target.value)} onBlur={this.handleBlur}     />
         <p> Enter Card Holder Name: </p> <input type="text" value ={this.state.name} onChange={(event)=> this.checkname( event.target.value)}/>
         <p> Enter the validThru : </p> <input type="text"  value ={this.state.validthru}  onChange={(event)=> this.checkvalidthru(event.target.value)} onBlur={this.handleBlurr}/>
         
    </div>
 
    <div className="maincard" >
            <h1> CREDIT CARD</h1>
            <img className= "logo1" alt="photo1" src={Logo1} />
            <div className="information" >
                  <div className="informationuser">
                      <p className="number1"> {this.state.cardnumber.concat((this.state.cardnumber.length)<16 ?'*'.repeat(16-(this.state.cardnumber.length)):"")} </p>
                        <div className="check">
                           <p className="number2"> 5422 </p>
                                <div className="valid">     
                                   <p> VALID THRU </p>
                                   <div className="month"> 
                                       <p> MONTH/YEAR </p>
                                       <h5> {this.state.validthru}</h5>
                                   </div>  
                                </div> 
                        </div>
                      <p className="holder"> {this.checknamelength(this.state.name)}</p>
                   </div> 
                  <img className="logo2" alt="photo2" src={Logo2} />    
             </div>

    </div>


  </div>
 );
}
 }


 export default Card ;

























