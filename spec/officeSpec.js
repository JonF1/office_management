describe ('Office', function(){
  var office
  beforeEach(function(){
    office = new Office();
    room = new MeetingRoom();
    person = new Person();
  });
  it ('adds a meeting room to the office', function(){
    expect(office.addRoom(room)).toEqual(1)
  });

  it ('returns a list of all meeting rooms', function(){
    office.addRoom(room)
    office.addRoom(room)
    expect(office.list()).toEqual([room, room])
  });

  it('returns a list of available rooms in the office', function() {
    office.addRoom(room)
    office.addRoom(room)
    office.addRoom(room)
    office.enter(person)
    office.enter(person)
    expect(office.availableRooms()).toEqual(1)
  });
});
