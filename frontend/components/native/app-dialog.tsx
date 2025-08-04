"use client";

import {
  DialogContent,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog";
import { Car } from "lucide-react";

export default function AppDialog() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="flex items-center justify-center gap-3 mb-4">
          <Car size={32} /> Cadastrar novo veículo
        </DialogTitle>
      </DialogHeader>
      <div className="mb-1">
        <label htmlFor="nome-veiculo" className="text-sm">
          Nome do Veículo
        </label>
        <input
          type="text"
          placeholder="Digite o nome do veículo"
          className="border-1 border-black/25 w-full rounded-xl h-10 px-2 bg-white text-sm outline-0 focus:border-[#007AFF] duration-300"
        />
      </div>

      <div className="mb-1">
        <label htmlFor="email" className="text-sm">
          Placa do veículo
        </label>
        <input
          type="text"
          placeholder="Digite a placa do veículo"
          className="border-1 border-black/25 w-full rounded-xl h-10 px-2 bg-white text-sm outline-0 focus:border-[#007AFF] duration-300"
        />
      </div>

      <button
        type="submit"
        className="w-full text-center font-bold text-white bg-[#007AFF] p-2 rounded-xl cursor-pointer hover:opacity-90 duration-300 shadow-xl"
      >
        Cadastrar veículo
      </button>
    </DialogContent>
  );
}
