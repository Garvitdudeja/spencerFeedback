import express from "express";
import cors from "cors";
import axios from "axios";
const Noob = express();
Noob.use(cors());
Noob.use(express.json());



Noob.get("/", (req, res) => {
  res.json({ message: "updated" });
});

Noob.post("/data", async (req, res) => {
  try {
    const data = req.body.data;
    function jsonToFormData(json) {
      const formData = new FormData();

      for (const key in json) {
        if (json.hasOwnProperty(key)) {
          formData.append(key, json[key]);
        }
      }

      return formData;
    }
    const finalPostData = jsonToFormData(data);
    const URL =
      "https://www.zohoapis.com/crm/v2/functions/Update_Client_Feedback_in_Deal/actions/execute?auth_type=apikey&zapikey=1003.ea52eed87a0014942321fe35b0a9b557.2958e2de5bb055884936bb746b431c82";
    const response = await axios.post(URL, finalPostData);
    console.log(response);
    res.json({ data: response.data });
  } catch (error) {
    res.json({ error: error.message });
  }
});

Noob.listen(4000, () => {
  console.log("Noob made api at 4000");
});

export default Noob;


