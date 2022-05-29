import { useEffect, useState } from 'react';
import Web3 from 'web3';
import NameStorageContract from './NameStorageContract.json'

function App() {
  const [account, setAccount] = useState();
  const [contactList, setContactList] = useState();
  const [contactsName, setContactsName] = useState([]);
  const [contactsAge, setContactsAge] = useState([]);
  const [nameValue, setNameValue] = useState('');
  const [ageValue, setAgeValue] = useState(0);
  let CONTACT_ABI = NameStorageContract.abi;
  let CONTACT_ADDRESS = "0x716E6117622eB54Aa287cc02565a9D3897C71f8B"
  useEffect(() => {
    async function load() {
      const web3 = new Web3(Web3.givenProvider || '');
      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0]);
      // Instantiate smart contract using ABI and address.
      const contactList = new web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS);
      // set contact list to state variable.
      setContactList(contactList);
      // Then we get total number of contacts for iteration
      const name = await contactList.methods.name().call();
      setContactsName(name);
      const age = await contactList.methods.age().call();
      setContactsAge(age);
    }
    
    load();
  }, []);

  const setUserName = async () => {
    
    await contactList.methods.setName(nameValue).send({ from: account });
    
    const newName = await contactList.methods.name().call();
    
    setContactsName(newName);
    
    console.log("Name set to: " + nameValue + " " + newName);
    
  }

  const setUserAge = async () =>{
    await contactList.methods.setAge(ageValue).send({ from: account });
    const newAge = await contactList.methods.age().call();
    setContactsAge(newAge);
    console.log("newAge set to: " + newAge + " " + newAge);
  }

  return (
    <div>
    <h1>Your name is: {contactsName}</h1> 
    <h1>Your age is: {contactsAge}</h1> 
    <input type="text" onChange={(e)=>setNameValue(e.target.value)}/>{" "}
    <button onClick={()=>setUserName()}>SetName</button>{" "}
    <input type="number" onChange={(e)=>setAgeValue(e.target.value)}/>{" "}
    <button onClick={()=>setUserAge()}>SetAge</button>
    </div>
  );
}


export default App;
