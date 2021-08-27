import {useState,useEffect} from 'react'
import List from './List'
import Form from './Form'
function Contacts() {
    const [contacts,setContacts] = useState([
        { //default value
        fullname:"Mustafa",
        phone:"123"
        }
    ])
    useEffect(()=>{
        console.log(contacts)
    },[contacts])
    return (
        <div className="allcontent">
            <h2 className="title">Contacts</h2>
            <List contacts={contacts}/>
            <Form addContacts={setContacts} contacts={contacts}/>
        </div>
    )
}

export default Contacts
