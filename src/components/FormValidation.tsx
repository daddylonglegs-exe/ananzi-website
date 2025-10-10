import { useState, useEffect } from 'react';

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => boolean;
  message: string;
}

export const useFieldValidation = (value: string, rules: ValidationRule[]) => {
  const [error, setError] = useState<string>('');
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (!touched) return;

    for (const rule of rules) {
      if (rule.required && !value.trim()) {
        setError(rule.message);
        return;
      }
      
      if (rule.minLength && value.trim().length < rule.minLength) {
        setError(rule.message);
        return;
      }
      
      if (rule.maxLength && value.trim().length > rule.maxLength) {
        setError(rule.message);
        return;
      }
      
      if (rule.pattern && !rule.pattern.test(value)) {
        setError(rule.message);
        return;
      }
      
      if (rule.custom && !rule.custom(value)) {
        setError(rule.message);
        return;
      }
    }
    
    setError('');
  }, [value, rules, touched]);

  return {
    error,
    setTouched,
    isValid: !error && touched
  };
};