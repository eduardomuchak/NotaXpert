import clsx from "clsx";
import { Backlog } from "domain/entities/Backlog";
import { Kanban } from "domain/entities/Kanban";


export function KanbanView(props: Kanban.BacklogKanbanProps) {
    return (
        <div className="w-full flex flex-row gap-6">
            <KanbanColumn backlog={props.backlog.filter((nf) => nf.status === "Backlog")} title="Backlog" />
            <KanbanColumn backlog={props.backlog.filter((nf) => nf.status === "Em tratamento")} title="Em tratamento" />
            <KanbanColumn backlog={props.backlog.filter((nf) => nf.status === "Com Solicitante")} title="Com Solicitante" />
            <KanbanColumn backlog={props.backlog.filter((nf) => nf.status === "Regras")} title="Regras" />
            <KanbanColumn backlog={props.backlog.filter((nf) => nf.status === "Completo")} title="Completo" />
        </div>
    );
}

export function KanbanColumn(props: Kanban.ColumProps) {
    return (
        <div className="flex flex-col min-w-64 min-h-40">
            <div className={clsx(
                'flex flex-row w-64 justify-between min-h-40  text-white rounded-t-3xl py-2 px-6 text-md font-sanofiSansBold w-full',
                {
                    'bg-sanofiPurpleDark': props.title == "Backlog",
                    'bg-[#525CA3]': props.title == "Em tratamento",
                    'bg-[#BE006B]': props.title == "Com Solicitante",
                    'bg-[#CF483E]': props.title == "Regras",
                    'bg-[#478040]': props.title == "Completo",
                },
            )}>
                <h2>{props.title}</h2>
                <text>{props.backlog.length}</text>
            </div>
            <div className={clsx(
                'flex flex-col w-64 min-h-40 bg-violet-300 rounded-b-3xl p-3 gap-3',
                {
                    'bg-[#22004C4D]': props.title == "Backlog",
                    'bg-[#525CA34D]': props.title == "Em tratamento",
                    'bg-[#BE006B4D]': props.title == "Com Solicitante",
                    'bg-[#CF483E4D]': props.title == "Regras",
                    'bg-[#4780404D]': props.title == "Completo",
                },
            )}>
                {props.backlog.map((item, index) => (
                    <KanbanCard
                        key={index}
                        vim={item.vim}
                        tipo={item.tipo}
                        status={item.status}
                        prioridade={item.prioridade}
                        agente={item.agente}
                        adicionado={item.adicionado}
                        vencimento={item.vencimento}
                        motivo={item.motivo}
                        nome={item.nome} />
                ))}
            </div>
        </div>
    );
}

export function KanbanCard(props: Backlog.BacklogContent) {
    return (
        <div className="flex flex-col rounded-3xl bg-white p-3">
            <text className="flex bg-sanofiPurpleDark text-white rounded-full w-fit py-1 px-2 text-xs">{props.tipo}</text>
            <h2 className="font-sanofiSansBold text-md w-full flex pt-1">{props.vim}</h2>
            {props.prioridade == "Urgente" ? (
                <div className="flex flex-row text-red-600 text-xs items-end leading-3 gap-1 py-2">
                    <svg width="13" height="13" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.725 14.5001H14.275C15.5583 14.5001 16.3583 13.1084 15.7167 12.0001L9.44167 1.1584C8.8 0.0500651 7.2 0.0500651 6.55833 1.1584L0.283333 12.0001C-0.358334 13.1084 0.441666 14.5001 1.725 14.5001ZM8 8.66673C7.54167 8.66673 7.16667 8.29173 7.16667 7.8334V6.16673C7.16667 5.7084 7.54167 5.3334 8 5.3334C8.45833 5.3334 8.83333 5.7084 8.83333 6.16673V7.8334C8.83333 8.29173 8.45833 8.66673 8 8.66673ZM8.83333 12.0001H7.16667V10.3334H8.83333V12.0001Z" fill="#CF483E" />
                    </svg>
                    <text>Urgente</text>
                </div>
            ) : null}
            <div className="text-xs flex flex-col gap-px">
                <text className="text-sm flex w-full font-sanofiSansBold">{props.agente}</text>
                <text>Adicionado em: {props.adicionado}</text>
                <text>Vence em: {props.vencimento}</text>
            </div>
        </div>
    );
}