import {useState} from 'react'

const initialValues = {fullname:"",phone:""}

function Form({addContacts,contacts}) {
    const [form,setForm] = useState(initialValues)
    
    const onChangedInput = (e) => {
        setForm({...form,[e.target.name]:e.target.value})
    }
    
    function onSubmit(e) {
        if (form.fullname === "" || form.phone === "") {
            return false;
        }
        addContacts([...contacts,form])
        setForm(initialValues) //make form empty 
    }
    return (
        <div>
            <h2 className="form">
                Form
            </h2>
            <div>
            <input type="text" value={form.fullname} name="fullname" placeholder="full name" onChange={onChangedInput} />
            </div>
            <br />
            <div>
                <input type="tel" value={form.phone} name="phone" placeholder="phone number" onChange={onChangedInput}/>
            </div>
            <br />
            <button className="form-ekle" onClick={onSubmit}>Add</button>
        </div>
    )
}

export default Form
