import { ComponentProps } from 'react'
import { Check } from 'phosphor-react'
import { CheckBoxContainer, CheckboxIndicator } from './styles'

export type CheckboxProps = ComponentProps<typeof CheckBoxContainer>

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckBoxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckBoxContainer>
  )
}

Checkbox.displayName = 'Checkbox'
