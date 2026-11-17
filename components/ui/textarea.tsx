"use client"

import * as React from "react"
import { cn } from "cn"
import {
  composeRenderProps,
  TextArea as TextareaPrimitive,
} from "react-aria-components"

function Textarea({
  className,
  ...props
}: React.ComponentProps<typeof TextareaPrimitive>) {
  return (
    <TextareaPrimitive
      data-slot="textarea"
      className={composeRenderProps(className, (className) =>
        cn(
          "flex field-sizing-content min-h-16 w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm transition-[color,box-shadow,background-color] outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive",
          className
        )
      )}
      {...props}
    />
  )
}

export { Textarea }
