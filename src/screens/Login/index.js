import PolicyRoute from "components/PolicyRoute"
import { ROUTES } from "configs"
import { useTranslation } from "react-i18next"

const Login = () => {
  const { t } = useTranslation()
  return (
    <div>
      {t("LoginPage:Title")}
    </div>
  )
}

const Page = () => (
  <PolicyRoute
    exact
    path={ROUTES.LOGIN}
    component={Login}
  />
)

export default Page