RegisterCommand(
  'rename',
  (name: string) => {
    console.log('Here =>');
    // emit('myCoordinates', null);
    emitNet('foo:serverCalledYou', name);
  },
  false,
);
