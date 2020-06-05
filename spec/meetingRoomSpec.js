describe("MeetingRoom", function() {
  var room;
  beforeEach(function() {
    room = new MeetingRoom();
    person = new Person();
  });

  it ("checks if a meeting room is available",function() {
    expect(room.is_available()).toEqual(0);
  });

  it ("makes the room unavailable if entered", function() {
    expect(room.enter(person)).toEqual(1);
  });

  it ("makes the room available again after leaving", function() {
    expect(room.leave()).toEqual(0);
  });

  it ("throws an error is room has been entered already", function() {
    room.enter(person)
    expect(function() {room.enter();}).toThrow("This room is unavailable")
  });

  it ('names the room', function (){
    expect(room.name("A new room name")).toEqual("A new room name")
  });
});
