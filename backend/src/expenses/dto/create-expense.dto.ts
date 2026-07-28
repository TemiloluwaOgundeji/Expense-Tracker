import {
  IsEnum,
  IsNumber,
  IsString,
  IsDateString,
} from "class-validator";

export enum Category {
  Food = "Food",
  Transport = "Transport",
  Shopping = "Shopping",
  Bills = "Bills",
  Entertainment = "Entertainment",
  Other = "Other",
}

export enum PaidBy {
  Me = "Me",
  Partner = "Partner",
}

export class CreateExpenseDto {
  @IsString()
  description: string;

  @IsNumber()
  amount: number;

  @IsDateString()
  date: string;

  @IsEnum(Category)
  category: Category;

  @IsEnum(PaidBy)
  paidBy: PaidBy;
}