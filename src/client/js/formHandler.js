//DOM IDs
const INPUT = document.querySelector('#input')
const RESULT = document.querySelector('#results')

const updateUI = (data) => {
    for (const div of RESULT.children) {
      const id = div.id
      div.firstElementChild.innerText = id
      div.lastElementChild.innerText = data[id]
    }
  }

const handleFormSubmit =async (validateURL) => {
    //Input Field value
    const articleURL = INPUT.value
    try {
        if(!validateURL(articleURL)){
            alert('invalid URL')
            throw new Error('invalid URL')
        }
        const res = await fetch('http://localhost:8080/add-url',{
            method: 'POST',
            mode: 'cors',
            credentials: 'same-origin',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({articleURL})
        })
        const data = await res.json()
        // console.log(data)
        updateUI(data)
        // return await res.json()
    } catch (err) {
        console.log(err)
    }
}


export { handleFormSubmit }
