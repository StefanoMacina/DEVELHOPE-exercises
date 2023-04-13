async function fetchPost() {

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    data.forEach(el => {
        console.log(el.id)
    });
  } catch (error) {
    console.log(error);
  }
}



fetchPost();
