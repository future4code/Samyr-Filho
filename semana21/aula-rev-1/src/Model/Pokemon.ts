export class Pokemon {
    constructor(
        private RowId: number,
        private Name: string,
        private Pokedex_Number: number,
        private Img_name: number | string,
        private Generation: number,
        private Evolution_Stage: number | String,
        private Evolved: number,
        private FamilyID: number,
        private Cross_Gen: number,
        private Type1: string,
        private Type2: string,
        private Weather1: string,
        private Weather2: string,
        private STAT_TOTAL: number,
        private ATK: number,
        private DEF: number,
        private STA: number,
        private Legendary: number,
        private Aquireable: number,
        private Spawns: number,
        private Regional: number,
        private Raidable: number,
        private Hatchable: number,
        private Shiny: number,
        private Nest: number,
        private New: number,
        private NotGettable: number,
        private Future_Evolve: number,
        private CP40: number,
        private CP39: number
    ){}
    getRowId () {this.RowId}
    getName () {this.Name}
    getImage_Name () { this.Img_name}
    getPokedex_Number () {this.Pokedex_Number}
    getGeneration () {this.Generation}
    getEvolution_Stage () {this.Evolution_Stage}
    getEvolved () {this.Evolved}
    getFamilyID () {this.FamilyID}
    getCross_Gen () {this.Cross_Gen}
    getType1 () {this.Type1}
    getType2 () {this.Type2}
    getWeather1 () {this.Weather1}
    getWeather2 () {this.Weather2}
    getSTAT_TOTAL () {this.STAT_TOTAL}
    getATK () {this.ATK}
    getDEF () {this.DEF}
    getSTA () {this.STA}
    getLegendary () {this.Legendary}
    getAquireable () {this.Aquireable}
    getSpawns () {this.Spawns}
    getRegional () {this.Regional}
    getRaidable () {this.Raidable}
    getHatchable () {this.Hatchable}
    getShiny () {this.Shiny}
    getNest () {this.Nest}
    getNew () {this.New}
    getNotGettable () {this.NotGettable}
    getFuture_Evolve () {this.Future_Evolve}
    getCP40 () {this.CP40}
    getCP39 () {this.CP39}
    
}