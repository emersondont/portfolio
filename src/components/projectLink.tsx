import Link, { LinkProps } from "next/link"
import { MdArrowOutward } from "react-icons/md";

interface ProjectLinkProps extends LinkProps {
  label: string;
}

export default function ProjectLink(props: ProjectLinkProps) {
  return (
    <Link target="_blank" rel="noopener noreferrer" {...props}
    className="text-white flex gap-1 items-center group relative hover:bg-secondary hover:bg-opacity-30 px-2 rounded-md ease-out duration-200"
    >
      <span>{props.label}</span>
      <MdArrowOutward className="abolute group-hover:translate-x-1/4 group-hover:-translate-y-1/4 transition-all ease-out duration-200"/>
    </Link>
  )
}