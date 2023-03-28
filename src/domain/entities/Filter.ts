export namespace Filter {
    export interface ButtonProps {
        label: string;
    }

    export interface DropdownMenuProps {
        label: string;
        content: JSX.Element;
    }

    export interface CheckboxProps {
        label: string;
        sla?: boolean;
    }
}
