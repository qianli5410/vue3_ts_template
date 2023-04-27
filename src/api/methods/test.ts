import { instance } from "..";

// 获取用户信息
export const getTextList = () => instance.get(`posts`);
