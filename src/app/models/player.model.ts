export class Player {
  constructor(
    public firstName: String,
    public lastName: String,
    public team:String,
    public poste: String,
    public prix: number,
    public points: number,
    public rebonds: number,
    public assist: number,
    public interceptions: number,
    public contres: number,
    public minutesEnJeux: number,
    public pourcentageJoues: number,
    public blesse?: Boolean,
    public imageBlesse?: String
       )
      {  
        // this.firstName = 'Luka';
        // this.lastName = 'Doncic';
        // this.dateBirth = new Date();
        // this.team = 'DAL';
        // this.poste = 'F';
        // this.prix = 32;
        // this.points = 36,6;
        // this.rebonds = 9;
        // this.assist = 9,8;
        // this.interceptions = 1,4;
        // this.contres = 0,6;
        // this.minutesEnJeux = 37,6;
        // this.pourcentageJoues = 87;
        // this.blesse = false;
        // this.imageBlesse = '../assets/img/pansement.png';
  }
}