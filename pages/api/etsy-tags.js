// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res ) {
  let searchQuery = req.query.key;
  let response = await fetch(`https://www.etsy.com/suggestions_ajax.php?search_query=${searchQuery}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authority': "www.etsy.com",
      'Accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
    }
  })
  let data = await response.json()
  res.status(200).json(data)
}
