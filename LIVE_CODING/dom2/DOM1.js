const users = [
    {
      name: "John Doe",
      age: 32,
      position: "Software Engineer",
      image: "https://example.com/images/john-doe.jpg"
    },
    {
      name: "Jane Smith",
      age: 25,
      position: "Marketing Manager",
      image: "https://example.com/images/jane-smith.jpg"
    },
    {
      name: "Bob Johnson",
      age: 40,
      position: "Sales Director",
      image: "https://example.com/images/bob-johnson.jpg"
    },
    {
      name: "Alice Lee",
      age: 28,
      position: "Graphic Designer",
      image: "https://example.com/images/alice-lee.jpg"
    },
    {
      name: "Tom Williams",
      age: 35,
      position: "Product Manager",
      image: "https://example.com/images/tom-williams.jpg"
    }
  ];


//creare una card per ogni oggetto 

  users.forEach(element => {
    const newDiv = document.createElement("div");      //aggiungo nuovi div
    newDiv.classList.add("card");                  //creo div con una classe
    const name = document.createElement("p");
    const age = document.createElement("p");
    const work = document.createElement("p");
    
    name.innerText = element.name
    age.innerText = element.age
    work.innerText = element.position

    newDiv.appendChild()
  });