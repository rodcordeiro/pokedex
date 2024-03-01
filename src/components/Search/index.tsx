import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import { TextInputProps, ActivityIndicator } from 'react-native';
import { useField } from '@unform/core';
import { useTheme } from 'styled-components';
import { Container, Input, Icon } from './style';

interface IInputProps extends TextInputProps {
  name: string;
  placeholder: string;
  isLoading?: boolean;
}

const SearchInput = (
  { name, isLoading, placeholder, ...rest }: IInputProps,
  ref: any,
) => {
  const { registerField, defaultValue = '', fieldName } = useField(name);
  const inputElementRef = useRef<any>(null);
  const inputValueRef = useRef({ value: defaultValue });
  const [focused, setFocused] = React.useState(false);
  const themeContext = useTheme();
  const resetInputField = useCallback(() => {
    inputElementRef.current.clear();
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
    clear() {
      resetInputField();
    },
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(reference: any, value: any) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container isFocused={focused}>
      {isLoading ? (
        <ActivityIndicator size="small" color={themeContext.color.primary} />
      ) : (
        <>
          <Icon name="search" style={{ color: themeContext.color.text }} />
          <Input
            ref={inputElementRef}
            name={name}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={placeholder}
            type="text"
            placeholderTextColor={themeContext.color.subtitle}
            onChangeText={(value: string) => {
              inputValueRef.current.value = value;
            }}
            keyboardAppearance="dark"
            {...rest}
          />
        </>
      )}
    </Container>
  );
};

export default forwardRef(SearchInput);
