import React from 'react';
import logo from './logo.svg';
import './App.css';



const current= new Date()
var siuation= {
  1:"suspended",
  2:"completed",
  3:"canceled"

}
var personAppointments={
  name:"Alan Ford",
  employeId:"1234567",
  
  appointmenton:`${current.getHours()}:${current.getMinutes()} (${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()})`,
  email:"personname@gmail.com",
  phone:"1234567890",
  status:siuation[1],
  door:"Mark",
  time:`${current.getHours()}:${current.getMinutes()} `,
  tym:`(${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()})`,
  pic:'https://www.w3schools.com/howto/img_avatar.png',
  heading:"Devi Ramakrishnaa",
  para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
}



var arrow1="<"
var arrow2=">"
function App() {
  return (
    <div className="site-container">
      <div className='headerName'>
        
        <a href='#'>{arrow1} </a>
        <div className='deatialsName'>
          <h2> 
            {personAppointments.name}
            </h2>
          <span>{personAppointments.employeId}</span>
        </div>
        <button ><strong>Print</strong></button>
       
       
      </div>
      <div className="customer-info">
        <div>
        <p><strong>Appointment On:</strong>{personAppointments.appointmenton}</p>
        <p><strong>Email:</strong>{personAppointments.email}</p>
        <p><strong>Phone:</strong>{personAppointments.phone}</p>
        </div>
      </div>
      <div className="order-info">
        <div className="order-status">
          <strong>Status</strong>          
          <ul>
            <li>{personAppointments.status}</li>
          </ul>            
        </div>
        <div className="order-door">
          <strong>Door</strong>
          <p>{personAppointments.door}</p>
        </div>
        <div className="order-time">
          <strong>Time</strong>
          
          <p>{personAppointments.time}<label>{personAppointments.tym}</label></p>
          
         
          
        </div>
      </div>
      <div className="product-list">
        <input type="checkbox"></input>
        <img src={personAppointments.pic} ></img>
        <div className="prodcut-heading">
          <h3>{personAppointments.heading}</h3>
          <p>{personAppointments.para}</p>
        </div>
        <a href="#">{arrow2}</a>

      </div>    
    </div>
  );
}

export default App;
