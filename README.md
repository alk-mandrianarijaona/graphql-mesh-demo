# GraphQL Mesh example project

## Getting started

- `yarn install`
- `yarn graphql-mesh serve`

## Edit mesh

- Open file `.meshrc.yml`

## Alkemics Swagger definitions

- set `swagger_route=discovery.swagger` on an alkemics python service `initialize` in `web/__init__.py`
- generate a swagger yml file `npx api-spec-converter -f openapi_3 -t swagger_2 -s yaml http://127.0.0.1:6551/media/v1/platform/openapi > swagger.yml`
- add a new entry in `.meshrc.yml`
