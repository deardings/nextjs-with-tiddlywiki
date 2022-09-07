import { parse, format } from 'date-fns'

type Props = {
  dateString: string
}

const TiddlerDateFormatter = ({ dateString }: Props) => {
  const date = parse(dateString, "yyyyMMddkkmmssSSS", new Date())
  return <time dateTime={dateString}>{format(date, 'LLLL do, yyyy')}</time>
}

export default TiddlerDateFormatter
