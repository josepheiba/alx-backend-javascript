import ClassRoom from './0-classroom';

const initializeRooms = () => {
  const list = [];
  list[0] = new ClassRoom(19);
  list[1] = new ClassRoom(20);
  list[2] = new ClassRoom(34);
  return list;
};

export default initializeRooms;
