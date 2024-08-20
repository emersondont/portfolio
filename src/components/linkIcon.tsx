import Link, { LinkProps } from "next/link"
import { IconType } from "react-icons"

interface LinkIconProps extends LinkProps {
  icon: IconType;
  label: string;
}

export default function LinkIcon(props: LinkIconProps) {
  return (
    <Link target="_blank" rel="noopener noreferrer" {...props}
      className='flex items-center group'
    >
      <props.icon className='text-3xl text-secondary group-hover:text-primary ease-in duration-200' />
      <span className='sr-only'>{props.label}</span>
    </Link>
  )
}