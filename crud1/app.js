let api = new employee();
let names = document.getElementById("names");
let job = document.getElementById("job");
let salary = document.getElementById("salary");
let addbtn = document.getElementById("addbtn");
let savebtn = document.getElementById("savebtn");
let count = 0;
let val = 0;

//create object
function create(id, names, job, salary) {
    this.id = id;
    this.names = names;
    this.job = job;
    this.salary = salary;
}

//after clicking add button this function run
addbtn.addEventListener('click', () => {
    let obj = {
        names: names.value,
        id: count++,
        job: job.value,
        salary: salary.value
    }
    api.post(obj, show);
    names.value = ""
    job.value = ""
    salary.value = ""
})

savebtn.addEventListener('click', () => {
    let obj2 = new create(val, names.value, job.value, salary.value)
    api.put(obj2, show)
    names.value = ""
    job.value = ""
    salary.value = ""
    savebtn.style.display = "none"
    addbtn.style.display = "initial"
})

//after clicking edit button
function update(i) {
    api.get((arr) => {
        let emps = arr.findIndex((a) => a.id === i);
        names.value = arr[emps].names;
        job.value = arr[emps].job;
        salary.value = arr[emps].salary;
        val = arr[emps].id;
        savebtn.style.display = "initial";
        addbtn.style.display = "none";
    });
}

//display function 
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
        
        <td><button onclick="api.delete(${i.id},show)">Delete   </button>
        <button onclick="update(${i.id})">Edit </button>
        </td></tr>`
        table.innerHTML = table.innerHTML + row;

    })
}