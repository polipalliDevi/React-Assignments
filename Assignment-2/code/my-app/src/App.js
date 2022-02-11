import logo from './logo.svg';
import './App.css';



function App(props) {
  const { employee } = props;

  return (
    <div className="App" >
      <div className="profile">
        <img className="img-profile" src={employee.profileImg} width="300px" height="300px"></img>
      </div>
      <div className='name-person'>
        <p><strong>{employee.name}</strong></p>
      </div>
      <div className='details-info'>

        <div className='details'>
          <label>location</label>
          <strong>{employee.location}</strong>
        </div >
        <div className='details'>
          <label>Blood Group</label>
          <strong>{employee.bloodGroup}</strong>
        </div>
        <div className='details'>
          <label>Age</label>
          <strong>{employee.age}</strong>
        </div>
      </div>



    </div>
  )
}



export default App;
