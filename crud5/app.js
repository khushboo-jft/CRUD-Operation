$(document).ready(function(){
let hiddenid;
    $('#table').on('click','.btn-edit',function(){
        hiddenid=this.id;
        $.ajax({
            url:`http://localhost:3002/employee/${this.id}`,
            type:'GET',
            success:function(product){
                console.log(product)
                $("#names").val(product.names);
                $("#job").val(product.job);
                $("#salary").val(product.salary);
                $("#addbtn").hide();
                $("#savebtn").show();
            }
        })
    });
    $("#table").on('click','.btn-delete',function(){
         $.ajax({
            url:`http://localhost:3002/employee/${this.id}`,
            method:'DELETE',
            success: function(){
                loadData();

            }
        })
    });
   $('#addbtn').click(function(){
        var names=$("#names").val();
        var job=$("#job").val();
        var salary=$("#salary").val();
        $.ajax({
            url:"http://localhost:3002/employee",
            type:'POST',
            data:{
                'names':names,
                'job':job,
                'salary':salary
            },
            success:function(response){
               clearForm();
                loadData(response);
                console.log(response);
            }
        })
     })/
    $("#savebtn").click( function(){
        var names=$("#names").val();
        var job=$("#job").val();
        var salary=$("#salary").val();
        $.ajax({
            url:`http://localhost:3002/employee/${hiddenid}`,
            type:'PUT',
            data:{
                names:names,
                job:job,
                salary:salary,
            },
            success: function(response){
                clearForm()
                loadData(response);
            }
        })
    });
    function clearForm(){
        $("#names").val("");
        $("#job").val("");
        $("#salary").val("");
        $("#addbtn").show();
        $("#savebtn").hide();
    }
    function loadData(){
    $.ajax({
        type: "GET",
        url:"http://localhost:3002/employee",
        beforeSend: clearForm(),
        success: function(arr){
        $("#empDetails").html("");
        arr.forEach( (i) =>{
        let tabb = `<tr>
        <td>${i.names}</td>
        <td>${i.job}</td>
        <td>${i.salary}</td>
        <td><button class='btn btn-sm btn-success btn-edit' id="${i.id}">Edit</button>
            <button class='btn btn-sm btn-success btn-delete' id="${i.id}">Delete</button>
        </td></tr>`
        $("#empDetails").append(tabb)
         })
        }
    })
}
   (()=>{
    
        loadData(JSON.parse(localStorage.getItem("data"))||[])
    
    })();
})
        