export interface Company {
    headquarter: Headquarter;
    links: links;
    name: string;
    founder: string;
    founded: number;
    employees: number;
    vehicles: number;
    launch_sites: number;
    test_sites: number;
    ceo: string;
    cto: string;
    coo: string;
    cto_propulsion: string;
    valuation: number;
    summary: string;
    id: string;
}

export interface Headquarter {
    address: string;
    city: string;
    state: string;
}
export interface links {
    website: string
    flickr: string
    twitter: string
    elonTwitter: string
}
