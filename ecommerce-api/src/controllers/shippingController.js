const axios = require('axios');
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

exports.getShippingCost = async (req, res) => {
  const { productId, destination } = req.query;
  
  const cacheKey = `${productId}-${destination}`;
  if (cache.has(cacheKey)) {
    return res.json({ cost: cache.get(cacheKey) });
  }

  try {
    const response = await axios.get(`https://shippingapi.com/cost?product=${productId}&destination=${destination}`);
    const cost = response.data.cost;

    cache.set(cacheKey, cost);
    res.json({ cost });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch shipping cost' });
  }
};
