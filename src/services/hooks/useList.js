import { message } from "antd"
import { useCallback, useState } from "react"

const useList = ({
  apiLoadList,
  didLoadList
}) => {
  const [list, setList] = useState({
    dataSource: [],
    loading: true,
    pagination: {
      current: 1,
      total: 0,
      pageSize: 20,
    }
  })

  const loadList = useCallback((query) => {
    if (typeof apiLoadList !== "function") {
      return
    }
    setList({
      ...list,
      loading: true
    })
    try {
      const newList = await apiLoadList(query)

      if (typeof didLoadList === "function") {
        setList({
          ...list,
          ...newList,
          loading: false,
        })
      }
    } catch (error) {

    }
  }, [list, apiLoadList, didLoadList])

  return [
    list,
    setList,
    loadList
  ]
}

export default useList