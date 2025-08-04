import Image from "next/image";
import total from "@/assets/images/Icon.svg";
import active from "@/assets/images/Icon-1.svg";
import inactive from "@/assets/images/Icon-2.svg";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import AppDialog from "@/components/native/app-dialog";
import { AppTable } from "@/components/native/app-table";

export default function Page() {
  return (
    <>
      <div className="ml-15 mt-10 space-y-3 mb-10">
        <h1 className="text-[#2B3A4B] text-5xl">Olá Ewerton,</h1>
        <p className="text-[#858C94] text-2xl">
          Cadastre e gerencie seus veiculos
        </p>
      </div>

      <div className="flex items-center gap-12 ml-15 mb-9">
        <div className="w-72 p-5 shadow-md rounded-md flex gap-6">
          <Image src={total} alt="" />
          <div className="space-y-2">
            <h6 className="text-[#A3AED0]">Total</h6>
            <span className="text-[#1B2559] text-4xl font-bold">350</span>
          </div>
        </div>

        <div className="w-72 p-5 shadow-md rounded-md flex gap-6">
          <Image src={active} alt="" />
          <div className="space-y-2">
            <h6 className="text-[#A3AED0]">Ativos</h6>
            <span className="text-[#1B2559] text-4xl font-bold">350</span>
          </div>
        </div>

        <div className="w-72 p-5 shadow-md rounded-md flex gap-6">
          <Image src={inactive} alt="" />
          <div className="space-y-2">
            <h6 className="text-[#A3AED0]">Total</h6>
            <span className="text-[#1B2559] text-4xl font-bold">350</span>
          </div>
        </div>
      </div>

      <div className="ml-15 mb-9">
        <Dialog>
          <DialogTrigger>
            <Button className="rounded-2xl cursor-pointer bg-[#007AFF]">
              <PlusCircle></PlusCircle>
              Cadastrar Veículo
            </Button>
          </DialogTrigger>
          <AppDialog/>
        </Dialog>
      </div>

      <div className="ml-15">
        <AppTable></AppTable>
      </div>
    </>
  );
}
