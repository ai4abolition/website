import { Button } from "@relume_io/relume-ui"
import clsx from "clsx"

interface Props {
  darkMode?: boolean
  buttonClasses?: string
}

export const DonateButton = ({ darkMode, buttonClasses }: Props) => (
  <a
    target="_blank"
    href="https://www.paypal.com/donate/?hosted_button_id=W2BLJ94U8CC4C"
  >
    <Button
      className={clsx(
        "rounded uppercase text-base",
        darkMode && "bg-timberwolf-200 text-black",
        buttonClasses,
      )}
    >
      Donate
    </Button>
  </a>
)
