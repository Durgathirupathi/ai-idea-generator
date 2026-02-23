const { Groq } = require('groq-sdk');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function generateStartupIdeas(userParams) {
  const { interests, skills, budget, location, riskLevel } = userParams;

  const prompt = `
You are an expert startup advisor and idea generator. 
Based on the following user profile, generate 3 high-potential startup ideas.

User Profile:
- Interests: ${interests || 'General'}
- Skills: ${skills || 'None specified'}
- Budget: ${budget || 'Any'}
- Location: ${location || 'Global/Online'}
- Risk Appetite: ${riskLevel || 'Medium'}

Return output in exactly this JSON format. Do not return any other text or markdown blocks, JUST the JSON.
{
  "ideas": [
    {
      "title": "Idea Name",
      "one_line_concept": "One-line Concept",
      "problem": "Problem It Solves",
      "audience": "Target Audience",
      "revenue_model": "Revenue Model",
      "cost_estimate": "Cost Breakdown",
      "roadmap_90_days": "30-60-90 Day Roadmap",
      "tools_required": "Tools & Tech Required",
      "marketing_strategy": "Marketing Strategy"
    }
  ]
}
  `;

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.7,
      response_format: { type: "json_object" },
    });

    const responseContent = chatCompletion.choices[0]?.message?.content;
    const parsedData = JSON.parse(responseContent);
    return parsedData.ideas;
  } catch (error) {
    console.error('Error calling Groq API:', error);
    throw new Error('Failed to generate ideas from AI');
  }
}

module.exports = { generateStartupIdeas };
