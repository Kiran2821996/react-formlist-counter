import React, { useState } from "react";

export function App() {
  const [list, setList] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [team, setTeam] = useState("");
  const [read, setRead] = useState(true);

  const firstNameValue = (e) => {
    setFirstName(e.target.value);
  };

  const secondNameValue = (e) => {
    setLastName(e.target.value);
  };
  const emailValue = (e) => {
    setEmail(e.target.value);
  };

  const teamValue = (e) => {
    setTeam(e.target.value);
  };
  const addItem = (e) => {
    e.preventDefault();
    setList([
      ...list,
      {
        id: Math.floor(Math.random() * 10000000),
        F_Name: firstName,
        L_Name: lastName,
        E_mail: email,
        Team_name: team,
      },
    ]);
    setFirstName("");
    setLastName("");
    setEmail("");
    setTeam("");
  };
  const deleteItem = (index) => {
    const deleted = [...list];
    deleted.splice(index, 1);
    setList(deleted);
  };
  const saveItem = () => {
    setRead(true);
  };
  const editItem = () => {
    setRead(false);
  };
  return (
    <>
      <form action="" className="form">
        <label htmlFor="f_name">First-Name</label>
        <input
          type="text"
          name="f_name"
          value={firstName}
          onChange={firstNameValue}
        />
        <label htmlFor="l_name">Second-Name</label>
        <input
          type="text"
          name="l_name"
          value={lastName}
          onChange={secondNameValue}
        />
        <label htmlFor="e_mail">E-mail</label>
        <input type="text" name="e_mail" value={email} onChange={emailValue} />
        <label htmlFor="t_name">Team:</label>
        <input type="text" name="t_name" value={team} onChange={teamValue} />
        <button onClick={addItem}>Submit</button>
      </form>
      <div className="list_container">
      <div className="edit_save-btns-right">
        <button onClick={editItem}>Edit</button>
        <button onClick={saveItem}>Save</button>
      </div>
      <div className="list_popup-left">
      <div className="list_title">
        <span>FIRSTNAME</span>
        <span>SECONDNAME</span>
        <span>EMAIL</span>
        <span>TEAM</span>
      </div>
      <div className="list_items-mapped">
        {list.map((item, index) => {
          return (
            <div key={item.id}>
              <input type="text" defaultValue={item.F_Name} readOnly={read} />
              <input type="text" defaultValue={item.L_Name} readOnly={read} />
              <input type="text" defaultValue={item.E_mail} readOnly={read} />
              <input
                type="text"
                defaultValue={item.Team_name}
                readOnly={read}
              />
              <button onClick={() => deleteItem(index)}>Delete</button>
            </div>
          );
        })}
      </div>
      </div>
      </div>

    </>
  );
}
// import React from "react";
// import { useState } from "react";

// export function App() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };
//   const decrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <>
//       <h1
// className={
//   count < 5
//     ? "changeColor"
//     : count > 10
//     ? "changeColor1"
//     : "changeColor2"
// }
//       >
//         {count}
//       </h1>
//       {/* <button onClick={increment}>increment</button> */}

//       {count >= 15 || count === 1 ? (
//         <button onClick={decrement}>decrement</button>
//       ) :count>1 || count<=15 ? (
//         <button onClick={increment}>increment</button>
//       ):<button onClick={decrement}>decrement</button>}
//     </>
//   );
// }

// import React from "react";
// import { useState } from "react";

// export function App() {
//   const [count, setCount] = useState(0);
//   const [condition, setCondition] = useState("increase");

//   const increment = () => {
//     if (count === 14) {
//       setCondition("decrease");
//     }
//     setCount(count + 1);
//   };
//   const decrement = () => {
//     if (count === 1) {
//       setCondition("increase");
//     }
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <h1
//         className={
//           count < 5
//             ? "changeColor"
//             : count > 10
//             ? "changeColor1"
//             : "changeColor2"
//         }
//       >
//         {count}
//       </h1>
//       {condition === "increase" ? (
//         <button onClick={increment}>INCREASE</button>
//       ) : (
//         <button onClick={decrement}>DECREASE</button>
//       )}
//     </div>
//   );
// }
//  import React from 'react'
// import { useState } from 'react'
 
//  export function App() {
//   const [isRed,setIsRed]=useState(true)
//   const mycolor =()=>{
//     setIsRed(!isRed)
//   }

//    return (
//      <div><h1 id={isRed?"red":"pink"&&"green"} >react</h1>
//      <button  onClick={mycolor}>Clic mek</button>
//      </div>
//    )
//    }