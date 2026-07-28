import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateExpenseDto } from "./dto/create-expense.dto";
import { UpdateExpenseDto } from "./dto/update-expense.dto";

@Injectable()
export class ExpensesService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(dto: CreateExpenseDto) {
    return this.prisma.expense.create({
      data: {
        description: dto.description,
        amount: dto.amount,
        category: dto.category,
        paidBy: dto.paidBy,
        date: new Date(dto.date),
      },
    });
  }

  async findAll() {
    return this.prisma.expense.findMany({
      orderBy: {
        date: "desc",
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.expense.findUnique({
      where: { id },
    });
  }

  async update(
    id: string,
    dto: UpdateExpenseDto,
  ) {
    return this.prisma.expense.update({
      where: { id },
      data: {
        ...(dto.description !== undefined && {
          description: dto.description,
        }),
        ...(dto.amount !== undefined && {
          amount: dto.amount,
        }),
        ...(dto.category !== undefined && {
          category: dto.category,
        }),
        ...(dto.paidBy !== undefined && {
          paidBy: dto.paidBy,
        }),
        ...(dto.date !== undefined && {
          date: new Date(dto.date),
        }),
      },
    });
  }

  async remove(id: string) {
    return this.prisma.expense.delete({
      where: { id },
    });
  }
}