import React, { useRef } from "react";
import { Surface, useTheme } from "react-native-paper";
import CodeInput from "react-native-confirmation-code-input";

export default function OTP(props) {
  const input = useRef(null);

  const { colors } = useTheme();

  return (
    <Surface style={{ flex: 1 }}>
      <CodeInput
        ref={input}
        codeLength={6}
        compareWithCode="123456"
        activeColor={colors.primary}
        inactiveColor="lightgray"
        autoFocus={false}
        ignoreCase={true}
        inputPosition="center"
        keyboardType="numeric"
        size={50}
        onFulfill={(isValid, code) => console.log(isValid, code)}
        //onFulfill={(isValid) => this._onFinishCheckingCode1(isValid)}
        containerStyle={{ marginTop: 30 }}
        codeInputStyle={{ borderWidth: 1.5, borderRadius: 50 }}
      />
    </Surface>
  );
}
