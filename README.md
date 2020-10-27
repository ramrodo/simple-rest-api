# A simple REST API

This project will be used to participate in the Golang Bootcamp of Wizeline Academy.

This API will give you the accumulative COVID-19 confirmed cases of a state of Mexico given. For example:

`GET /covid/cdmx`

```
{"confirmed_cases":155899}
```

States of Mexico supported at the moment:
- cdmx
- jalisco
- mexico
- oaxaca
- puebla

**NOTE:** This information is retrieved from `https://datos.cdmx.gob.mx`.


## Requirements to build
- Node 10.x

## Execute the API

1. Create `.env` file specifying the PORT to be used for the API server. For example:

```
PORT=3000
```

2. Install the dependencies:

```bash
$ npm install
```

3. Run the server

```bash
$ npm start
```

4. Test it

```bash
$ curl http://localhost:3000/
Hello world!
```
## Tests

You can run the unit tests by executing:

```bash
$ npm run test_unit
```
