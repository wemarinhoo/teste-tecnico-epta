import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2, Box} from "lucide-react"

const vehicles = [
  { veiculo: "Fiat Strada", placa: "BRA2D19", status: "Ativo" },
  { veiculo: "Volkswagen Polo", placa: "XYZ4A72", status: "Ativo" },
  { veiculo: "Chevrolet Onix", placa: "JQL7C03", status: "Ativo" },
  { veiculo: "Chevrolet Tracker", placa: "MRN9F85", status: "Ativo" },
  { veiculo: "Volkswagen T-Cross", placa: "LHV3E66", status: "Ativo" },
  { veiculo: "Fiat Argo", placa: "TPW6B10", status: "Ativo" },
  { veiculo: "Nissan Kicks", placa: "KZX1D44", status: "Ativo" },
]

export function AppTable() {
  return (
    <div className="rounded-md  w-full">
      <Table>
        <TableHeader className="bg-muted">
          <TableRow>
            <TableHead className="w-[200px]">Veículo</TableHead>
            <TableHead>Placa</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right pr-4">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vehicles.map((v, i) => (
            <TableRow key={i} className={i % 2 === 1 ? "bg-muted/50" : ""}>
              <TableCell>{v.veiculo}</TableCell>
              <TableCell>{v.placa}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span>{v.status}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex justify-end gap-2">
                  <Button size="icon" variant="ghost" className="shadow-md">
                    <Pencil size={16} />
                  </Button>
                  <Button size="icon" variant="ghost" className="shadow-md">
                   <Box size={16} />
                  </Button>
                  <Button size="icon" variant="ghost" className="shadow-md">
                    <Trash2 size={16} className="text-red-500" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
