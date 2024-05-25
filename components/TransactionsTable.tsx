import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn, formatAmount, formatDateTime, getTransactionStatus, removeSpecialCharacters } from "@/lib/utils";
import { transactionCategoryStyles } from "@/constants";
function CategoryBadge({category} : CategoryBadgeProps){
    const {    borderColor,
        backgroundColor,
        textColor,
        chipBackgroundColor} = transactionCategoryStyles[category as keyof typeof transactionCategoryStyles] || transactionCategoryStyles.default
    return (
        <div className={cn('category-badge',borderColor,chipBackgroundColor)}>
            <div className={cn('size-2 rounded-full',backgroundColor)}/>
            <p className={cn('text-[12px] font-medium',textColor)}>{category}</p>
        </div>
    )
}
function TransactionsTable({ transactions }: TransactionTableProps) {
    console.log(transactions)
  return (
    <Table>
      <TableHeader className="bg-[#f9fafb]">
        <TableRow className="px-2">
          <TableHead className="">Transaction</TableHead>
          <TableHead className="">Amount</TableHead>
          <TableHead className="">Status</TableHead>
          <TableHead className="">Date</TableHead>
          <TableHead className=" max-md:hidden">Channel</TableHead>
          <TableHead className=" max-md:hidden">Category</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction:Transaction)=>{
            const status = getTransactionStatus(new Date(transaction.date))
            const amount = formatAmount(transaction.amount)
            const isDebit = transaction.type === 'debit'
            const isCredit = transaction.type === 'credit'
            return (
                <TableRow key={transaction.id} className={`${isDebit || amount[0] == '-' ? 'bg-[#fffbfa]' : 'bg-[#f6fef9]' } !over:bg-none !border-b-DEFAULT`}>
                    <TableCell className="max-w-[250px]">
                        <div className="flex items-center gap-2">
                            <h1 className="text-12 truncate font-semibold text-[#344054]">{removeSpecialCharacters(transaction.name)}</h1>
                        </div>
                    </TableCell>
                    <TableCell className={`${isDebit || amount[0] == '-' ? 'text-[#f04438]' : 'text-[#039855]' } font-normal`}>
                        <p className="text-[10px] md:text-14">
                        {isDebit ? `-${amount}` : isCredit ? amount : amount }
                        </p>
                    </TableCell>
                    <TableCell>
                        <CategoryBadge category={status}/>
                    </TableCell>
                    <TableCell className="min-w-32">
                        {formatDateTime(new Date(transaction.date)).dateTime}
                    </TableCell>
                    <TableCell className="max-md:hidden">
                        <p className=" pl-2">
                        {transaction.paymentChannel}
                        </p>
                    </TableCell>
                    <TableCell className="max-md:hidden">
                        <CategoryBadge category={transaction.category}/>
                    </TableCell>
                </TableRow>
            )
        })}
      </TableBody>
    </Table>
  );
}

export default TransactionsTable;
