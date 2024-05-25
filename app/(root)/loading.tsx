/**
 * v0 by Vercel.
 * @see https://v0.dev/t/gUlmX5xR87g
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Skeleton } from "@/components/ui/skeleton"
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export default function loading() {
  return (
    <section className="w-full max-w-[860px] mx-auto py-12 md:py-16 lg:py-20">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="text-left">
            <Skeleton className="h-8 w-[300px] mb-4" />
            <Skeleton className="h-6 w-[500px]" />
          </div>
          <Skeleton className="h-10 w-[120px]" />
        </div>
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
          <div className="p-6 sm:p-8">
            <Skeleton className="h-6 w-[300px] mb-4" />
            <Skeleton className="h-5 w-[400px]" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-[200px]" />
          <Skeleton className="h-10 w-[120px]" />
        </div>
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
          <Tabs className="w-full" defaultValue="features">
            <TabsList className="border-b border-gray-200 dark:border-gray-800">
              <TabsTrigger value="features">
                <Skeleton className="h-5 w-[100px]" />
              </TabsTrigger>
              <TabsTrigger value="pricing">
                <Skeleton className="h-5 w-[100px]" />
              </TabsTrigger>
              <TabsTrigger value="support">
                <Skeleton className="h-5 w-[100px]" />
              </TabsTrigger>
            </TabsList>
            <TabsContent value="features">
              <div className="p-6 sm:p-8">
                <Skeleton className="h-6 w-[200px] mb-4" />
                <Skeleton className="h-5 w-[400px]" />
              </div>
            </TabsContent>
            <TabsContent value="pricing">
              <div className="p-6 sm:p-8">
                <Skeleton className="h-6 w-[200px] mb-4" />
                <Skeleton className="h-5 w-[400px]" />
              </div>
            </TabsContent>
            <TabsContent value="support">
              <div className="p-6 sm:p-8">
                <Skeleton className="h-6 w-[200px] mb-4" />
                <Skeleton className="h-5 w-[400px]" />
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Skeleton className="h-5 w-[100px]" />
                </TableHead>
                <TableHead>
                  <Skeleton className="h-5 w-[200px]" />
                </TableHead>
                <TableHead>
                  <Skeleton className="h-5 w-[100px]" />
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Skeleton className="h-5 w-[100px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-[200px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-[100px]" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Skeleton className="h-5 w-[100px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-[200px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-[100px]" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Skeleton className="h-5 w-[100px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-[200px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-[100px]" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Skeleton className="h-5 w-[100px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-[200px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-[100px]" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}