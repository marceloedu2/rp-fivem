import { Entity, Vector3 } from 'fivem-js';

RegisterCommand(
  'respawn',
  player => {
    const ped = GetPlayerPed(player);
    const entity = new Entity(ped);

    entity.Position = new Vector3(1839.41, 3672.9, 34.28);
  },
  false,
);
