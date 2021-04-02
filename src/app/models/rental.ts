// export class Rental{
//   id:number;
//   carName:string;
//   brandName:string;
//   // userName:string,
//   customerName:string;
//   rentDate:Date;
//   returnDate:Date;
//   }

export interface Rental{
  rentalId?:number,
  carId:number,
  brandName:string,
  colorName:string,
  firstName?:string,
  lastName?:string,
  companyName?:string,
  modelYear:number,
  dailyPrice:number,
  description:string,
  rentDate:Date,
  returnDate:Date,
  customerId?:number,
}