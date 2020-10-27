import { Router } from 'express';
import fetch from 'node-fetch';

const router = Router();

router.get('/', async (_, res) => {
  res.send('Please specify the name of a state, i.e. /covid/cdmx')
});

router.get('/cdmx', async (_, res) => {
  const url = "https://datos.cdmx.gob.mx/api/records/1.0/analyze/?refine.entidad_res=CIUDAD%20DE%20M%C3%89XICO&maxpoints=0&x=confirmados&y.count.expr=confirmados&y.count.func=COUNT&y.count.cumulative=false&dataset=casos-asociados-a-covid-19&timezone=America/Mexico_City&lang=es"

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
