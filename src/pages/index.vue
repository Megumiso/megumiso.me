<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
      src="../assets/saize_ebi_salad.jpg"
      cover
    >
    <div class="d-flex fill-height justify-center align-center" 
      style="font-size: 48px; font-weight: 500; color: white; text-shadow: 1px 1px 2px black;"
      v-if="$vuetify.display.xs"
    >
      めぐみそ.me
    </div>
    <div class="d-flex fill-height justify-center align-center" 
      style="font-size: 64px; font-weight: 500; color: white; text-shadow: 1px 1px 2px black;"
      v-if="!$vuetify.display.xs"
    >
      めぐみそ.me
    </div>

    </v-carousel-item>
    <v-carousel-item>
      画像のネタがない
    </v-carousel-item>
  </v-carousel>
  <v-container>
    <v-row>
      <v-col cols="12" sm="3">
        <div align="center">
          <v-icon class="icon">mdi-home</v-icon>
        </div>
        <p>住んでるとこ: 山〇県</p>
        <p>築: 10年以上はありそう</p>
        <p>自慢: 宅配便が朝イチで来ること</p>
        <p>月の土地: 持ってません</p>
      </v-col>
      <v-col cols="12" sm="3">
        <div align="center">
          <v-icon>mdi-account</v-icon>
        </div>
        <p>名前: めぐみそ</p>
        <p>年齢: 20代</p>
        <p>性別: 男</p>
        <p>結婚: してません</p>
        <p>好きなもの: 小エビのサラダ</p>
        <p>連絡先(メール): mmmmmmmmmmm@megumiso.me</p>
        <p><a href="https://twitter.com/Meguminnnn_">Twitter</a> <a href="https://www.instagram.com/megumisogram?igsh=MmVlMjlkMTBhMg==">Instagram</a> <a href="https://steamcommunity.com/id/Megumiso/">Steam</a></p>
      </v-col>
      <v-col cols="12" sm="3">
        <div align="center">
          <v-icon>mdi-code-json</v-icon>
        </div>
        <p>Rust: 少し</p>
        <p>Python: 少し</p>
        <p>JavaScript: 少し</p>
        <p>TypeScript: まあまあ</p>
        <p>PHP: 少し</p>
        <p>Elixir: 無理(かじっただけ)</p>
        <p>Java: 少し(Spigotプラグイン作っただけ)</p>
        <p>Brainfuck: 俺の頭がBrainfuck</p>
      </v-col>
      <v-col cols="12" sm="3">
        <div align="center">
          <v-icon>mdi-server</v-icon>
        </div>
        <p>AWS: 少し</p>
        <p>GCP: 無料枠だけ</p>
        <p>Oracle Cloud: クレカ弾かれた</p>
        <p>さくらのVPS: 半年くらい</p>
        <p>HostHatch: 2022年~</p>
        <p>WebHosting24: 2022年~</p>
      </v-col>
    </v-row>
  </v-container>
  <v-divider></v-divider>
  <div align="center">
    <h2>成果物</h2>
  </div>
  <v-card hover @click="openYomiso">
    <v-card-title>読みそ</v-card-title>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <img
            src="../assets/yomiso_page.png"
            style="width: 100%">
        </v-col>
        <v-col cols="12" sm="6">
          DiscordのチャットをVCで読み上げるBot。<br>
          初めてのRustで作ったものがそれなりの利用者数になった結果、メンテしにくいスパゲティコードになってしまった。<br>
          <br>
          当初はWix上で作られていたが、Adsenseがうまく動かないという致命的理由により、Vueを学習するきっかけとなった。<br>
          <br>
          利用サーバー数: 1000~
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  <v-card hover @click="openMegumisoCom">
    <v-card-title>
      個人ブログ megumiso.com
    </v-card-title>
    <v-conainer>
      <v-row>
        <v-col cols="12" sm="6">
          <img
            src="../assets/megumisocom_page.png"
            style="width: 100%"
            >
        </v-col>
        <v-col cols="12" sm="6">
          とりあえず作ったブログ。<br>
          いろいろなことを書いているが、最近は技術系の記事が多い。<br>
          と思いきや旅行の記事とかも書こうとしているので、なんでもあり。<br>
          <br>
          実はこれの前にもブログがあったが、間違えてデータを吹き飛ばした。<br>
          <br>
          月間PV: 統計をとっていない
        </v-col>
      </v-row>
    </v-conainer>
  </v-card>
  <v-divider></v-divider>
  <div align="center">
    (c) 2024 Megumiso<br>
    Hosted on Cloudflare Pages<br>
    Powered by Vue + Vuetify
  </div>
</template>

<script lang="ts" setup>
  //
  const openYomiso = () => {
    window.open('https://yomiso.megumiso.com', '_blank');
  }

  const openMegumisoCom = () => {
    window.open('https://megumiso.com', '_blank');
  }
</script>
