// api/cidades.js
import cidadesData from './destinos.json';

export default function handler(req, res) {
  res.status(200).json(cidadesData);
}
