<div align="center">
<a href="https://curencee.pro"><img src="public/logo.png" alt="logo" width="40px"></a>  
</div>

<div align="center">
<h1>Rupeefy</h1>
<p>A trusted and most popular Currenct exchange tool</p> 
</div>

<img src="/public/image.png" alt="Rupeefy" width="100%">

<br />

## Run project locally

This project utilizes a simple nodejs express backend which is hosted on Vercel
to hide the API credentials. To run the project locally, follow the steps below:

-   First generate your own API keys from
    [Currencybeacon](https://currencybeacon.com?ref=https://Rupeefy.pro)
-   Rename `.env.example` in the `server` directory to `.env`
-   Insert your API keys , make sure there's no space between the `=` sign and
    the value, e.g. `API_KEY=your_api_key_here`
-   Run the commands below

```
cd server
npm install
npm start
```

This should start the backend server on [localhost:5000](http://localhost:5000)

## Vite App

With the server running, you can now run the converter locally,

-   Rename `.env.example` to `.env`
-   Set `VITE_API_URL` to the hosted backend URL (Only relevant for production)
-   Run the commands below

```sh
npm install
npm run dev
```

Now you can visit [localhost:5173](http://localhost:5173) to see the project
live.

Example endpoint

```
http://localhost:5000/convert?base=USD&foreign=NGN&amount=1
```

This should return an object that contains the conversion details.

> If you notice any bugs or errors, kindly raise an issue to discuss it.
> Contributions are also welcome.

## Attribution

The converter is powered by the
[CurrencyBecacon API](https://currencybeacon.com), which supports over 161
commonly circulating world currencies listed
