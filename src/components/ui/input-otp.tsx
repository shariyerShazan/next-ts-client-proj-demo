"use client"

import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { MinusIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  )
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("flex items-center", className)}
      {...props}
    />
  )
}

function InputOTPSlot({
  index,
  className,
  placeholder = "-",
  ...props
}: React.ComponentProps<"div"> & {
  index: number , 
  placeholder?: string
}) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      // aria-placeholder="-"
      data-slot="input-otp-slot"
      data-placeholder={!char ? "true" : "false"}
      data-active={isActive}
      className={cn(
        "data-[active=true]:border-ring data-[active=true]:ring-[#cba65f] data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40  aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-gray-100 border-[#cba65f] relative flex h-9 w-14 items-center justify-center border-y border-r border-l text-sm shadow-xs transition-all outline-none first:rounded-md first:border-l last:rounded-md rounded-md data-[active=true]:z-10 data-[active=true]:ring-[3px] data-[placeholder]:text-gray-500 data-[placeholder]:opacity-100",
        className
      )}
      {...props}
    >
      {char || placeholder}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
        </div>
      )}
    </div>
  )
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  )
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
