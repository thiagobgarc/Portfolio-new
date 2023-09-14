import React from "react"
import { NavigationBar } from "../components/navigation_bar"

export const ContactScreen = () => {
    // State for storing data from API
    // eslint-disable-next-line @typescript-eslint/no-unused-vars 
    const [data, setData] = React.useState([])
    // State for name input
    const [name, setName] = React.useState('')
    // State for phone input
    const [phone, setPhone] = React.useState('')
    // State for email input
    const [email, setEmail] = React.useState('')

    // Get data from API
    const getData = () => {
        fetch('https://portfolio1234.herokuapp.com/portfolio/')
            .then(res => res.json())
            .then(data => setData(data))
            // catch error
            .catch(err => console.log(err))
    }

    // handleNameChange function
    const handleNameChange = (event: any) => {
        setName(event.target.value)
    }

    // handlePhoneChange function
    const handlePhoneChange = (event: any) => {
        setPhone(event.target.value)
    }

    // handleEmailChange function
    const handleEmailChange = (event: any) => {
        setEmail(event.target.value)
    }

    // handleFormSubmit function
    const handleSubmit = async() => {
        // LOGS
        console.log('Name:', name)
        console.log('Phone:', phone)
        console.log('Email:', email)
    // POST data
    const response = await fetch('https://portfolio1234.herokuapp.com/portfolio/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            phone: phone,
            email: email
        })
    })
        // Response
        console.log('Response:', response)
        // await response.json()
        const json = await response.json()
        // New Data
        console.log('New Data:', json)
        // Clear name, phone, email input
        setName('')
        setPhone('')
        setEmail('')
        // Call getData function
        getData()
    }

    // useEffect function
    React.useEffect(() => {
        // Call getData function
        getData()
    }, [])

    return (
        <div className="bg-purple-300 flex flex-col h-screen justify-center items-center">
            <div>
                <NavigationBar />
            </div>
            <div className="opacity-90 rounded-3xl px-20 pb-10 shadow-lg border-2 border-neonBlue shadow-neonBlue">
            <div>
                <h1 className="text-4xl text-neonBlue mt-10 opacity-80 font-mono font-semibold">Contact Me</h1>
            </div>
            <div className="flex-col space-y-10 flex">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={handleNameChange}
                    className="rounded-lg border-2 p-1 border-neonBlue mt-10"
                />
                <input
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={handlePhoneChange}
                    className="rounded-lg border-2 p-1 border-neonBlue"
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    className="rounded-lg border-2 p-1 border-neonBlue" 
                />
                <button
                    className="text-neonBlue p-2 rounded-lg border-2 border-neonBlue shadow-md shadow-neonBlue"
                    onClick={handleSubmit} 
                >
                    Submit
                </button>
            </div>
            </div>
        </div>
    )
}