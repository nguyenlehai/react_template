import { Checkbox, DatePicker, Form, Input, Row, Select, Typography } from "antd"
import PolicyRoute from "components/PolicyRoute"
import Queries from "components/Queries"
import { ROUTES } from "configs"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"

const Home = () => {
  const { t, i18n } = useTranslation(["common", "HomePage"])
  const [query] = Form.useForm();

  useEffect(() => {
    i18n.changeLanguage("vi-VN")
  }, [i18n])

  return (
    <>
      <Row justify="center">
        <Typography.Title level={2}>
          {t("HomePage:Title")}
        </Typography.Title>
      </Row>
      <Queries
        queryInstance={query}
        total={4}
      >
        <Form.Item
          label={t("Input")}
          name={"input"}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t("Select")}
          name={"select"}
        >
          <Select>
            {
              ["A", "B", "C"].map((value, index) => (
                <Select.Option value={value} key={index}>
                  {value}
                </Select.Option>
              ))
            }
          </Select>
        </Form.Item>
        <Form.Item
          label={t("Checkbox")}
          name={"checkbox"}
          valuePropName={"checked"}
        >
          <Checkbox />
        </Form.Item>
        <Form.Item
          label={t("Datetime")}
          name={"datetime"}
        >
          <DatePicker.RangePicker />
        </Form.Item>
      </Queries>
    </>
  )
}

const HomePage = () => (
  <PolicyRoute
    exact
    roles={[]}
    path={ROUTES.HOME}
    component={Home}
  />
)

export default HomePage