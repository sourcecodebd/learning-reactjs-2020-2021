import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {userArray} from './userArray';
import User from './component/User';

function UserList(){
  return(
    <>
    {
    userArray.map((ob, index) => <User key = {index} {...ob}/>)
    }
    </>
  )
  }

ReactDOM.render(<UserList/>, document.getElementById('root'))

//---------------------------------------------------------



/* //18.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const info = "User Information"

const userArray = [
  {
    id: 1,
    name: "Abdur Rahman",
    email: "abdur@aiub.edu"
  },
  {
    id: 2,
    name: "Nafi Mahmud",
    email: "nafi@aiub.edu"
  }
  ];

function UserList(){
return(
  <>
  {
  userArray.map((ob, index) => <User key = {index} {...ob}/>)
  }
  </>
)
}

function User({name, id, email}){

  return(
    <>
      {console.log({name, id, email})}
      <div className="usermain">
      <h1>{info}</h1>

      <p>These values are retrieved by props</p>
      <p>Id: {id}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <button onClick = {()=>alert(name)}>Click</button>
      </div>

    </>
  )
}

ReactDOM.render(<UserList/>, document.getElementById('root'))

//--------------------------------------------------------- */



/* //17.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const info = "User Information"

const userArray = [
  {
    id: 1,
    name: "Abdur Rahman",
    email: "abdur@aiub.edu"
  },
  {
    id: 2,
    name: "Nafi Mahmud",
    email: "nafi@aiub.edu"
  }
  ];

function UserList(){
return(
  <>
  {
  userArray.map((ob, index) => <User key = {index} {...ob}/>)
  }
  </>
)
}

let myName = (name)=> alert(name)

function User({name, id, email}){

  return(
    <>
      {console.log({name, id, email})}
      <div className="usermain">
      <h1>{info}</h1>

      <p>These values are retrieved by props</p>
      <p>Id: {id}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <button onClick = {()=>myName(name)}>Click</button>
      </div>

    </>
  )
}

ReactDOM.render(<UserList/>, document.getElementById('root'))

//--------------------------------------------------------- */



/* //16.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const info = "User Information"

const userArray = [
  {
    id: 1,
    name: "Abdur Rahman",
    email: "abdur@aiub.edu"
  },
  {
    id: 2,
    name: "Nafi Mahmud",
    email: "nafi@aiub.edu"
  }
  ];

function UserList(){
return(
  <>
  {
  userArray.map((ob, index) => <User key = {index} {...ob}/>)
  }
  </>
)
}

let myName = () => alert('Test')

function User({name, id, email}){

  return(
    <>
      {console.log({name, id, email})}
      <div className="usermain">
      <h1>{info}</h1>

      <p>These values are retrieved by props</p>
      <p>Id: {id}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <button onClick = {myName}>Click</button>
      </div>

    </>
  )
}

ReactDOM.render(<UserList/>, document.getElementById('root'))

//--------------------------------------------------------- */



/* //15.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const info = "User Information"

const userArray = [
  {
    id: 1,
    name: "Abdur Rahman",
    email: "abdur@aiub.edu"
  },
  {
    id: 2,
    name: "Nafi Mahmud",
    email: "nafi@aiub.edu"
  }
  ];

function UserList(){
return(
  userArray.map((ob, index) => <User key = {index} obj = {ob}/>)
)
}

function User(props){

  const {name, id, email} = props.obj;

  return(
    <>
      {console.log(props.obj.name)}
      <div className="usermain">
      <h1>{info}</h1>

      <p>These values are retrieved by props</p>
      <p>Id: {id}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      </div>

    </>
  )
}

ReactDOM.render(<UserList/>, document.getElementById('root'))

//--------------------------------------------------------- */



/* //14.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const info = "User Information"

const userArray = [
  {
    id: 1,
    name: "Abdur Rahman",
    email: "abdur@aiub.edu"
  },
  {
    id: 2,
    name: "Nafi Mahmud",
    email: "nafi@aiub.edu"
  }
  ];

function UserList(){
return(
  userArray.map((ob) => <User key = {ob.id} id = {ob.id} name = {ob.name} email = {ob.email}/>)
)
}

function User({name, id, email}){

  //const {name, id, email} = props;

  return(
    <>
      {console.log({name, id, email})}
      <div className="usermain">
      <h1>{info}</h1>

      <p>These values are retrieved by props</p>
      <p>Id: {id}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      </div>

    </>
  )
}

ReactDOM.render(<UserList/>, document.getElementById('root'))

//--------------------------------------------------------- */



