import React from 'react';
import { Text, TextProps } from 'react-native'; 

type FontWeight = 'light' | 'regular' | 'medium' | 'semibold' | 'bold';

interface QuickSandProps extends TextProps {
  weight?: FontWeight;
  className?: string;
}

export function QuickSand({ 
  children, 
  weight = 'regular',
  className = '',
  style,
  ...props 
}: QuickSandProps) {
  // Map weight to font family
  const fontFamily = {
    light: 'Quicksand-Light',
    regular: 'Quicksand-Regular',
    medium: 'Quicksand-Medium',
    semibold: 'Quicksand-SemiBold',
    bold: 'Quicksand-Bold',
  }[weight];

  return (
    <Text 
      className={className} 
      style={[{ fontFamily }, style]} 
      {...props}
    >
      {children}
    </Text>
  );
}