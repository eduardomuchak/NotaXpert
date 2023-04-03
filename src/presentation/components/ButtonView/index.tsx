import { ButtonViewProps } from 'domain/entities/ButtonView';
import { useMyStore } from 'presentation/components/BacklogTable';

export function ButtonView(props: ButtonViewProps) {
  const { isButtonPressed, toggleButton } = useMyStore();
  return (
    <div className="flex pb-2">
      {isButtonPressed == true ? (
        <button
          onClick={toggleButton}
          className="items-center flex w-auto rounded-full bg-sanofiPurpleDark px-3 py-1 text-white text-sm font-sanofiSans h-fit gap-1"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 7.02H12V18H7V7.02ZM14 18H17C18.1 18 19 17.1 19 16V7H14V18ZM17 0H2C0.9 0 0 0.9 0 2V5H19V2C19 0.9 18.1 0 17 0ZM0 16C0 17.1 0.9 18 2 18H5V7H0V16Z"
              fill="#F4F2F7"
            />
          </svg>
          Tabela
        </button>
      ) : (
        <button
          onClick={toggleButton}
          className="items-center flex w-auto rounded-full bg-sanofiPurpleDark px-3 py-1 text-white text-sm font-sanofiSans h-fit gap-1"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 10H7C7.55 10 8 9.55 8 9V1C8 0.45 7.55 0 7 0H1C0.45 0 0 0.45 0 1V9C0 9.55 0.45 10 1 10ZM1 18H7C7.55 18 8 17.55 8 17V13C8 12.45 7.55 12 7 12H1C0.45 12 0 12.45 0 13V17C0 17.55 0.45 18 1 18ZM11 18H17C17.55 18 18 17.55 18 17V9C18 8.45 17.55 8 17 8H11C10.45 8 10 8.45 10 9V17C10 17.55 10.45 18 11 18ZM10 1V5C10 5.55 10.45 6 11 6H17C17.55 6 18 5.55 18 5V1C18 0.45 17.55 0 17 0H11C10.45 0 10 0.45 10 1Z"
              fill="#F4F2F7"
            />
          </svg>
          Board
        </button>
      )}
    </div>
  );
}