/* //13.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const info = "User Information"

const names = ['a', 'b', 'c', 'd'];

function UserList(){
return(
  names.map((name) => <h1>{name}</h1>)
)
}

ReactDOM.render(<UserList/>, document.getElementById('root'))

//--------------------------------------------------------- */



/* //12.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const info = "User Information"

const userArray = [
{
  id: 1,
  name: "Abdur Rahman",
  email: "abdur@aiub.edu"
},
{
  id: 2,
  name: "Nafi Mahmud",
  email: "nafi@aiub.edu"
}
];

function UserList(){
return(
  <>
  <User id = {userArray[0].id} name = {userArray[0].name} email = {userArray[0].email}/>
  <User id = {userArray[1].id} name = {userArray[1].name} email = {userArray[1].email}/>
  </>
)

}

function User({name, id, email}){

  //const {name, id, email} = props;

  return(
    <>
      {console.log({name, id, email})}
      <div className="usermain">
      <h1>{info}</h1>

      <p>These values are retrieved by props</p>
      <p>Id: {id}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      </div>

    </>
  )
}

ReactDOM.render(<UserList/>, document.getElementById('root'))

//--------------------------------------------------------- */



/* //11.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const info = "User Information"

const userOb1 = {
  id: 1,
  name: "Abdur Rahman",
  email: "abdur@aiub.edu"
}

const userOb2 = {
  id: 2,
  name: "Nafi Mahmud",
  email: "nafi@aiub.edu"
}

function UserList(){
return(
  <>
  <User id = {userOb1.id} name = {userOb1.name} email = {userOb1.email}/>
  <User id = {userOb2.id} name = {userOb2.name} email = {userOb2.email}/>
  </>
)

}

function User({name, id, email}){

  //const {name, id, email} = props;

  return(
    <>
      {console.log({name, id, email})}
      <div className="usermain">
      <h1>{info}</h1>

      <p>These values are retrieved by props</p>
      <p>Id: {id}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      </div>

    </>
  )
}

ReactDOM.render(<UserList/>, document.getElementById('root'))

//--------------------------------------------------------- */



/* //10.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const info = "User Information"
const id = "10"
const name = "Nafi Mahmud"
const email = "nafi@aiub.edu"

function UserList(){
return(
  <>
  <User id = {id} name = {name} email = {email}/>
  <User id = {id} />
  </>
)

}

function User({name, id, email}){

  //const {name, id, email} = props;

  return(
    <>
      {console.log({name, id, email})}
      <div className="usermain">
      <h1>{info}</h1>

      <p>These values are retrieved by props</p>
      <p>Id: {id}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      </div>

    </>
  )
}

ReactDOM.render(<UserList/>, document.getElementById('root'))

//--------------------------------------------------------- */



/* //9.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const info = "User Information"

function UserList(){
return(
  <>
  <User id = "15" name = "Rafi" email = "rafi@aiub.edu"/>
  <User id = "10" name = "Nafi" email = "nafi@aiub.edu"/>
  </>
)

}

function User({name, id, email}){

  //const {name, id, email} = props;

  return(
    <>
      {console.log({name, id, email})}
      <div className="usermain">
      <h1>{info}</h1>

      <p>These values are retrieved by props</p>
      <p>Id: {id}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      </div>

    </>
  )
}

ReactDOM.render(<UserList/>, document.getElementById('root'))

//--------------------------------------------------------- */



/* //8.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const info = "User Information"
const id = "10"
const name = "Nafi"
const email = "nafiaiubian17@gmail.com"

function UserList(){
return(
  <>
  <User id = "15" name = "Rafi" email = "rafi@aiub.edu"/>
  </>
)

}

function User(props){

  const {name, id, email} = props;

  return(
    <>
      {console.log(props)}
      <div className="usermain">
      <h1>{info}</h1>

      <p>These values are retrieved by props</p>
      <p>Id: {id}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>

      <p>---------------------------------------</p>

      <p>This time these values are also retrieved by props, not by var</p>
      <p>Id: {id}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      </div>

    </>
  )
}

ReactDOM.render(<UserList/>, document.getElementById('root'))

//--------------------------------------------------------- */



