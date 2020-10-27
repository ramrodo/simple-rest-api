import { Router } from 'express';
import fetch from 'node-fetch';
import STATES from '../constants/states';

const router = Router();

router.get('/:name', async (req, res) => {
  const { name } = req.params;
  const state = STATES[name];

  if (state === undefined) {
    return res.status(404).send('Please provide a State registered')
  }

  const url = `https://datos.cdmx.gob.mx/api/records/1.0/analyze/?refine.entidad_res=${STATES[name]}&maxpoints=0&x=confirmados&y.count.expr=confirmados&y.count.func=COUNT&y.count.cumulative=false&dataset=casos-asociados-a-covid-19&timezone=America/Mexico_City&lang=es`
  let data;
  try {
    const response = await fetch(url);
    ([ data ] = await response.json());
  } catch (error) {
    console.log(error);
  }

  return res.send({
    confirmed_cases: data.count
  });
});

export default router;
