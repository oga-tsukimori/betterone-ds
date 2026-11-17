import { InputOtpDemo } from "@/components/docs/demos"
import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

const code = `<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
  </InputOTPGroup>
</InputOTP>`

export default function InputOtpDocsPage() {
  return (
    <DocsPage
      group="Forms & Inputs"
      title="Input OTP"
      description="A one-time passcode field split into slots."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/input-otp")}
    >
      <DocPreviewTabs id="preview" file="components/ui/input-otp.tsx" code={code} preview={<InputOtpDemo />} />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx betterone-ds add input-otp" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Input OTP props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["maxLength", "number", "required"],
            ["pattern", "string", "digits"],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Supports paste and the one-time-code autocomplete hint.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}
