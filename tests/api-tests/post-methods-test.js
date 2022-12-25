import axios from "axios";
import { API_ENDPOINT } from "../../helpers/api/endpoints";
import {
  API_USER_DATA,
  randomJobTitle,
  randomName, RESPONSE,
} from "../../helpers/api/user-data";

describe("POST API requests tests", () => {
  it("1 POST Create User", async () => {
    await axios
      .post(API_ENDPOINT.USER_CREATE, {
        name: randomName,
        job: randomJobTitle,
      })
      .then((response) => {
        console.log(response.data); // Parse Created User
        expect(response.status).toEqual(RESPONSE.STATUS.OK_201);
        expect(response.data.name).toEqual(randomName);
        expect(response.data.job).toEqual(randomJobTitle);
        expect(response.data).toHaveProperty(RESPONSE.PROPERTY.name);
        expect(response.data).toHaveProperty(RESPONSE.PROPERTY.job);
        expect(response.data).toHaveProperty(RESPONSE.PROPERTY.id);
        expect(response.data).toHaveProperty(RESPONSE.PROPERTY.createdAt);
      });
  });

  it("2 POST Register User", async () => {
    await axios
      .post(API_ENDPOINT.USER_REGISTER, {
        email: API_USER_DATA.USER_EMAIL,
        password: API_USER_DATA.USER_PASSWORD,
      })
      .then((response) => {
        console.log(response.data); // Parse response
        expect(response.status).toEqual(RESPONSE.STATUS.OK_200);
        expect(response.data).toHaveProperty(RESPONSE.PROPERTY.id);
        expect(response.data).toHaveProperty(RESPONSE.PROPERTY.token);
        expect(response.data.id).toEqual(4);
        expect(response.data.token).toEqual("QpwL5tke4Pnpja7X4");
      });
  });

  it("3 POST Register User unsuccessful (Missing password)", async () => {
    await axios
      .post(API_ENDPOINT.USER_REGISTER, {
        email: API_USER_DATA.USER_EMAIL,
      })
      .then((response) => {
        console.log(response.data); // Parse response
      })
      .catch((error) => {
        console.log("LOG error.response", error.response);
        console.log("LOG - response.data", error.response.data);
        console.log("LOG - response.status", error.response.status);
        expect(error.response.status).toEqual(RESPONSE.STATUS.BAD_REQUEST_400);
        expect(error.response.statusText).toEqual(RESPONSE.MESSAGE.BAD_REQUEST);
        expect(error.response.data.error).toEqual(RESPONSE.MESSAGE.Missing_password);
        expect(error.response.data.email).toHaveValue(API_USER_DATA.USER_EMAIL);
      });
  });

  it("4 POST Register User unsuccessful (Missing email)", async () => {
    await axios
      .post(API_ENDPOINT.USER_REGISTER, {
        password: API_USER_DATA.USER_PASSWORD,
      })
      .catch((error) => {
        console.log(error.response);
        expect(error.response.status).toEqual(RESPONSE.STATUS.BAD_REQUEST_400);
        expect(error.response.data).toHaveProperty(RESPONSE.PROPERTY.error);
        expect(error.response.data.error).toEqual(
          RESPONSE.MESSAGE.Missing_email_or_username,
        );
      });
  });

  it("5 POST Login USER successful", async () => {
    await axios
      .post(API_ENDPOINT.USER_LOGIN, {
        email: API_USER_DATA.USER_EMAIL,
        password: API_USER_DATA.LOGIN_PASSWORD,
      })
      .then((response) => {
        console.log(response.data);
        expect(response.data).toHaveProperty(RESPONSE.PROPERTY.token);
        expect(response.data.token).toHaveValue("QpwL5tke4Pnpja7X4");
      });
  });

  it("6 POST Login USER unsuccessful (Missing password)", async () => {
    await axios
      .post(API_ENDPOINT.USER_LOGIN, {
        email: API_USER_DATA.USER_EMAIL,
      })
      .catch((error) => {
        console.log(error.response);
        expect(error.response.status).toEqual(RESPONSE.STATUS.BAD_REQUEST_400);
        expect(error.response.statusText).toEqual(RESPONSE.MESSAGE.BAD_REQUEST);
        expect(error.response.data.error).toEqual(RESPONSE.MESSAGE.Missing_password);
      });
  });

  it("7 POST Login USER successful (Missing email)", async () => {
    await axios
      .post(API_ENDPOINT.USER_LOGIN, {
        password: API_USER_DATA.LOGIN_PASSWORD,
      })
      .catch((error) => {
        console.log(error.response);
        expect(error.response.status).toEqual(RESPONSE.STATUS.BAD_REQUEST_400);
        expect(error.response.statusText).toEqual(RESPONSE.MESSAGE.BAD_REQUEST);
        expect(error.response.data.error).toEqual(
          RESPONSE.MESSAGE.Missing_email_or_username,
        );
      });
  });
});
