export class Pokemon {
    constructor(
        private RowId: string,
        private Name: string,
        private Pokedex_Number: string,
        private Img_name: string,
        private Generation: string,
        private Evolution_Stage: string,
        private Evolved: string,
        private FamilyID: string,
        private Cross_Gen: string,
        private Type1: string,
        private Type2: string,
        private Weather1: string,
        private Weather2: string,
        private STAT_TOTAL: string,
        private ATK: string,
        private DEF: string,
        private STA: string,
        private Legendary: string,
        private Aquireable: string,
        private Spawns: string,
        private Regional: string,
        private Raidable: string,
        private Hatchable: string,
        private Shiny: string,
        private Nest: string,
        private New: string,
        private NotGettable: string,
        private Future_Evolve: string,
        private CP40: string,
        private CP39: string
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