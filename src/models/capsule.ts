import { v4 as uuid } from 'uuid';
import {CapsuleStatus,CapsuleType} from 'src/models/enums';

export interface Capsule
{
    reuse_count:number;
    water_landings: number;
    land_landings: number;
    last_update:string;
    launches:typeof uuid [];
    serial: string;
    status: CapsuleStatus;
    type: CapsuleType;
    id: typeof uuid;
   
}

 