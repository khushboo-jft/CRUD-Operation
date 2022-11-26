function employee(){
    this.empData=[];
    //add details 
    this.post=(obj,display)=>{
        setTimeout(() => {
            this.empData.push(obj);
            display(this.empData);
        },2000);
    }
    //display
    this.get=(cb)=>{
        setTimeout(() => {
            cb(this.empData);
        }, 2000);
        
    }
    //delete
    this.delete=(obj,display)=>{
        setTimeout(() => {
            this.empData.splice(this.empData.findIndex((a)=>a.id===obj),1);
            display(this.empData);
            
        }, 2000);
    }
    //upadte
    this.put=(obj,display)=>{
        setTimeout(() => {
            for(let i=0;i<this.empData.length;i++){
                if(this.empData[i].id==obj.id)
                {
                    this.empData[i]=obj;
                    break;
                }
            }
            display(this.empData);
        }, 2000);

    }
}