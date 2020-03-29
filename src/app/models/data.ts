
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

export class IVizElement<T> {
    selection: d3.Selection<any, IVizElement<T>, any, any>;
    group: d3.Selection<SVGGElement, IVizElement<T>, any, any>;
    width: number;
    height: number;
    radius: number;
    x: number;
    y: number;
    constructor(public data: T) {}
}

export type IVisualizationViewModel = IHospitalZone[];

export interface IStatusDatum {
    status: string;
    count: number;
    x1?: number;
    x2?: number;
}