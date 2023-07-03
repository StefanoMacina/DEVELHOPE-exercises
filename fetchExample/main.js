import axios from 'axios';
const list = document.getElementById('list')


const url = "https://jsonplaceholder.typicode.com/users"

async function fetchData(){
    try {
        const res = await axios(url)
        const data =  res.data
        data.forEach(user => {
            const li = document.createElement('li').innerText(user.email)
            list.append(li)
        });
        
    } catch (error) {
        console.log(error.name);
    }
}
fetchData()
