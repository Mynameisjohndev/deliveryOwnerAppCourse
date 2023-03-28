import { HeaderSubTitle, HeaderTitle, HeaderTitleContainer } from "./styles"

export const CustomHeaderTitle = ({
  title,
  subtitle
}) => {
  return(
    <HeaderTitleContainer>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderSubTitle>{subtitle}</HeaderSubTitle>
    </HeaderTitleContainer>
  )
}