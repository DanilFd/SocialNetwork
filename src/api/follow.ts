import {api} from "./apiInstance";

type FollowResponse = {
    resultCode: number,
    messages: string[]
    data: {}
}

export const sendFollow = (userId: number) => api.post<FollowResponse>(`/follow/${userId}`).then(res => {
    return res.data.resultCode === 0
})

export const sendUnfollow = (userId: number) => api.delete<FollowResponse>(`/follow/${userId}`).then(res => {
    return res.data.resultCode === 0
})