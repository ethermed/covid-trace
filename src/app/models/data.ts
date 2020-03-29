
export interface IPerson {
    name: string
    id: number,
    role: string,
    risk: number,
    status: string,
}

export interface IHospitalZone {
    id: number;
    name: string;
    atRiskCount: number;
    xPos: number;
    yPos: number;
    people: IPerson[];
}

export class IVizElement {
    selection: d3.Selection<any, IVizElement, any, any>;
    group: d3.Selection<SVGGElement, IVizElement, any, any>;
    width: number;
    height: number;
    radius: number;
    x: number;
    y: number;
    constructor(public zone: IHospitalZone) {}
}

export type IVisualizationViewModel = IHospitalZone[];