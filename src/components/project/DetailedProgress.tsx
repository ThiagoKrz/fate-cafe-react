import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface ProgressItem {
  script: string;
  trad: number;
  rev: number;
  ed: number;
  total: number;
  resp: string;
}

interface ProgressSection {
  section: string;
  colorClass: string;
  items: ProgressItem[];
}

export default function DetailedProgress({ data }: { data: ProgressSection[] }) {
  // Função para calcular a média de uma lista de itens
  const calculateAverage = (items: ProgressItem[]) => {
    if (items.length === 0) return 0;
    const sum = items.reduce((acc, item) => acc + item.total, 0);
    return Math.floor(sum / items.length);
  };

  // Lógica para extrair os dados das rotas e calcular totais
  const arcueidData = data.find(d => d.section.includes("Arcueid"))?.items || [];
  const cielData = data.find(d => d.section.includes("Ciel"))?.items || [];
  
  const arcPercent = calculateAverage(arcueidData);
  const cielPercent = calculateAverage(cielData);
  const totalPercent = calculateAverage(data.flatMap(d => d.items));

  // Define a cor baseada na percentagem
  const getStatusClass = (val: number) => {
    if (val === 100) return "bg-green-900/40 text-green-300";
    if (val > 0) return "bg-yellow-900/40 text-yellow-200";
    return "bg-red-900/40 text-red-300";
  };

  return (
    <div className="bg-[#3E322F] p-6 rounded-lg border border-[#5A4A44] shadow-lg">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="progress" className="border-none">
          <AccordionTrigger className="hover:no-underline py-0 group">
            <div className="flex flex-col w-full text-left">
              <h3 className="text-3xl font-bold text-[#D4A373] group-hover:text-white transition-colors">
                Progresso Detalhado
              </h3>
              
              {/* Resumo visual com fontes ajustadas */}
              <div className="flex flex-wrap gap-3 md:gap-6 mt-4 pb-2 border-b-2 border-[#5A4A44] w-full">
                <div className="flex items-center gap-2">
                  <span className="text-[13px] uppercase text-gray-400 font-black tracking-wider">Arcueid:</span>
                  <span className={`text-sm font-mono font-bold px-2 py-0.5 rounded ${getStatusClass(arcPercent)}`}>
                    {arcPercent}%
                  </span>
                </div>
                <div className="flex items-center gap-2 border-l border-[#5A4A44] pl-4">
                  <span className="text-[13px] uppercase text-gray-400 font-black tracking-wider">Ciel:</span>
                  <span className={`text-sm font-mono font-bold px-2 py-0.5 rounded ${getStatusClass(cielPercent)}`}>
                    {cielPercent}%
                  </span>
                </div>
                <div className="flex items-center gap-2 border-l border-[#5A4A44] pl-4">
                  <span className="text-[13px] uppercase text-white font-black tracking-wider">Total:</span>
                  <span className="text-sm font-mono font-bold px-2 py-0.5 rounded bg-[#D4A373] text-[#2A2320]">
                    {totalPercent}%
                  </span>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          
          <AccordionContent className="pt-6">
            <div className="overflow-x-auto rounded-md border border-[#5A4A44]">
              <Table className="min-w-[650px]">
                <TableHeader>
                  <TableRow className="bg-[#4A3B36] hover:bg-[#4A3B36] border-[#5A4A44]">
                    <TableHead className="text-[#D4A373] font-bold">Capítulo / Script</TableHead>
                    <TableHead className="text-[#D4A373] font-bold text-center">Trad.</TableHead>
                    <TableHead className="text-[#D4A373] font-bold text-center">Rev.</TableHead>
                    <TableHead className="text-[#D4A373] font-bold text-center">Edição</TableHead>
                    <TableHead className="text-[#D4A373] font-bold text-center">Geral</TableHead>
                    <TableHead className="text-[#D4A373] font-bold hidden sm:table-cell">Staff</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((group, idx) => (
                    <React.Fragment key={`group-${idx}`}>
                      <TableRow className="hover:bg-transparent border-[#5A4A44]">
                        <TableCell colSpan={6} className={`${group.colorClass} text-[#2A2320] font-black uppercase tracking-widest py-2 text-center text-xs`}>
                          {group.section}
                        </TableCell>
                      </TableRow>
                      
                      {group.items.map((item, i) => (
                        <TableRow key={`${idx}-${i}`} className="border-[#5A4A44] hover:bg-[#5A4A44]/20 transition-colors">
                          <TableCell className="font-semibold text-[#EAE0D5] border-r border-[#5A4A44]/30">
                            {item.script}
                          </TableCell>
                          <TableCell className={`text-center font-medium border-r border-[#5A4A44]/30 ${getStatusClass(item.trad)}`}>
                            {item.trad}%
                          </TableCell>
                          <TableCell className={`text-center font-medium border-r border-[#5A4A44]/30 ${getStatusClass(item.rev)}`}>
                            {item.rev}%
                          </TableCell>
                          <TableCell className={`text-center font-medium border-r border-[#5A4A44]/30 ${getStatusClass(item.ed)}`}>
                            {item.ed}%
                          </TableCell>
                          <TableCell className={`text-center font-black border-r border-[#5A4A44]/30 ${getStatusClass(item.total)}`}>
                            {item.total}%
                          </TableCell>
                          <TableCell className="hidden sm:table-cell text-[10px] text-[#9B8D82] font-medium">
                            {item.resp}
                          </TableCell>
                        </TableRow>
                      ))}
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}