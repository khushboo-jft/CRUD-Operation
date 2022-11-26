let api = new employee();
let names = document.getElementById("names");
let job = document.getElementById("job");
let salary = document.getElementById("salary");
let addbtn = document.getElementById("addbtn");
let savebtn = document.getElementById("savebtn");
let count = 0;
let val = 0;



function create(id,names,job,salary){
    this.id = id;
    this.names = names;
    this.job = job;
    this.salary = salary;
}
addbtn.addEventListener('click', async () => {
    let obj = {
        names: names.value,
        id: count++,
        job: job.value,
        salary: salary.value
    }
   let arr=await api.post(obj) ;
   show(arr);
//    localStorage.setItem("data",JSON.stringify(arr));
    
   
    names.value = ""
    job.value = ""
    salary.value = ""
})

async function update(i) {

    let e= await api.get(i)
        names.value=e.names;
        job.value=e.job;
        salary.value=e.salary;
        val=e.id;
        savebtn.style.display = "initial";
        addbtn.style.display = "none";

    
    }

savebtn.addEventListener('click', async() => {
    let obj2 = new create(val, names.value, job.value, salary.value)
    let arr= await api.put(obj2)
    show(arr);
    //  localStorage.setItem("data",JSON.stringify(arr));
    names.value = ""
    job.value = ""
    salary.value = ""
    savebtn.style.display = "none"
    addbtn.style.display = "initial"
})

async function Delete(obj){
     let arr=await api.delete(obj);
     show(arr);
    //  localStorage.setItem("data",JSON.stringify(arr))
}


function show(arr) {
    // localStorage.setItem("data",JSON.stringify(arr));
    savebtn.style.display = "none";
    addbtn.style.display = "initial";
    let table = document.getElementById("empDetails");
    table.innerHTML = "";

    arr.forEach((i) => {
        return (table.innerHTML+=`
        <tr>
        <td>${i.names}</td>
        <td>${i.job}</td>
        <td>${i.salary}</td>
        
        <td><button onclick="Delete(${i.id})">Delete   </button>
        <button onclick="update(${i.id})">Edit </button>
        </td></tr>`
        ) })
    
}

(()=>{

    show(JSON.parse(localStorage.getItem("data"))||[])

})()
      

