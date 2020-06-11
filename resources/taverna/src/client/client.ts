onNet('foo:serverCalledYou', (newName: string) => {
  console.warn(`Someone change your name to ${newName}`);

  if (newName.toLowerCase() === 'idiot') {
    console.warn("Looks like he didn't like you.");
  }
});
