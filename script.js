let arr = [
    { name: "john", age: "18", profession: "developer" },
    { name: "jack", age: "20", profession: "developer" },
    { name: "karen", age: "19", profession: "admin" },
  ];


  const filterbutton= document.getElementById("filter")
  const addButton =document.getElementById("add")
  const employees=document.getElementById("employees")

  renderList(arr)

  addButton.addEventListener('click', addToArray)

  function addToArray(){
    let name=document.getElementById("name")
    let namestr=name.value
    let profession=document.getElementById("profession")
    let professionstr=profession.value
    let age=document.getElementById("age")
    let agestr=age.value //why does this become undefined when deployed

    if(namestr=="" || professionstr=="" || agestr==""){
        alert("please enter name profession and age")
        return
    }
    let newemployee={ name:namestr, age:agestr, profession:professionstr }
    arr.push(newemployee)

    console.log(arr)
    renderList(arr)
  }

  function renderList(arr){
    while(employees.firstChild){
        employees.removeChild(employees.firstChild)
    }

    arr.forEach(element => {
        let li = document.createElement("li")    

        li.textContent= "Name: "+element.name+" Profession: "+element.profession+" Age: "+element.age
        
        li.classList.add("employee")
        employees.appendChild(li)
    });
  }


  filterbutton.addEventListener('click', filter)

  function filter(){
    let filterselecction=document.getElementById("filterval")
    let needed=filterselecction.value
    if(needed==""){
        renderList(arr)
        return
    }

    console.log(needed)
    arrFiltered= arr.filter( employee=> {
        console.log(employee.profession)
        if(employee.profession === needed){
            return employee
        }
    })

    console.log(arrFiltered)
    renderList(arrFiltered)
  }
