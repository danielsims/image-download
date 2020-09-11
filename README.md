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

#### Start Application

```bash
npm start
```

#### API Authentication

You will be prompted to enter the Endpoint URL and API Key for your webstore, which will be used to fetch product URL's from the Neto API.

NETOAPI_ENDPOINT:
The endpoint URL for your Neto webstore eg. `https://storedomain.neto.com.au/do/WS/NetoAPI`

NETOAPI_KEY:
The global API key for your Neto webstore. To obtain your global API Key in the cPanel, navigate to **Settings & Tools** > **All Settings & Tools** > **API Settings**.


For further details on authentication, refer to the [GetItem API Documentation](https://developers.neto.com.au/documentation/engineers/api-documentation/products/getitem) and [Authentication Documentation.](https://developers.neto.com.au/documentation/engineers/api-documentation/introduction-and-getting-started/authentication/)


### View Images

When complete, product images will be saved to the `images` directory, and will be assigned to their relevant subdirectories eg. full, alt_1, alt_2 etc.
