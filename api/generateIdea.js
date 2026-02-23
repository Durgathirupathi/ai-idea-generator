const { generateStartupIdeas } = require('../services/aiService');

const generateIdea = async (req, res) => {
    try {
        const { interests, skills, budget, location, riskLevel } = req.body;

        // Validate minimal input
        if (!interests && !skills) {
            return res.status(400).json({ error: 'Please provide at least some interests or skills.' });
        }

        const ideas = await generateStartupIdeas({ interests, skills, budget, location, riskLevel });
        res.json({ ideas });
    } catch (error) {
        console.error('generateIdea error:', error);
        // Be resilient up to user space
        res.status(500).json({ error: 'An error occurred while generating ideas. Please try again later.' });
    }
};

module.exports = generateIdea;
