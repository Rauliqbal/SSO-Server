[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>
<h1 align="center">Flow SSO Server with Auth0</h1>

<p align="center" <strong>SSO (Single Sign-On)</strong>  server sendiri dengan NestJS adalah proyek yang menarik karena memberikan kontrol penuh atas alur autentikasi perusahaan Anda. Untuk database, pilihan terbaik biasanya melibatkan kombinasi antara Database Relasional (untuk data user) dan In-Memory Database (untuk session/token).</p>

![flow auth](./flow%20auth0%20sso.png)

 
## Description

### Bagian 1: Autentikasi di Aplikasi Pertama (Domain 1)
- **Browses to (1)** : User mengakses aplikasi pertama (domain1.com).
- **Redirects to (2)** : Karena user belum login, aplikasi mengarahkan (redirect) browser ke SSO Server (pusat).
- **User Logs In (3)** : User memasukkan kredensial (username/password) di halaman SSO. Jika berhasil, SSO memvalidasi identitas tersebut.
- **Stores Cookie (4)** : SSO Server menyimpan Session Cookie di browser untuk menandai bahwa user sudah terautentikasi di sisi SSO.
- **Sends Token (5)** : SSO mengirimkan token autentikasi kembali ke domain1.com melalui redirect.
- **Uses Token (6)** : domain1.com menerima dan memvalidasi token tersebut untuk memberikan akses.
- **Stores domain1 Cookie (7)** : Aplikasi pertama menyimpan cookie lokalnya sendiri agar user tetap login di domain tersebut.

### Bagian 2: Akses Aplikasi Kedua tanpa Login Ulang (Domain 2)

- **Browses to (8)**: User kemudian membuka aplikasi kedua (domain2.com).
- **Redirects to (9)**: Sama seperti sebelumnya, aplikasi kedua mengarahkan browser ke SSO Server untuk mengecek status login.
- **Cookie is Available (10)**: Di sinilah keajaiban SSO terjadi. Karena sebelumnya SSO sudah menyimpan cookie (pada langkah 4), SSO Server mengenali user tersebut tanpa perlu meminta password lagi.
- **Sends Token (11)**: SSO langsung mengirimkan token baru khusus untuk domain2.com.
- **Uses Token (12)**: domain2.com memvalidasi token dan mengizinkan user masuk.
- **Stores domain2 Cookie (13)**: Aplikasi kedua menyimpan cookie lokalnya sendiri.

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ pnpm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.