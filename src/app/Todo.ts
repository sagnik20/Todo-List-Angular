export class Todo{
    sno: number 
    title: string 
    desc: string 
    active: boolean 

    constructor(sno:number,title:string,desc:string,active:boolean){
        this.sno = sno;
        this.title = title;
        this.active = active;
        this.desc = desc;
    }
}