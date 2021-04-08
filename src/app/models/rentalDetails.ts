import { Rental } from "./rental";

export interface RentalDetail extends Rental {
   brandName: string
   modelYear: string
   firstName: string
   lastName: string
   companyName: string
}

