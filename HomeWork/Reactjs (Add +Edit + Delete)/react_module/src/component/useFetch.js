import {useState, useEffect} from 'react';


export const useFetch = (url)=>{

    const [status, setStatus] = useState(true);
    const [users, setUsers] = useState([]);

    const editUser = async ()=>{
        const response = await fetch(url);
        const data = await response.json();
        
        console.log(data);
        setUsers(data);
        setStatus(false);
    }

    useEffect(()=>{
    	editUser();
    }, []);
    
    return { status, users };
}