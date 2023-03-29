import { BackgroundContainerVariant, CustomContent } from "../../global"

const ScreenTemplate = ({ children, secondChildren }) => {
  return (
    <BackgroundContainerVariant>
      {children}
      <CustomContent>
        {secondChildren}
      </CustomContent>
    </BackgroundContainerVariant>
  )
}


export { ScreenTemplate }