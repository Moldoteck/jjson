import { BodyText, HeaderText } from 'components/Text'
import { Suspense } from 'preact/compat'
import UserCount from 'components/UserCount'
import classnames, {
  alignItems,
  appearance,
  backgroundColor,
  borderColor,
  borderRadius,
  borderStyle,
  borderWidth,
  display,
  flexDirection,
  flexWrap,
  fontFamily,
  fontStyle,
  fontWeight,
  height,
  justifyContent,
  margin,
  padding,
  space,
  textAlign,
  textColor,
  whitespace,
  width,
} from 'classnames/tailwind'
import Button from './Button'

const container = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-start'),
  alignItems('items-center'),
  space('space-y-2'),
  height('h-fit')
)
export default function () {
  return (
    <div className={container}>
      <HeaderText>
        Dead Simple JSON formatter that works in your browser
      </HeaderText>
      <div
        className={classnames(
          display('flex'),
          flexDirection('flex-col'),
          space('space-y-2'),
          height('h-fit'),
          width('w-full'),
          alignItems('items-center'),
          justifyContent('justify-center')
        )}
      >
        <div
          className={classnames(
            display('flex'),
            flexDirection('flex-col'),
            space('space-y-2'),
            width('w-fit')
          )}
        >
          <div
            className={classnames(
              display('flex'),
              flexDirection('flex-row'),
              width('w-fit'),
              space('space-x-2')
            )}
          >
            <Button
              title="Format"
              onClick={() => {
                try {
                  const value = (
                    document.getElementById('1') as HTMLTextAreaElement
                  ).value
                  console.log(value)

                  if (value == '') {
                    return
                  }
                  const jsonParse = JSON.parse(value)

                  const spaces = (
                    document.getElementById('2') as HTMLInputElement
                  ).value
                  const spacesNR = Number(spaces)

                  const json = JSON.stringify(
                    jsonParse,
                    null,
                    spacesNR && spacesNR <= 20 ? spacesNR : 2
                  )

                  ;(document.getElementById('1') as HTMLTextAreaElement).value =
                    json
                } catch (e) {
                  console.log(e)
                  window.alert(e)
                }
              }}
            />
            <Button
              title="UnFormat"
              onClick={() => {
                try {
                  const value = (
                    document.getElementById('1') as HTMLTextAreaElement
                  ).value
                  if (value == '') {
                    return
                  }
                  const jsonParse = JSON.parse(value)

                  const json = JSON.stringify(jsonParse)
                  ;(document.getElementById('1') as HTMLTextAreaElement).value =
                    json
                } catch (e) {
                  console.log(e)
                  window.alert(e)
                }
              }}
            />
          </div>
          <input
            id="2"
            placeholder="Nr. of spaces"
            value={'2'}
            className={classnames(
              textColor('text-white'),
              fontFamily('font-mono'),
              fontWeight('font-bold'),
              backgroundColor('bg-gray-900'),
              padding('p-2'),
              textAlign('placeholder:text-center'),
              width('w-full')
            )}
          />
        </div>
        <div
          className={classnames(
            display('flex'),
            width('w-full'),
            height('h-fit'),
            borderStyle('border-dashed'),
            borderColor('border-white'),
            borderWidth('border-2'),
            borderRadius('rounded'),
            padding('p-2')
          )}
        >
          <textarea
            id="1"
            className={classnames(
              display('flex'),
              width('w-full'),
              height('h-screen'),
              whitespace('whitespace-pre-wrap'),
              flexWrap('flex-wrap'),
              backgroundColor('bg-gray-900'),
              textColor('text-white'),
              fontFamily('font-mono'),
              fontWeight('font-bold')
            )}
          />
        </div>
      </div>
      <h4
        className={classnames(
          textColor('text-white'),
          fontFamily('font-mono'),
          fontWeight('font-bold')
        )}
      >
        Made with ❤️ from Moldova
      </h4>
      <a
        className={classnames(
          textColor('text-white'),
          borderStyle('border-dashed'),
          borderColor('border-white'),
          borderWidth('border-2'),
          borderRadius('rounded'),
          padding('p-2'),
          fontFamily('font-mono'),
          fontWeight('font-bold')
        )}
        href="https://github.com/Moldoteck/jjson"
      >
        Source
      </a>
    </div>
  )
}
