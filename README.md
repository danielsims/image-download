# image-download

A Node.js application to download product images from Neto webstores.

### Requirements

#### Node.js

Download and install the latest stable version of [Node.js.](https://nodejs.org/en/download/)

You can check the installation by running the following in your command line:

```bash
node -v
```

#### npm

```bash
npm install
```

You can check the installation by running the following in your command line:

```bash
npm -v
```

### Getting Started

#### Clone Repo

```bash
git clone https://github.com/danielsims/image-download.git
```

#### Open Repo

```bash
cd image-download
```

#### Install Dependencies

```bash
npm i
```

#### Configure Environment Variables

Create a new file called .env and add the below values. These will be used to retrieve product data from the Neto API.

```
NETOAPI_ENDPOINT=https://domain.neto.com.au/do/WS/NetoAPI
NETOAPI_USERNAME=admin
NETOAPI_KEY=ABCDEF123456
```

NETOAPI_ENDPOINT:
The endpoint for your Neto webstore eg. `https://domain.neto.com.au/do/WS/NetoAPI`

NETOAPI_USERNAME:
Your Neto username eg. `admin`

NETOAPI_KEY:
Your Neto API key (Specific to the above username) eg. `ABCDEF123456`

For further details, refer to the [GetItem API Documentation](https://developers.neto.com.au/documentation/engineers/api-documentation/products/getitem)

#### Start Application

```bash
npm start
```

### View Images

When complete, product images will be saved to the `images` directory, and will be assigned to their relevant subdirectories eg. full, alt_1, alt_2 etc.
