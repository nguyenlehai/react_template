import { Button, Form, Row, Space, Typography } from "antd"
import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import querystring from "querystring"
import "components/Datepicker"
/**
 * 
 * @param {Object} props
 * @param {import("antd").FormInstance} props.queryInstance
 * @param {Function} props.onQuery
 * @param {import("react").ReactChildren} props.children
 * @returns 
 */
const Queries = ({
  queryInstance,
  onQuery,
  total,
  children,
  showSearch
}) => {
  const [query] = Form.useForm(queryInstance);
  const { t } = useTranslation()
  const history = useHistory()

  useEffect(() => {
    onLoadURLQuery()
    // eslint-disable-next-line
  }, [])

  const onLoadURLQuery = useCallback(() => {
    const parsedURLSearch = querystring.parse(history.location.search.slice(1))
    if (!parsedURLSearch.query) {
      return
    }
    const urlQuery = JSON.parse(parsedURLSearch.query)
    console.log(urlQuery)
    // eslint-disable-next-line
  }, [])
  const onPutQueryToURL = useCallback((query) => {
    history.replace({
      ...history.location,
      search: querystring.stringify({
        query: JSON.stringify(query)
      })
    })
    // eslint-disable-next-line
  }, [])
  const onFinish = useCallback((value) => {
    onPutQueryToURL(value)
    typeof onQuery === "function" && onQuery(value)
  }, [onQuery, onPutQueryToURL])

  return (
    <Form
      form={query}
      onFinish={onFinish}
      layout="vertical"
    >
      <Space direction="vertical" style={{ width: "100%" }}>
        <Space wrap={true}>
          {children}
        </Space>
        {
          showSearch && (
            <Row justify="space-between" align="middle">
              <Typography.Text>
                {
                  t("Queries.TotalRecord", { total })
                    .replace(/\d+/g, (matchValue) => { console.log(); return [`|${matchValue}|`] })
                    .split("|")
                    .map((text, index) => {
                      if (Number(text)) {
                        return (
                          <Typography.Text strong key={index}>{text}</Typography.Text>
                        )
                      }
                      return <Typography.Text key={index}>{text}</Typography.Text>
                    })
                }
              </Typography.Text>
              <Button type="primary" onClick={query.submit}>
                {t("Search")}
              </Button>
            </Row>
          )
        }
      </Space>
    </Form>
  )
}

Queries.defaultProps = {
  showSearch: true
}

export default Queries