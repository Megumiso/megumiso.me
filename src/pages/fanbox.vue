<template>
  <v-carousel hide-delimiters>
    <v-carousel-item src="../assets/saize_ebi_salad.jpg" cover>
      <div
        class="d-flex fill-height justify-center align-center"
        style="
          font-size: 48px;
          font-weight: 500;
          color: white;
          text-shadow: 1px 1px 2px black;
        "
        v-if="$vuetify.display.xs"
      >
        FANBOXでの支援について
      </div>
      <div
        class="d-flex fill-height justify-center align-center"
        style="
          font-size: 64px;
          font-weight: 500;
          color: white;
          text-shadow: 1px 1px 2px black;
        "
        v-if="!$vuetify.display.xs"
      >
        FANBOXでの支援について
      </div>
    </v-carousel-item>
    <v-carousel-item> 画像のネタがない </v-carousel-item>
  </v-carousel>
  <v-container>
    <v-row>
      <v-col cols="12">
        めぐみそは、FANBOXでの支援を受け付けています。<br />
        支援者限定で、開発中の出来事を不定期で公開したり、めぐみそが作成した各サービスで、以下の様々な特典が利用できるようになります。
      </v-col>
      <v-col cols="12">
        <div align="center">
          <a href="https://megumiso.fanbox.cc/" target="_blank" style="font-size: 24px"
            >FANBOXページはこちら！</a
          >
        </div>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title>特典について</v-card-title>
          <v-card-text>
            <v-col cols="12">
              <h2>読みそ</h2>
              <p>
                ご希望のサーバー1つにて、辞書の上限を1000まで解放します(標準では50まで)。
              </p>
              <p>
                支援者がVCに入った際、自動で読みそがVCに入ってくれます(オンオフ調整、サーバーごとの調整が可能です)。
              </p>
              <br />
              <p>※開発中のため、現在はご利用いただけません。</p>
            </v-col>
            <v-divider></v-divider>
            <v-col cols="12">
              <h2>メダルゲーム.jp</h2>
              <p>過去の店舗情報が閲覧できるようになります。</p>
              <p>
                店舗の情報が更新された時、メールで通知を受け取れるようになります。
              </p>
              <p>
                メダルバンクの通知までの残日数を設定できる店舗数が、100店舗になります(標準では3店舗まで)。
              </p>
            </v-col>
            <v-divider></v-divider>
            <v-col cols="12">
              <h2>速度制限でも動画を見る</h2>
              <p>
                1時間に15回まで動画を変換できるようになります(標準では3回まで)。
              </p>
              <p>
                動画変換時、ほかの動画よりも優先して変換されるようになります。
              </p>
              <p>
                変換した動画が、30日間保存されるようになります。(標準では24時間まで)。
              </p>
            </v-col>
          </v-card-text>
        </v-card>
        <v-card>
          <v-card-title>特典の申請方法</v-card-title>
          <v-card-text>
            <v-col cols="12">
              <p>
                特典を申請していただく際、FANBOX内のメッセージ機能にて、特典を利用する各サービスで支援者様を特定できる情報をお知らせください。
              </p>
              <p>各サービスごとに必要となる情報は、以下の通りです。</p>
              <br />
              <h2>読みそ</h2>
              <p>Discord ID</p>
              <p>
                特典の付与時には、一時的に<a
                  href="https://discord.gg/4b7nJrcK"
                  target="_blank"
                  >megumiso.com サポートDiscord</a
                >に参加する必要があります。
              </p>
              <v-divider></v-divider>
              <br />
              <h2>メダルゲーム.jp</h2>
              <p>ご利用のユーザー名</p>
              <v-divider></v-divider>
              <br />
              <h2>速度制限でも動画を見る</h2>
              <p>ご利用のユーザーID</p>
            </v-col>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <div align="center">
          <a href="https://megumiso.fanbox.cc/" target="_blank" style="font-size: 24px"
            >FANBOXページはこちら！</a
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
  <v-divider></v-divider>
  <div align="center">
    (c) 2024 Megumiso<br>
    Hosted on Cloudflare Pages<br>
    Powered by Vue + Vuetify
  </div>
</template>
