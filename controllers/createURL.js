import sanitizeHtml from "sanitize-html";
import url from '../model/URLModel.js';
import { nanoid } from "nanoid";

export const createURL = async (req, res) => {
  // Sanitize inputs
  const longURLRaw = sanitizeHtml(req.body.longURL);
  const customAliasRaw = sanitizeHtml(req.body.customAlias);

  const shortenURL = customAliasRaw || nanoid(6);
  const exist = await url.findOne({ shortURL: shortenURL });

  if (exist) {
    return res.status(409).json({ message: "custom alias already exist" });
  }

  // Normalize the URL
  const normalizedURL =
    longURLRaw.startsWith("http://") || longURLRaw.startsWith("https://")
      ? longURLRaw
      : `https://${longURLRaw}`;

  await url.create({
    originalURL: normalizedURL,
    shortURL: shortenURL,
  });

  const domain = 'https://shorten-url-backend-npot.onrender.com' || process.env.BASE_URL;
  res.status(201).json({
    shortURL: shortenURL,
    domain:domain
  });

};
