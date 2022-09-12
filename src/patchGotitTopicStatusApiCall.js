import axios from 'axios';
import { HOST, COURSE_URI, TOPICS_URI, TOKEN_KEY } from '../../constant';
import { getTokenFromLocalStorage } from '../../utils';

export function patchGotitTopicStatusApiCall(data) {
    const { tid, courseId, status, type } = data;
    const token = getTokenFromLocalStorage(TOKEN_KEY);
    return axios({
        method: 'post',
        url: `${HOST}${COURSE_URI}/${courseId}${TOPICS_URI}/${tid}/status`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
        data: {
            status,
            type,
        },
    });
}
