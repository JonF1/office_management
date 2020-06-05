class Office extends MeetingRoom {
  constructor() {
    super();
    this.number_of_rooms = []
  }

  addRoom(room){
    return this.number_of_rooms.push(room)
  }

  list(){
    return this.number_of_rooms;
  }

  enter(person){
    return this.room.push(person);
  }

  availableRooms(){
    let available = (this.number_of_rooms.length - this.room.length)
    return available
  }
}
