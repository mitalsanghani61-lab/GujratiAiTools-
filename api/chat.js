export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body || {};

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // Pehlo model busy hoy to aagal na model try thase
    const models = [
      "gemini-3.8-flash",
      "gemini-3.6-flash",
      "gemini-3.5-flash"
    ];
    const retryable = [404, 429, 500, 503];

    let lastError = "Gemini API error";
    let lastStatus = 500;

    for (const model of models) {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": process.env.GEMINI_API_KEY
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: message }] }]
          })
        }
      );

      const data = await response.json();

      if (response.ok) {
        const reply =
          data.candidates?.[0]?.content?.parts
            ?.map(part => part.text || "")
            .join("") || "";

        return res.status(200).json({ reply });
      }

      lastError = data.error?.message || lastError;
      lastStatus = response.status;

      if (!retryable.includes(response.status)) break;
    }

    return res.status(lastStatus).json({ error: lastError });

  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
          }
