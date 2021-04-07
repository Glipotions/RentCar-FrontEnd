import { Rental } from "./rental";

export interface RentalDetail extends Rental {
   carBrand: string
   carModel: string
   customerFirstName: string
   customerLastName: string
   companyName: string
}

