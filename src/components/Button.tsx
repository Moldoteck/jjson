import classnames, {
  backgroundColor,
  borderRadius,
  cursor,
  fontWeight,
  padding,
  textColor,
  width,
} from 'classnames/tailwind'

const button = (disabled?: boolean, colorRed?: boolean, fullSize?: boolean) =>
  classnames(
    backgroundColor({
      'bg-blue-500': !colorRed,
      'bg-red-500': colorRed,
      'hover:bg-blue-700': !disabled && !colorRed,
      'hover:bg-red-700': !disabled && colorRed,
      'bg-gray-500': disabled,
    }),
    textColor('text-white'),
    fontWeight('font-bold'),
    padding('px-4', 'py-2'),
    borderRadius('rounded'),
    cursor({ 'cursor-not-allowed': disabled }),
    width({ 'w-full': fullSize })
  )
export default function ({
  title,
  onClick,
  disabled,
  fullSize,
  colorRed
}: {
  title: string
  onClick?: () => void
  disabled?: boolean,
  fullSize?: boolean,
  colorRed?: boolean
}) {
  return (
    <button
      className={button(disabled, colorRed, fullSize)}
      onClick={() => {
        if (disabled) return
        onClick?.()
      }}
    >
      {title}
    </button>
  )
}
