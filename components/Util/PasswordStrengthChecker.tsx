import React, { useState, useEffect } from "react";

interface PasswordStrengthCheckerProps {
  password: string;
}

const PasswordStrengthChecker: React.FC<PasswordStrengthCheckerProps> = ({
  password,
}) => {
  const [strengthColor, setStrengthColor] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");
  const [color, setColor] = useState<string>("text-gray-300");

  useEffect(() => {
    const strengthChecks = {
      hasUpperCase: /[A-Z]+/.test(password),
      hasLowerCase: /[a-z]+/.test(password),
      hasDigit: /\d+/.test(password),
      hasSpecialChar: /[^A-Za-z0-9]+/.test(password),
      length: password.length > 7,
    };

    if (
      strengthChecks.hasUpperCase &&
      strengthChecks.hasLowerCase &&
      strengthChecks.hasDigit &&
      strengthChecks.hasSpecialChar &&
      strengthChecks.length
    ) {
      setStrengthColor(Array(6).fill("bg-green-500")); // Strong
      setMessage("Strong");
      setColor("text-green-500");
    } else if (
      (strengthChecks.hasUpperCase || strengthChecks.hasLowerCase) &&
      strengthChecks.hasSpecialChar &&
      strengthChecks.hasDigit &&
      strengthChecks.length
    ) {
      setStrengthColor(Array(5).fill("bg-green-500").concat("bg-[#D89D08]")); // Average
      setMessage("Average");
      setColor("text-green-300");
    } else if (
      strengthChecks.hasUpperCase &&
      strengthChecks.hasLowerCase &&
      strengthChecks.hasDigit &&
      strengthChecks.length
    ) {
      setStrengthColor(
        Array(4).fill("bg-[#D89D08]").concat(Array(2).fill("bg-gray-300"))
      ); // Weak
      setMessage("Average");
      setColor("text-[#D89D08]");
    }else if (
      strengthChecks.hasUpperCase &&
      strengthChecks.hasLowerCase &&
      strengthChecks.hasSpecialChar &&
      strengthChecks.length
    ) {
      setStrengthColor(
        Array(4).fill("bg-[#D89D08]").concat(Array(2).fill("bg-gray-300"))
      ); // Weak
      setMessage("Average");
      setColor("text-[#D89D08]");
    } else if (
      strengthChecks.length &&
      !strengthChecks.hasUpperCase &&
      !strengthChecks.hasLowerCase &&
      (strengthChecks.hasDigit || strengthChecks.hasSpecialChar)
    ) {
      setStrengthColor(
        Array(3).fill("bg-[#D89D08]").concat(Array(3).fill("bg-gray-300"))
      ); // Very Weak
      setMessage("Weak");
      setColor("text-[#D89D08]");
    } else if (
      strengthChecks.length &&
      !strengthChecks.hasSpecialChar &&
      (strengthChecks.hasUpperCase ||
        strengthChecks.hasDigit ||
        strengthChecks.hasLowerCase)
    ) {
      setStrengthColor(
        Array(2).fill("bg-red-500").concat(Array(4).fill("bg-gray-300"))
      ); // Very Weak
      setMessage("Weak");
      setColor("text-red-500");
    } else if (
      strengthChecks.length &&
      (strengthChecks.hasSpecialChar ||
        strengthChecks.hasUpperCase ||
        strengthChecks.hasDigit ||
        strengthChecks.hasLowerCase)
    ) {
      setStrengthColor(
        Array(1).fill("bg-red-500").concat(Array(5).fill("bg-gray-300"))
      ); // Very Weak
      setMessage("Very Weak");
      setColor("text-red-500");
    } else {
      setStrengthColor([]); // Default
    }
  }, [password]);

  return (
    <>
      {strengthColor?.length ? (
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            {strengthColor.map((color, index) => (
              <div key={index} className={`w-4 h-2 ${color}`} />
            ))}
          </div>
          <span className={`${color} text-sm`}>{message}</span>
        </div>
      ) : null}
    </>
  );
};

export default PasswordStrengthChecker;
