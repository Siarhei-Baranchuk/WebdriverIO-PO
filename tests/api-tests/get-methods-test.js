import axios from "axios";
import { API_ENDPOINT } from "../../helpers/api/endpoints";
import { RESPONSE } from "../../helpers/api/user-data";



describe("GET API requests tests", () => {
  it("1 GET list User test", async () => {
    await axios.get(API_ENDPOINT.USER_LIST).then((response) => {
      console.log(response.data); // Parse User list
      expect(response.status).toEqual(RESPONSE.STATUS.OK_200);
      expect(response.data).toHaveProperty(RESPONSE.PROPERTY.page);
      expect(response.data).toHaveProperty(RESPONSE.PROPERTY.per_page);
      expect(response.data.per_page).toEqual(6);
      expect(response.data).toHaveProperty(RESPONSE.PROPERTY.total);
      const users = response.data.data.length;
      for (let user in users) {
        expect(user).toHaveProperty(RESPONSE.PROPERTY.id);
        expect(user).toHaveProperty(RESPONSE.PROPERTY.email);
        expect(user).toHaveProperty(RESPONSE.PROPERTY.first_name);
        expect(user).toHaveProperty(RESPONSE.PROPERTY.last_name);
        expect(user).toHaveProperty(RESPONSE.PROPERTY.avatar);
      }
    });
  });

  it("2 GET Single user test", async () => {
    await axios.get(API_ENDPOINT.SINGLE_USER).then((response) => {
      console.log(response.data); // Parse Single user
      expect(response.status).toEqual(RESPONSE.STATUS.OK_200);
      expect(response.data.data).toHaveProperty(RESPONSE.PROPERTY.id);
      expect(response.data.data.id).not.toBe("");
      expect(response.data.data.id).not.toBe(null);
      expect(response.data.data).toHaveProperty(RESPONSE.PROPERTY.email);
      expect(response.data.data.email).not.toBe(RESPONSE.PROPERTY.email);
      expect(response.data.data).toHaveProperty(RESPONSE.PROPERTY.first_name);
      expect(response.data.data).toHaveProperty(RESPONSE.PROPERTY.last_name);
      expect(response.data.data).toHaveProperty(RESPONSE.PROPERTY.avatar);
      expect(response.data.support).toHaveProperty(RESPONSE.PROPERTY.url);
      expect(response.data.support).toHaveProperty(RESPONSE.PROPERTY.text);
    });
  });

  it("3 GET Single User not found test", async () => {
    await axios
      .get(API_ENDPOINT.INVALID_USER)
      .then((response) => {
        console.log(response.data); // Parse response
      })
      .catch((error) => {
        console.log(error.response);
        expect(error.response.status).toEqual(RESPONSE.STATUS.NOT_FOUND_404);
        expect(error.response.statusText).toContain(RESPONSE.MESSAGE.NOT_FOUND);
      });
  });

  it("4 GET List Recourse test", async () => {
    await axios.get(API_ENDPOINT.RESOURCE_LIST).then((response) => {
      console.log(response.data); // Parse List Recourse
      expect(response.status).toEqual(RESPONSE.STATUS.OK_200);
      expect(response.data).toHaveProperty(RESPONSE.PROPERTY.page);
      expect(response.data).toHaveProperty(RESPONSE.PROPERTY.per_page);
      expect(response.data.per_page).toEqual(6);
      expect(response.data).toHaveProperty(RESPONSE.PROPERTY.total);
      const recourses = response.data.data.length;
      for (let recourse in recourses) {
        expect(recourse).toHaveProperty(RESPONSE.PROPERTY.id);
        expect(recourse).toHaveProperty(RESPONSE.PROPERTY.name);
        expect(recourse).toHaveProperty(RESPONSE.PROPERTY.year);
        expect(recourse).toHaveProperty(RESPONSE.PROPERTY.color);
        expect(recourse).toHaveProperty(RESPONSE.PROPERTY.pantone_value);
      }
    });
  });
  it("5 GET Single Recourse test", async () => {
    await axios.get(API_ENDPOINT.SINGLE_RESOURCE).then((response) => {
      console.log(response.data); // Parse Single Recourse
      expect(response.status).toEqual(RESPONSE.STATUS.OK_200);
      expect(response.data.data).toHaveProperty(RESPONSE.PROPERTY.id);
      expect(response.data.data).toHaveProperty(RESPONSE.PROPERTY.name);
      expect(response.data.data).toHaveProperty(RESPONSE.PROPERTY.year);
      expect(response.data.data).toHaveProperty(RESPONSE.PROPERTY.color);
      expect(response.data.data).toHaveProperty(RESPONSE.PROPERTY.pantone_value);
    });
  });

  it("6 GET Single Recourse not found test", async () => {
    await axios
      .get(API_ENDPOINT.INVALID_USER)
      .then((response) => {
        console.log(response.data); // Parse response
      })
      .catch((error) => {
        console.log(error.response);
        expect(error.response.status).toEqual(RESPONSE.STATUS.NOT_FOUND_404);
        expect(error.response.statusText).toContain(RESPONSE.MESSAGE.NOT_FOUND);
      });
  });
});