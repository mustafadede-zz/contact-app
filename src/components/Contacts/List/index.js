import {useState} from 'react'

function List({contacts}) {
    const [filterText,setFilterText] = useState("");

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => 
            item[key].toString().toLowerCase().includes(filterText.toLowerCase()))
    })
    
    return (
        <div className="list">
            <input placeholder="filter contact" value= {filterText} onChange={(e) => setFilterText(e.target.value)}/>
            <div className="showcontact">
                {
                filtered.map((contact,index) => <li key={index}><span>{contact.fullname}</span><span className="dif-span">{contact.phone}</span></li>)
                }
            </div>
            
        </div>
    )
}

export default List
