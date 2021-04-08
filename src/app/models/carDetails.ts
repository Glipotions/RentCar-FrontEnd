import { Car } from "./car";

export class CarDetails implements Car{
    id: number;
    carName: string;
    brandId: number;
    colorId: number;
    modelYear: number;
    dailyPrice: number;
    description: string;
    brandName: string;
    colorName: string;
    imagePath:string;
    status:boolean;
    findexPoint:number;
}