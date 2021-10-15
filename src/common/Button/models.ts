export namespace BUTTON {
    export enum VARIANT {
        PRIMARY = 'primary',
        SECONDARY = 'secondary'
    }
}
  
export interface ButtonProps {
  variant?: BUTTON.VARIANT;
  customClass?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
  