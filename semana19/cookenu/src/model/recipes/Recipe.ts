export class Recipe {
    constructor(
        private id: string,
        private userId: string,
        private title: string,
        private descript: string,
        private dateCriation: Date
    ){}
    getId(){
        return this.id
    }
    getUserId(){
        return this.userId
    }
    getTitle(){
        return this.title
    }
    getDescript(){
        return this.descript
    }
    getDateCriation(){
        return this.dateCriation
    }
    static toRecipeModel(data: any): Recipe {
        return new Recipe(
            data.id, 
            data.userId, 
            data.title, 
            data.descript,
            data.dateCriation
            );
    }
}