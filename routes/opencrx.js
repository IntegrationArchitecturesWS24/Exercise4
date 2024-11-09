import Express from "express";
import axios from "axios";

const router = Express.Router();

router.get("/accessHistory", async (req, res) => {
  try {
    const username = "guest";
    const password = "guest";

    // Encode the credentials to Base64
    const auth = Buffer.from(`${username}:${password}`).toString("base64");

    const response = await axios.get(
      "https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX/org.opencrx.kernel.home1/provider/CRX/segment/Standard/userHome/guest/accessHistory",
      {
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/accessHistory/:id", async (req, res) => {
  try {
    const username = "guest";
    const password = "guest";

    // Encode the credentials to Base64
    const auth = Buffer.from(`${username}:${password}`).toString("base64");
      
    const id = req.params.id;

    const response = await axios.get(
      `https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX/org.opencrx.kernel.home1/provider/CRX/segment/Standard/userHome/guest/accessHistory/${id}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/alert", async (req, res) => {
  try {
    const username = "guest";
    const password = "guest";

    // Encode the credentials to Base64
    const auth = Buffer.from(`${username}:${password}`).toString("base64");

    const response = await axios.get(
      "https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX/org.opencrx.kernel.home1/provider/CRX/segment/Standard/userHome/guest/alert",
      {
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/alert/:id", async (req, res) => {
  try {
    const username = "guest";
    const password = "guest";

    // Encode the credentials to Base64
    const auth = Buffer.from(`${username}:${password}`).toString("base64");
      
    const id = req.params.id;

    const response = await axios.get(
      `https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX/org.opencrx.kernel.home1/provider/CRX/segment/Standard/userHome/guest/alert/${id}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/assignedActivity", async (req, res) => {
  try {
    const username = "guest";
    const password = "guest";

    // Encode the credentials to Base64
    const auth = Buffer.from(`${username}:${password}`).toString("base64");

    const response = await axios.get(
      "https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX/org.opencrx.kernel.home1/provider/CRX/segment/Standard/userHome/guest/assignedActivity",
      {
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/assignedActivity/:id", async (req, res) => {
  try {
    const username = "guest";
    const password = "guest";

    // Encode the credentials to Base64
    const auth = Buffer.from(`${username}:${password}`).toString("base64");
      
    const id = req.params.id;

    const response = await axios.get(
      `https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX/org.opencrx.kernel.home1/provider/CRX/segment/Standard/userHome/guest/assignedActivity/${id}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/assignedContract", async (req, res) => {
  try {
    const username = "guest";
    const password = "guest";

    // Encode the credentials to Base64
    const auth = Buffer.from(`${username}:${password}`).toString("base64");

    const response = await axios.get(
      "https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX/org.opencrx.kernel.home1/provider/CRX/segment/Standard/userHome/guest/assignedContract",
      {
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/assignedContract/:id", async (req, res) => {
  try {
    const username = "guest";
    const password = "guest";

    // Encode the credentials to Base64
    const auth = Buffer.from(`${username}:${password}`).toString("base64");
      
    const id = req.params.id;

    const response = await axios.get(
      `https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX/org.opencrx.kernel.home1/provider/CRX/segment/Standard/userHome/guest/assignedContract/${id}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/audit", async (req, res) => {
  try {
    const username = "guest";
    const password = "guest";

    // Encode the credentials to Base64
    const auth = Buffer.from(`${username}:${password}`).toString("base64");

    const response = await axios.get(
      "https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX/org.opencrx.kernel.home1/provider/CRX/segment/Standard/userHome/guest/audit",
      {
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/audit/:id", async (req, res) => {
  try {
    const username = "guest";
    const password = "guest";

    // Encode the credentials to Base64
    const auth = Buffer.from(`${username}:${password}`).toString("base64");
      
    const id = req.params.id;

    const response = await axios.get(
      `https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX/org.opencrx.kernel.home1/provider/CRX/segment/Standard/userHome/guest/audit/${id}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/chart", async (req, res) => {
  try {
    const username = "guest";
    const password = "guest";

    // Encode the credentials to Base64
    const auth = Buffer.from(`${username}:${password}`).toString("base64");

    const response = await axios.get(
      "https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX/org.opencrx.kernel.home1/provider/CRX/segment/Standard/userHome/guest/chart",
      {
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/chart/:id", async (req, res) => {
  try {
    const username = "guest";
    const password = "guest";

    // Encode the credentials to Base64
    const auth = Buffer.from(`${username}:${password}`).toString("base64");
      
    const id = req.params.id;

    const response = await axios.get(
      `https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX/org.opencrx.kernel.home1/provider/CRX/segment/Standard/userHome/guest/chart/${id}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/eMailAccount", async (req, res) => {
  try {
    const username = "guest";
    const password = "guest";

    // Encode the credentials to Base64
    const auth = Buffer.from(`${username}:${password}`).toString("base64");

    const response = await axios.get(
      "https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX/org.opencrx.kernel.home1/provider/CRX/segment/Standard/userHome/guest/eMailAccount",
      {
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/eMailAccount/:id", async (req, res) => {
  try {
    const username = "guest";
    const password = "guest";

    // Encode the credentials to Base64
    const auth = Buffer.from(`${username}:${password}`).toString("base64");
      
    const id = req.params.id;

    const response = await axios.get(
      `https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX/org.opencrx.kernel.home1/provider/CRX/segment/Standard/userHome/guest/eMailAccount/${id}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/objectFinder", async (req, res) => {
  try {
    const username = "guest";
    const password = "guest";

    // Encode the credentials to Base64
    const auth = Buffer.from(`${username}:${password}`).toString("base64");

    const response = await axios.get(
      "https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX/org.opencrx.kernel.home1/provider/CRX/segment/Standard/userHome/guest/objectFinder",
      {
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/objectFinder/:id", async (req, res) => {
  try {
    const username = "guest";
    const password = "guest";

    // Encode the credentials to Base64
    const auth = Buffer.from(`${username}:${password}`).toString("base64");
      
    const id = req.params.id;

    const response = await axios.get(
      `https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX/org.opencrx.kernel.home1/provider/CRX/segment/Standard/userHome/guest/objectFinder/${id}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/propertySet", async (req, res) => {
  try {
    const username = "guest";
    const password = "guest";

    // Encode the credentials to Base64
    const auth = Buffer.from(`${username}:${password}`).toString("base64");

    const response = await axios.get(
      "https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX/org.opencrx.kernel.home1/provider/CRX/segment/Standard/userHome/guest/propertySet",
      {
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/propertySet/:id", async (req, res) => {
  try {
    const username = "guest";
    const password = "guest";

    // Encode the credentials to Base64
    const auth = Buffer.from(`${username}:${password}`).toString("base64");
      
    const id = req.params.id;

    const response = await axios.get(
      `https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX/org.opencrx.kernel.home1/provider/CRX/segment/Standard/userHome/guest/propertySet/${id}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/quickAccess", async (req, res) => {
  try {
    const username = "guest";
    const password = "guest";

    // Encode the credentials to Base64
    const auth = Buffer.from(`${username}:${password}`).toString("base64");

    const response = await axios.get(
      "https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX/org.opencrx.kernel.home1/provider/CRX/segment/Standard/userHome/guest/quickAccess",
      {
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/quickAccess/:id", async (req, res) => {
  try {
    const username = "guest";
    const password = "guest";

    // Encode the credentials to Base64
    const auth = Buffer.from(`${username}:${password}`).toString("base64");
      
    const id = req.params.id;

    const response = await axios.get(
      `https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX/org.opencrx.kernel.home1/provider/CRX/segment/Standard/userHome/guest/quickAccess/${id}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/subscription", async (req, res) => {
  try {
    const username = "guest";
    const password = "guest";

    // Encode the credentials to Base64
    const auth = Buffer.from(`${username}:${password}`).toString("base64");

    const response = await axios.get(
      "https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX/org.opencrx.kernel.home1/provider/CRX/segment/Standard/userHome/guest/subscription",
      {
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/subscription/:id", async (req, res) => {
  try {
    const username = "guest";
    const password = "guest";

    // Encode the credentials to Base64
    const auth = Buffer.from(`${username}:${password}`).toString("base64");
      
    const id = req.params.id;

    const response = await axios.get(
      `https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX/org.opencrx.kernel.home1/provider/CRX/segment/Standard/userHome/guest/subscription/${id}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/syncProfile", async (req, res) => {
  try {
    const username = "guest";
    const password = "guest";

    // Encode the credentials to Base64
    const auth = Buffer.from(`${username}:${password}`).toString("base64");

    const response = await axios.get(
      "https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX/org.opencrx.kernel.home1/provider/CRX/segment/Standard/userHome/guest/syncProfile",
      {
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/syncProfile/:id", async (req, res) => {
  try {
    const username = "guest";
    const password = "guest";

    // Encode the credentials to Base64
    const auth = Buffer.from(`${username}:${password}`).toString("base64");
      
    const id = req.params.id;

    const response = await axios.get(
      `https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX/org.opencrx.kernel.home1/provider/CRX/segment/Standard/userHome/guest/syncProfile/${id}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/timer", async (req, res) => {
  try {
    const username = "guest";
    const password = "guest";

    // Encode the credentials to Base64
    const auth = Buffer.from(`${username}:${password}`).toString("base64");

    const response = await axios.get(
      "https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX/org.opencrx.kernel.home1/provider/CRX/segment/Standard/userHome/guest/timer",
      {
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/timer/:id", async (req, res) => {
  try {
    const username = "guest";
    const password = "guest";

    // Encode the credentials to Base64
    const auth = Buffer.from(`${username}:${password}`).toString("base64");
      
    const id = req.params.id;

    const response = await axios.get(
      `https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX/org.opencrx.kernel.home1/provider/CRX/segment/Standard/userHome/guest/timer/${id}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/wfProcessInstance", async (req, res) => {
  try {
    const username = "guest";
    const password = "guest";

    // Encode the credentials to Base64
    const auth = Buffer.from(`${username}:${password}`).toString("base64");

    const response = await axios.get(
      "https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX/org.opencrx.kernel.home1/provider/CRX/segment/Standard/userHome/guest/wfProcessInstance",
      {
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/wfProcessInstance/:id", async (req, res) => {
  try {
    const username = "guest";
    const password = "guest";

    // Encode the credentials to Base64
    const auth = Buffer.from(`${username}:${password}`).toString("base64");
      
    const id = req.params.id;

    const response = await axios.get(
      `https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX/org.opencrx.kernel.home1/provider/CRX/segment/Standard/userHome/guest/wfProcessInstance/${id}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/workList", async (req, res) => {
  try {
    const username = "guest";
    const password = "guest";

    // Encode the credentials to Base64
    const auth = Buffer.from(`${username}:${password}`).toString("base64");

    const response = await axios.get(
      "https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX/org.opencrx.kernel.home1/provider/CRX/segment/Standard/userHome/guest/workList",
      {
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/workList/:id", async (req, res) => {
  try {
    const username = "guest";
    const password = "guest";

    // Encode the credentials to Base64
    const auth = Buffer.from(`${username}:${password}`).toString("base64");
      
    const id = req.params.id;

    const response = await axios.get(
      `https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX/org.opencrx.kernel.home1/provider/CRX/segment/Standard/userHome/guest/workList/${id}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

export default router;