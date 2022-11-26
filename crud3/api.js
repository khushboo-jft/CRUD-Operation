function employee(){
    this.empData=[];
    //add details 
   
    this.post=(obj)=>{
        const p1=new Promise((resolve,reject)=>{
            setTimeout(() => {
                this.empData.push(obj);
                resolve(this.empData);
                
            }, 2000);
           
        });
        return p1;
        
    }

    this.delete=(obj)=>{
        const p2=new Promise((resolve,reject)=>{
            setTimeout(() => {
                this.empData.splice(this.empData.findIndex((a)=>a.id===obj),1);
                resolve(this.empData);
            }, 2000);
        })
        return p2;
    }

    this.get=(id)=>{
        const p3=new Promise((resolve, reject) => {
            setTimeout(() => {
                for(let i=0;i<this.empData.length;i++){
                    if(this.empData[i].id===id){
                        resolve(this.empData[i]);
                        break;
                    }
                }
            
            }, 2000);

            
        })
        return p3;
    }

    this.put=(obj)=>{
        const p4=new Promise((resolve,reject)=>{
            setTimeout(() => {
                for(let i=0;i<this.empData.length;i++){
                    if(this.empData[i].id==obj.id){
                        this.empData[i]=obj;
                        break;
                    }
                }
                resolve(this.empData);

            }, 2000);
        })
        return p4;
    }




};