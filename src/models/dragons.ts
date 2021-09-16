export interface Dragons {
    id: string;
    name: string;
    type: string;
    heat_shield: HeatShield;
    launch_payload_mass: Mass;
    launch_payload_vol: Volume;
    return_payload_mass: Mass;
    return_payload_vol: Volume;
    pressurized_capsule: PressurizedCapsule;
    trunk: Trunk;
    height_w_trunk: Diameter;
    diameter: Diameter;
    first_flight: Date;
    flickr_images: [];
    active: boolean;
    crew_capacity: number;
    sidewall_angle_deg: number;
    orbit_duration_yr: number;
    dry_mass_kg: number;
    dry_mass_lb: number;
    thrusters: Thrusters;
    wikipedia: string;
    description: string;

}
export interface HeatShield {
    material: string;
    size_meters: number;
    temp_degrees: number;
    dev_partner: string;
}
export interface Mass {
    kg: number;
    lb: number;
}
export interface Volume {
    cubic_meters: number;
    cubic_feet: number;
}

export interface PressurizedCapsule {
    payload_volume: Volume;
}
export interface Trunk {
    trunk_volume: Volume;
    cargo: Cargo;
}
export interface Cargo {
    solar_array: number;
    unpressurized_cargo: boolean;
}

export interface Diameter {
    meters: number;
    feet: number;

}

export interface Thrusters {
    type: string;
    amount: number;
    pods: number;
    fuel_1: string;
    fuel_2: string;
    isp: number;
    thrust: Thrust;
}
export interface Thrust {
    kN: number;
    lbf: number;
}