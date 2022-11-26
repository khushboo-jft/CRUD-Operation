let api = new employee();
let names = document.getElementById("names");
let job = document.getElementById("job");
let salary = document.getElementById("salary");
let addbtn = document.getElementById("addbtn");
let savebtn = document.getElementById("savebtn");
let count = 0;
let val;



function create(id,names,job,salary){
    this.id = id;
    this.names = names;
    this.job = job;
    this.salary = salary;
}

addbtn.addEventListener('click', () => {
    let obj = {
        names: names.value,
        id: count++,
        job: job.value,
        salary: salary.value
    }
   api.post(obj).then(e=> show(e));
   
    names.value = ""
    job.value = ""
    salary.value = ""
})

function update(i) {
    api.get(i).then(e=>{
        names.value=e.names;
        job.value=e.job;
        salary.value=e.salary;
        val=e.id;
        savebtn.style.display = "initial";
        addbtn.style.display = "none";

    })
    }

savebtn.addEventListener('click', () => {
    let obj2 = new create(val, names.value, job.value, salary.value)
    api.put(obj2).then(e=>show(e));
    names.value = ""
    job.value = ""
    salary.value = ""
    savebtn.style.display = "none"
    addbtn.style.display = "initial"
})



function show(arr) {
    savebtn.style.display = "none";
    addbtn.style.display = "initial";
    let table = document.getElementById("empDetails");
    table.innerHTML = "";

    arr.forEach((i) => {
        let row = `<tr>
        <td>${i.names}</td>
        <td>${i.job}</td>
        <td>${i.salary}</td>
        
        <td><button onclick="api.delete(${i.id}).then(e=>show(e))">Delete   </button>
        <button onclick="update(${i.id})">Edit </button>
        </td></tr>`
        table.innerHTML = table.innerHTML + row;

    })
}