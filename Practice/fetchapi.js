console.log("This is Fetch API Example with promises");

let Fetchdata = document.getElementById("fetchdata");

//Fetching Data with Get Method
// function getData(){
//     console.log("Fetch Get Data with Get Method")

//     url = "https://api.github.com/users";
//     fetch(url).then((res)=>{
//         return res.json()
//     }).then((data)=>{
//         console.log(data)
//     });
// }

// document.write(Fetchdata).innerHTML =  getData();

function postData() {
  url = "http://dummy.restapiexample.com/api/v1/create";
  data = '{"name":"cdsffsadfDwe22eSF","salary":"123","age":"23"}';
  param = {
    method: "post",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.parse(data),
  };
  fetch(url, param)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

// getData();

// postData();
