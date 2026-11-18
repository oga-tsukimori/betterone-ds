"use client"

import { cn } from "cn"
import {
  composeRenderProps,
  RadioGroup as RadioGroupPrimitive,
  Radio as RadioPrimitive,
  type RadioGroupProps,
  type RadioProps,
} from "react-aria-components"

function RadioGroup({ className, ...props }: RadioGroupProps) {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={cn("grid w-full gap-3", className)}
      {...props}
    />
  )
}

function RadioGroupItem({ className, children, ...props }: RadioProps) {
  return (
    <RadioPrimitive
      data-slot="radio-group-item"
      className={cn(
        "group/radio-group-item relative flex items-center gap-2 text-sm outline-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      {composeRenderProps(children, (children, { isSelected }) => (
        <>
          <span
            data-slot="radio-group-indicator"
            className="relative flex aspect-square size-4 shrink-0 items-center justify-center rounded-full border border-transparent bg-input/90 group-data-[selected]/radio-group-item:bg-primary group-data-[focus-visible]/radio-group-item:ring-2 group-data-[focus-visible]/radio-group-item:ring-ring group-data-[invalid]/radio-group-item:border-destructive group-data-[invalid]/radio-group-item:ring-3 group-data-[invalid]/radio-group-item:ring-destructive/20"
          >
            {isSelected && (
              <span className="size-2 rounded-full bg-primary-foreground dark:size-2.5" />
            )}
          </span>
          {children}
        </>
      ))}
    </RadioPrimitive>
  )
}

export { RadioGroup, RadioGroupItem }
