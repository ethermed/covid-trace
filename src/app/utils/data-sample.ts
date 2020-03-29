import { IHospitalZone } from '../models/data';

export const SampleLocationData: IHospitalZone[] = [
    {
        id: 1,
        name: "room10",
        atRiskCount: 15,
        xPos: 30,
        yPos: 20,
        people: [
            {
                name: "Bob",
                id: 10,
                role: "doctor",
                risk: 0.75,
                status: "at-risk",
            }
        ]
    },
    {
        id: 2,
        name: "room20",
        atRiskCount: 37,
        xPos: 56,
        yPos: 94,
        people: [
            {
                name: "Tom",
                id: 10,
                role: "doctor",
                risk: 0.75,
                status: "at-risk",
            },
            {
                name: "Susan",
                id: 10,
                role: "patient",
                risk: 0.75,
                status: "infected",
            }
        ]
    },
    {
        id: 3,
        name: "operating room1",
        atRiskCount: 65,
        xPos: 10,
        yPos: 50,
        people: [
            {
                name: "Jim",
                id: 10,
                role: "nurse",
                risk: 0.75,
                status: "at-risk",
            },
            {
                name: "Kim",
                id: 10,
                role: "patient",
                risk: 0.75,
                status: "infected",
            },
            {
                name: "Edith",
                id: 10,
                role: "doctor",
                risk: 0.89,
                status: "at-risk",
            },
        ]
    },
    {
        id: 4,
        name: "room40",
        atRiskCount: 75,
        xPos: 55,
        yPos: 65,
        people: [
            {
                name: "Bob",
                id: 10,
                role: "doctor",
                risk: 0.75,
                status: "at-risk",
            }
        ]
    },
    {
        id: 5,
        name: "room50",
        atRiskCount: 100,
        xPos: 70,
        yPos: 43,
        people: [
            {
                name: "Bob",
                id: 10,
                role: "doctor",
                risk: 0.75,
                status: "at-risk",
            }
        ]
    },
    {
        id: 5,
        name: "room50",
        atRiskCount: 84,
        xPos: 28,
        yPos: 68,
        people: [
            {
                name: "Bob",
                id: 10,
                role: "doctor",
                risk: 0.75,
                status: "at-risk",
            }
        ]
    },
    {
        id: 5,
        name: "room50",
        atRiskCount: 54,
        xPos: 10,
        yPos: 28,
        people: [
            {
                name: "Bob",
                id: 10,
                role: "doctor",
                risk: 0.75,
                status: "at-risk",
            }
        ]
    },
];
