export class Quotes {
    showDescription: boolean;
    constructor(
    public quote: string,
    public author:string,
    public postedBy: string,
    public datePosted:Date){
        this.showDescription=false;
    }

}
