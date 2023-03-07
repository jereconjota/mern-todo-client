import axios from "axios";

const baseApiUrl = import.meta.env.VITE_BASE_API_URL + "/api/tasks";

    export const getTasksRequest = async () =>
        await axios.get(`${baseApiUrl}`);
    
    export const createTaskRequest = async (task) =>
        await axios.post(`${baseApiUrl}`, task);
    
    export const deleteTaskRequest = async (id) =>
        await axios.delete(`${baseApiUrl}/${id}`);
    
    export const getTaskRequest = async (id) =>
        await axios.get(`${baseApiUrl}/${id}`);
    
    export const updateTaskRequest = async (id, newFields) =>
        await axios.put(`${baseApiUrl}/${id}`, newFields);
    
    export const toggleTaskDoneRequest = async (id, done) =>
        await axios.patch(`${baseApiUrl}/${id}`, {
            done,
        });