import { useEffect, useState } from 'react';
import Web3 from 'web3';
import NameStorageContract from './NameStorageContract.json'

function App() {
  const [account, setAccount] = useState();
  const [contactList, setContactList] = useState();
  const [contactsName, setContactsName] = useState([]);
  let CONTACT_ABI = NameStorageContract.abi;
  let CONTACT_ADDRESS = "0xc7e8eBD5cafA964e244579DC88aDE8C93012B9fc"
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
    }
    
    load();
  }, []);
  const setUserName = async () => {
    let name = "rafi"
    await contactList.methods.setName(name).send({ from: account });
    const newName = await contactList.methods.name().call();
      setContactsName(newName);
    console.log("Name set to: " + name + " " + newName);
  }
  return (
    <div>
    <h1>Your account is: {contactsName}</h1> 
    <input ></input>
    <button onClick={()=>setUserName()}>SetName</button>
    </div>
  );
}


export default App;
