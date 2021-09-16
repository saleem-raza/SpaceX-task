import { v4 as uuid } from 'uuid';
import { CoreStatus } from './enums';
export interface Core {
    block: null,
    reuse_count: number,
    rtls_attempts: number
    rtls_landings: number
    asds_attempts: number
    asds_landings: number
    last_update: string
    launches: typeof uuid[]
    serial: string
    status: CoreStatus
    id: string
}
