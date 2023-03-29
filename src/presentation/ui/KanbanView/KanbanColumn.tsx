import clsx from "clsx";
import { Kanban } from "domain/entities/Kanban";
import { KanbanCard } from "./KabanCard";

interface KanbanColumnProps {
    content:Kanban.ColumProps;
}

export function KanbanColumn(props: KanbanColumnProps) {
    console.log(props.content.backlog);
    return (
        <div className="flex flex-col min-w-64 min-h-40">
            <div className={clsx(
                'flex flex-row w-64 justify-between min-h-40  text-white rounded-t-3xl py-2 px-6 text-md font-sanofiSansBold w-full',
                {
                    'bg-sanofiPurpleDark': props.content.title == "Backlog",
                    'bg-[#525CA3]': props.content.title == "Em tratamento",
                    'bg-[#BE006B]': props.content.title == "Com Solicitante",
                    'bg-[#CF483E]': props.content.title == "Regras",
                    'bg-[#478040]': props.content.title == "Completo",
                },
            )}>
                <h2>{props.content.title}</h2>
                <p>{props.content.backlog.length}</p>
            </div>
            <div className={clsx(
                'flex flex-col w-64 min-h-40 bg-violet-300 rounded-b-3xl p-3 gap-3',
                {
                    'bg-[#22004C4D]': props.content.title == "Backlog",
                    'bg-[#525CA34D]': props.content.title == "Em tratamento",
                    'bg-[#BE006B4D]': props.content.title == "Com Solicitante",
                    'bg-[#CF483E4D]': props.content.title == "Regras",
                    'bg-[#4780404D]': props.content.title == "Completo",
                },
            )}>
                {props.content.backlog.map((item, index) => (
                    <KanbanCard
                        key={index}
                        content={{
                            vim: item.vim,
                            tipo: item.tipo,
                            status: item.status,
                            prioridade: item.prioridade,
                            agente: item.agente,
                            adicionado: item.adicionado,
                            vencimento: item.vencimento,
                            motivo: item.motivo,
                            nome: item.nome,
                        }} />
                ))}
            </div>
        </div>
    );
}