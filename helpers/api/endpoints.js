import dotenv from 'dotenv'
dotenv.config()

export const BASE_ENDPOINT = process.env.ENV_BASE_ENDPOINT

export const API_ENDPOINT = {
  USER_LIST: `${BASE_ENDPOINT}users?page=1`,
  SINGLE_USER: `${BASE_ENDPOINT}users/1`,
  INVALID_USER: `${BASE_ENDPOINT}users/23`,
  RESOURCE_LIST: `${BASE_ENDPOINT}unknown`,
  SINGLE_RESOURCE: `${BASE_ENDPOINT}unknown/1`,
  INVALID_RESOURSE: `${BASE_ENDPOINT}unknown/23`,
  USER_CREATE: `${BASE_ENDPOINT}api/users`,
  USER_UPDATE: `${BASE_ENDPOINT}users/2`,
  USER_DELETE: `${BASE_ENDPOINT}users/3`,
  USER_REGISTER: `${BASE_ENDPOINT}register`,
  USER_LOGIN: `${BASE_ENDPOINT}login`,
};