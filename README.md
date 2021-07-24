# Tips

Lists every tip of each episode from [webbidevaus.fi](https://webbidevaus.fi/) podcast. Made with Next.js (Server Side Rendered) & TypeScript.

## Usage

- Create a .env file with `PODCAST_API_URL=https://webbidevaus.fi`
- Build with `npm run build` or run with `npm run dev` for development
- Run with `npm start` for production

### Docker

- Build docker image with `docker build --build-arg PODCAST_API_URL=https://webbidevaus.fi .`
- Run `docker run -p <host port>:3000 <id>`

## Dependencies

- nodejs (tested v14.17.1)
- npm (tested 7.19.1)
- Docker (optional)
