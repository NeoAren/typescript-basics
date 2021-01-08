// TypeScript Advanced: Discriminated Unions

interface TorchDrive {
   type: 'torch';
   maxAcceleration: number;
}

interface FusionDrive {
   type: 'fusion';
   maxSafeAcceleration: number;
}

type DriveType = TorchDrive | FusionDrive;

function useDrive(drive: DriveType) {
   let acceleration = 0;
   switch (drive.type) {
      case 'torch': {
         acceleration = drive.maxAcceleration;
         break;
      }
      case 'fusion': {
         acceleration = drive.maxSafeAcceleration;
         break;
      }
   }
   console.log('Accelerating at ' + acceleration + 'g-s.');
}

useDrive({ type: 'torch', maxAcceleration: 2 });
useDrive({ type: 'fusion', maxSafeAcceleration: 15 });
