import { FormControl, Input } from "native-base";

interface InputTextProps {
    placeholder : string,
    label? : string,
    secureTextEntry? : boolean,
    leftIcon?: React.ReactNode;
}

export function InputText({ 
    label, 
    placeholder, 
    secureTextEntry = false
  } : InputTextProps) : JSX.Element {
    return (
      <FormControl mt={3}>
        {label && <FormControl.Label>{label}</FormControl.Label>}
        <Input
          placeholder={placeholder}
          size="lg"
          w="100%"
          borderRadius="lg"
          bgColor="gray.100"
          secureTextEntry={secureTextEntry}
          shadow={3}
        />
      </FormControl>
    );
  };