/* //7.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const info = "User Information"
const id = "10"
const name = "Nafi"
const email = "nafiaiubian17@gmail.com"

function UserList(){
return(
  <>
  <User id = "15" name = "Rafi" email = "rafi@aiub.edu"/>
  <User/>
  </>
)

}

function User(props){

  return(
    <>
      {console.log(props)}
      <div className="usermain">
      <h1>{info}</h1>

      <p>These values are retrieved by props</p>
      <p>Id: {props.id}</p>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>

      <p>---------------------------------------</p>

      <p>These values are retrieved by var</p>
      <p>Id: {id}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      </div>

    </>
  )
}

ReactDOM.render(<UserList/>, document.getElementById('root'))

//--------------------------------------------------------- */



/* //6.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const info = "User Information"
const id = "10"
const name = "Nafi"
const email = "nafiaiubian17@gmail.com"

function UserList(){
return(
  <>
  <User/>
  <User/>
  </>
)

}

function User(){

  return(
    <>

      <div className="usermain">
      {console.log('test')}
      <h1>{info}</h1>
      <p>Id: {id}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      </div>

    </>
  )
}

ReactDOM.render(<UserList/>, document.getElementById('root'))

//--------------------------------------------------------- */



/* //5.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function UserList(){
return(
  <>
  <User/>
  </>
)

}

function User(){

  const info = "User Information"
  const id = "10"
  const name = "Nafi"
  const email = "nafiaiubian17@gmail.com"

  return(
    <>

      <div className="usermain">
      {console.log('test')}
      <h1>{info}</h1>
      <p>Id: {id}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      </div>

    </>
  )
}

ReactDOM.render(<UserList/>, document.getElementById('root'))

//--------------------------------------------------------- */



/* //4.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class User extends React.Component {

render(){

return(
<>
<div className="usermain">
      <UserInfo/>
      <UserId/>
      <UserName/>
      <UserEmail/>
</div>
</>
)
}

}

const UserInfo = ()=> <h1>User Information</h1>
const UserId = ()=> <p>Id: 10</p>
const UserName = ()=> <p>Name: Nafi</p>
const UserEmail = ()=> <p>Email: nafiaiubian17@gmail.com</p>

ReactDOM.render(<User/>, document.getElementById('root'))

//--------------------------------------------------------- */



/* //3.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function User(){
  return(
    <>

      <div className="usermain">
      <UserInfo/>
      <UserId/>
      <UserName/>
      <UserEmail/>
      </div>

    </>
  )
}

const UserInfo = ()=> <h1>User Information</h1>
const UserId = ()=> <p>Id: 10</p>
const UserName = ()=> <p>Name: Nafi</p>
const UserEmail = ()=> <p>Email: nafiaiubian17@gmail.com</p>

ReactDOM.render(<User/>, document.getElementById('root'))

//--------------------------------------------------------- */



/* //2.

import React from 'react';
import ReactDOM from 'react-dom';

function User(){
  return(

    <>
      <UserInfo/>
      <UserId/>
      <UserName/>
      <UserEmail/>
    </>

  )
}

const UserInfo = ()=> <h1>User Information</h1>
const UserId = ()=> <p>Id: 10</p>
const UserName = ()=> <p>Name: Nafi</p>
const UserEmail = ()=> <p>Email: nafiaiubian17@gmail.com</p>

ReactDOM.render(<User/>, document.getElementById('root'))

//--------------------------------------------------------- */



/* //1.

import React from 'react';
import ReactDOM from 'react-dom';

function User(){
  return(
    <div>
      <h1>User Info</h1>
      <p>Id: 10</p>
      <p>Name: Nafi</p>
      <p>Email: nafiaiubian17@gmail.com</p>
    </div>
  )
}

ReactDOM.render(<User/>, document.getElementById('root'))

//--------------------------------------------------------- */