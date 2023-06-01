import { useQuery} from "@tanstack/react-query"
import { getAllTasks } from "../api/tasksAPI"
function Tasks() {

    const {isLoading, data, isError, error} = useQuery({
        queryKey: ["tasks"],
        queryFn: getAllTasks
        })

    if (isLoading) return <div>Loading...</div>
    else if (isError) return <div>Error: {error.message}</div>

    
  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default Tasks