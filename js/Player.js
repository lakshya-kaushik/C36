class Player {
  constructor(){
    this.index=null;
    this.distance=0;
    this.name=null;

  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

    //update the information for all players in all the database 
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
    name:this.name,
    distance:this.distance
    });
  }
  //this will print all the  information about players getting it from database
  //static function is called by class itself raither than by object
  static getPlayerInfo(){
    var playerInfoRef=database.ref('players');
    //arrow function attaches thr function to orignal object that calls it
    playerInfoRef.on("value",(data)=>{
      allPlayers=data.val()
    })
  }
}
