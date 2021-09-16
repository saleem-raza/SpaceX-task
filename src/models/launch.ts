import { v4 as uuid } from 'uuid';

export interface Launch {
    fairings: Fairings;
    links: Links;
    static_fire_date_utc: Date;
    static_fire_date_unix: number;
    net: boolean;
    window: number;
    rocket: string;
    success: boolean;
    failures: Failure[];
    details: string;
    crew: typeof uuid [];
    ships: typeof uuid [];
    capsules:typeof uuid  [];
    payloads: typeof uuid [];
    launchpad: string;
    flight_number: number;
    name: string;
    date_utc: Date;
    date_unix: number;
    date_local: Date;
    date_precision: string;
    upcoming: boolean;
    cores: CoreInfo[];
    auto_update: true;
    tbd: true;
    launch_library_id: null;
    id: string;
}

export interface CoreInfo {
    core: string,
    flight: number;
    gridfins: boolean;
    legs: boolean;
    reused: boolean;
    landing_attempt: boolean;
    landing_success: null;
    landing_type: null;
    landpad: null;
}
export interface Failure {
    time: number;
    altitude: number;
    reason: string;
}
export interface Fairings {
    reused: boolean;
    recovery_attempt: boolean;
    recovered: boolean;
    ships: [];
}
export interface Patch {
    small: string;
    large: string;
}
export interface Reddit {
    campaign: null;
    launch: null;
    media: null;
    recovery: null;
}
export interface Flickr {
    small: [];
    original: [];
}
export interface Links {
    patch: Patch;
    reddit: Reddit;
    flickr: Flickr;
    presskit: null;
    webcast: string;
    youtube_id: string;
    article: string;
    wikipedia: string;
}
export interface CapsuleTypeFreq{
    id:number;
    frequency: number;
    capsule_type: string;
    total_water_landings:number;
    total_landing_attempt:number;
    total_launches: number;
}