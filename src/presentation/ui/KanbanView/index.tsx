import clsx from "clsx";
import { Kanban } from "domain/entities/Kanban";


export function KanbanView() {
    return (
        <div className="w-full overflow-x-scroll flex flex-row gap-6">
            <KanbanColumn title="Backlog" />
            <KanbanColumn title="Em tratamento" />
            <KanbanColumn title="Com Solicitante" />
            <KanbanColumn title="Regras" />
            <KanbanColumn title="Completo" />
        </div>
    );
}

export function KanbanColumn(props: Kanban.ColumProps) {
    return (
        <div className="flex flex-col w-64 min-h-40">
            <div className={clsx(
                'flex flex-row w-full justify-between min-h-40  text-white rounded-t-3xl py-2 px-6 text-md font-sanofiSansBold w-full',
                {
                    'bg-sanofiPurpleDark': props.title == "Backlog",
                    'bg-[#525CA3]': props.title == "Em tratamento",
                    'bg-[#BE006B]': props.title == "Com Solicitante",
                    'bg-[#CF483E]': props.title == "Regras",
                    'bg-[#478040]': props.title == "Completo",
                },
            )}>
                <h2>{props.title}</h2>
                <text>X</text>
            </div>
            <div className={clsx(
                'flex flex-col w-full min-h-40 bg-violet-300 rounded-b-3xl p-3 gap-3',
                {
                    'bg-[#22004C4D]': props.title == "Backlog",
                    'bg-[#525CA34D]': props.title == "Em tratamento",
                    'bg-[#BE006B4D]': props.title == "Com Solicitante",
                    'bg-[#CF483E4D]': props.title == "Regras",
                    'bg-[#4780404D]': props.title == "Completo",
                },
            )}>
                <KanbanCard urgency={true} />
                <KanbanCard urgency={false} />
            </div>
        </div>
    );
}

export function KanbanCard(props: Kanban.CardProps) {
    return (
        <div className="flex flex-col rounded-3xl bg-white p-3">
            <text className="flex bg-sanofiPurpleDark text-white rounded-full w-fit py-1 px-2 text-xs">DANF</text>
            <h2 className="font-sanofiSansBold text-md w-full flex pt-1">54321</h2>
            {props.urgency == true ? (
                <div className="flex flex-row text-red-600 text-xs items-end leading-3 gap-1 py-2">
                    <svg width="13" height="13" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.725 14.5001H14.275C15.5583 14.5001 16.3583 13.1084 15.7167 12.0001L9.44167 1.1584C8.8 0.0500651 7.2 0.0500651 6.55833 1.1584L0.283333 12.0001C-0.358334 13.1084 0.441666 14.5001 1.725 14.5001ZM8 8.66673C7.54167 8.66673 7.16667 8.29173 7.16667 7.8334V6.16673C7.16667 5.7084 7.54167 5.3334 8 5.3334C8.45833 5.3334 8.83333 5.7084 8.83333 6.16673V7.8334C8.83333 8.29173 8.45833 8.66673 8 8.66673ZM8.83333 12.0001H7.16667V10.3334H8.83333V12.0001Z" fill="#CF483E" />
                    </svg>
                    <text>Urgente</text>
                </div>
            ) : null}
            <div className="text-xs flex flex-col gap-px">
                <text className="text-sm flex w-full font-sanofiSansBold">Agente</text>
                <text>Adicionado em:</text>
                <text>Vence em:</text>
            </div>
        </div>
    );
}