import axios from "axios";
import { API_ENDPOINT } from "../../helpers/api/endpoints";
import { randomJobTitle, randomName, RESPONSE } from "../../helpers/api/user-data";


describe("PUT, PATCH, DELETE API requests tests", () => {
  it("1 PUT Update User", async () => {
    await axios
      .put(API_ENDPOINT.USER_UPDATE, {
        name: randomName,
        job: randomJobTitle,
      })
      .then((response) => {
        console.log(response.data); // Parse Created User
        console.log(response.config); // Parse config
        expect(response.status).toEqual(RESPONSE.STATUS.OK_200);
        expect(response.data.name).toEqual(randomName);
        expect(response.data.job).toEqual(randomJobTitle);
        expect(response.data).toHaveProperty(RESPONSE.PROPERTY.updatedAt);
      });
  });

  it("2 PATCH Update User Name", async () => {
    await axios
      .patch(API_ENDPOINT.USER_UPDATE, {
        name: randomName,
      })
      .then((response) => {
        console.log(response.data); // Parse Created User
        expect(response.status).toEqual(RESPONSE.STATUS.OK_200);
        expect(response.data.name).toEqual(randomName);
        expect(response.data).toHaveProperty(RESPONSE.PROPERTY.updatedAt);
      });
  });

  it("3 PATCH Update User Job Title", async () => {
    await axios
      .patch(API_ENDPOINT.USER_UPDATE, {
        job: randomJobTitle,
      })
      .then((response) => {
        console.log(response.data); // Parse Created User
        expect(response.status).toEqual(RESPONSE.STATUS.OK_200);
        expect(response.data.job).toEqual(randomJobTitle);
        expect(response.data).toHaveProperty(RESPONSE.PROPERTY.updatedAt);
      });
  });

  it("4 DELETE User", async () => {
    await axios.delete(API_ENDPOINT.USER_DELETE).then((response) => {
      console.log(response.data); // Parse response
      expect(response.status).toEqual(RESPONSE.STATUS.OK_204);
    });
  });
});
