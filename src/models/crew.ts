import { v4 as uuid } from 'uuid';
import { CrewStatus } from './enums';
export interface Crew {
    name: string;
    agency: string;
    image: string;
    wikipedia: string;
    launches: typeof uuid[];
    status: CrewStatus;
    id: typeof uuid;
}
