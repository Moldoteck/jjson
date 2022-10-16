import {
  classnames,
  container,
  height,
  margin,
  maxWidth,
  padding,
} from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'

const root = classnames(
  container('container'),
  margin('mx-auto'),
  padding('pb-10', 'py-4'),
  maxWidth('max-w-4xl'),
  height('h-fit')
)
export default function ({ children }: ChildrenProp) {
  return <div className={root}>{children}</div>
}
