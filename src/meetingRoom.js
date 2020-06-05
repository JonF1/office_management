class MeetingRoom {
  constructor() {
    this.room = []
  }
  is_available(){
    return this.room.length;
  }
  enter(person){
    if (this.room.length == 1) {
      throw "This room is unavailable";
    } else {
      return this.room.push(person);}
  }

  leave(){
    this.room.pop
    return this.room.length
  }

  name(the_name){
    let name_of_room = the_name
    return name_of_room
  }
}
