import type { NextApiRequest, NextApiResponse } from 'next'
import { OpenAI } from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { imageBase64 } = req.body

    if (!imageBase64) {
      return res.status(400).json({ error: 'Missing image data' })
    }

    // Remove data URL prefix if present
    const base64Data = imageBase64.split(',')[1] || imageBase64

    const response = await openai.vision.create({
      model: 'gpt-4-vision-preview',
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image_url',
              image_url: {
                url: `data:image/jpeg;base64,${base64Data}`,
              },
            },
            {
              type: 'text',
              text: 'Extrage din această factură: beneficiar (nume), CIF, IBAN, suma în RON, data. Răspunde în format JSON: {beneficiary_name, beneficiary_cif, beneficiary_iban, amount, date}',
            },
          ],
        },
      ],
      max_tokens: 1024,
    })

    const content = response.choices[0].message.content
    const jsonMatch = content?.match(/\{[\s\S]*\}/)
    const extractedData = jsonMatch ? JSON.parse(jsonMatch[0]) : null

    res.status(200).json({
      success: true,
      data: extractedData,
      provider: 'openai-vision',
    })
  } catch (error) {
    console.error('OCR error:', error)
    res.status(500).json({ error: 'OCR failed' })
  }
}