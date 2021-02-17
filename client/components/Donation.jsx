import React, { useState } from 'react';
// import { Switch, Route } from 'react-router-dom';
import '../styles.css';


export default function Donation () {
    const [ nameInput, setNameInput ] = useState('');
    const [ donationAmount, setDonationAmount ] = useState('');
    const [ creditCard , setCreditCard  ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ date, setDate ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ username, setUsername] = useState('');
    const [ password, setPassword ] = useState('');
    const [ totalRaised, setTotalRaised ] = useState('');
         

    // function nameInputChange(e){
    //   setNameInput(e.target.value)
    // }
    // function inputSubmitted(e){
    //   setNameInput(),
    //   setDonationAmount(),
    //   setCreditCard()
    //   setPhone()
    //   setDate(),
    //   setEmail(),
    //   setUsername(),
    //   setPassword(),
    //   setTotalRaised()
    // }
            
    // this.handleClick = this.handleClick.bind(this);
        
    // handleClick(event) {
    //     const donations = { nameInput : this.state.nameInput,
    //                         //nameInput : document.getElementById("nameInput").value,
    //                         donationAmount : this.state.donationAmount,
    //                         creditCard : this.state.creditCard, 
    //                         phone : this.state.phone, 
    //                         date : this.state.date, 
    //                         email: this.state.email
    //                       };
    //     const members = { username : this.state.username , password : this.state.password };

    //     preventDefault(event);
    //     fetch('/donate', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({donations, members})
    //     })

    // }
    
      // const formItems = ["nameInput", "donationAmount", "creditCard", "phone", "date", "email", "username", "password", "totalRaised" ];
      // for (let i = 0; i < formItems.length; i++){
      //   return <input value={formItems[i]} id={forItems[i]} placeholder={forItem[i]}/>
      // }
        return (
             <section>
              <input value={nameInput} id={nameInput} placeholder="nameInput"/>
              <input value={donationAmount} id={donationAmount} placeholder="donationAmount"/>
              <input value={creditCard} id={creditCard} placeholder="creditCard"/>
              <input value={phone} id={phone} placeholder="phone"/>
              </section>
             
                

        )
    
};

