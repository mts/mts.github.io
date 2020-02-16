import React from 'react'
import { loremIpsumDefaultProps, loremIpsumPropTypes } from './LoremIpsum.prop'
import { element } from '../../../../../../library/src/client/dom'
import { size } from '../../../../../../library/src/client/placeholder'

export function LoremIpsum({ className, container, length, count }) {
  function LoremIpsumTimesCount() {
    function Paragraph() {
      switch (length) {
        case size.x2Small:
          return (
            <p className={className}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec turpis eleifend, pretium leo ut, euismod sapien.
            </p>
          )
        case size.x1Small:
          return (
            <p className={className}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec turpis eleifend, pretium leo ut, euismod sapien. Sed
              quis purus quis metus sagittis sollicitudin accumsan in ante.
            </p>
          )
        case size.small:
          return (
            <p className={className}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec turpis eleifend, pretium leo ut, euismod sapien. Sed
              quis purus quis metus sagittis sollicitudin accumsan in ante. Cras tortor nisi, vulputate in pharetra et, cursus non felis.
              Pellentesque libero nulla, auctor ac viverra eu, gravida eu odio. Vestibulum dolor ex, mollis eget euismod et, auctor ut est.
              Etiam posuere hendrerit tincidunt.
            </p>
          )
        case size.medium:
          return (
            <p className={className}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec turpis eleifend, pretium leo ut, euismod sapien. Sed
              quis purus quis metus sagittis sollicitudin accumsan in ante. Cras tortor nisi, vulputate in pharetra et, cursus non felis.
              Pellentesque libero nulla, auctor ac viverra eu, gravida eu odio. Vestibulum dolor ex, mollis eget euismod et, auctor ut est.
              Etiam posuere hendrerit tincidunt. Curabitur commodo, sapien id mattis sagittis, lectus dolor ullamcorper purus, et lacinia
              elit urna tincidunt massa. Nam pretium nisi at vehicula placerat. Ut molestie eros in sapien mollis, tincidunt vehicula arcu
              pellentesque. Proin vel elementum ante. Curabitur ut erat massa. Integer pellentesque mauris sed libero scelerisque molestie.
            </p>
          )
        case size.large:
          return (
            <p className={className}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec turpis eleifend, pretium leo ut, euismod sapien. Sed
              quis purus quis metus sagittis sollicitudin accumsan in ante. Cras tortor nisi, vulputate in pharetra et, cursus non felis.
              Pellentesque libero nulla, auctor ac viverra eu, gravida eu odio. Vestibulum dolor ex, mollis eget euismod et, auctor ut est.
              Etiam posuere hendrerit tincidunt. Curabitur commodo, sapien id mattis sagittis, lectus dolor ullamcorper purus, et lacinia
              elit urna tincidunt massa. Nam pretium nisi at vehicula placerat. Ut molestie eros in sapien mollis, tincidunt vehicula arcu
              pellentesque. Proin vel elementum ante. Curabitur ut erat massa. Integer pellentesque mauris sed libero scelerisque molestie.
              Morbi ac dapibus urna. Donec magna felis, porta eget felis vel, sodales fringilla quam. Maecenas mauris ligula, tempus et
              pretium quis, aliquam nec odio. Praesent mattis a leo lacinia facilisis. Integer rutrum ac purus nec blandit. Nullam et felis
              ut eros sodales laoreet non vel ex. Suspendisse quis viverra purus. Pellentesque lobortis semper laoreet. Proin venenatis
              lacus nec neque aliquam cursus. Nullam porttitor a nulla a venenatis. Duis eu sapien velit. Phasellus sagittis vitae ligula
              eget posuere. Nullam volutpat cursus nunc, at molestie tellus pellentesque non. Vestibulum dignissim ante vel diam tincidunt
              iaculis. Vestibulum vehicula lobortis ultrices.
            </p>
          )
        default:
          return null
      }
    }

    const parsedCount = parseInt(count, 10)
    if (Number.isNaN(parsedCount) || parsedCount === -1) {
      return null
    }

    if (container === element.paragraph) {
      return Array(parsedCount).fill(<Paragraph />)
    }

    return null
  }

  return (
    <>
      <LoremIpsumTimesCount />
    </>
  )
}

LoremIpsum.defaultProps = loremIpsumDefaultProps

LoremIpsum.propTypes = loremIpsumPropTypes
