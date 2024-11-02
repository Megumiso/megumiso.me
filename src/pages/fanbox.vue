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
          <a
            href="https://megumiso.fanbox.cc/"
            target="_blank"
            style="font-size: 24px"
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
                  href="https://discord.gg/n6GnfeqP94"
                  target="_blank"
                  >megumiso.com サポートDiscord</a
                >に参加する必要があります。
              </p>
              <v-btn @click="showYomisoTemplate = !showYomisoTemplate" style="margin-bottom: 5px"
                >申請テンプレートを開く</v-btn
              >
              <v-expand-transition>
                <div v-if="showYomisoTemplate">
                  <p>以下のテンプレートをコピーしてご利用ください。</p>
                  <pre>
[サービス名]: 読みそ
[Discord ID]: 
                  </pre>
                </div>
              </v-expand-transition>
              <br />
              <v-btn
                @click="showYomisoDiscordIDCheck = !showYomisoDiscordIDCheck" style="margin-bottom: 5px"
                >Discord IDの確認方法(PC)
              </v-btn>
              <v-expand-transition>
                <div v-if="showYomisoDiscordIDCheck">
                  <img
                    src="../assets/Discord_image1.png"
                    style="height: 100px"
                    position="left"
                  />
                  <p>自分のユーザーをクリックします。</p>
                  <img
                    src="../assets/Discord_image2.png"
                    style="height: 300px"
                    position="left"
                  />
                  <p>赤枠で囲まれた部分がDiscord IDです。</p>
                </div>
              </v-expand-transition>
              <br />
              <v-btn
                @click="
                  showYomisoDiscordIDCheckForPhone =
                    !showYomisoDiscordIDCheckForPhone
                "  style="margin-bottom: 5px"
                >Discord IDの確認方法(スマホ)
              </v-btn>
              <v-expand-transition>
                <div v-if="showYomisoDiscordIDCheckForPhone">
                  <img
                    src="../assets/Screenshot_20241029_103425_Discord.jpg"
                    style="height: 100px"
                    position="left"
                  />
                  <p>画面下の一番右の自分のアイコンをタップします。</p>
                  <img
                    src="../assets/Screenshot_20241029_103451_Discord.jpg"
                    style="height: 300px"
                    position="left"
                  />
                  <p>赤枠で囲まれた部分がDiscord IDです。</p>
                </div>
              </v-expand-transition>
              <v-divider></v-divider>
              <br />
              <h2>メダルゲーム.jp</h2>
              <p>ご利用のユーザー名</p>
              <v-btn @click="showMedalGameTemplate = !showMedalGameTemplate" style="margin-bottom: 5px"
                >申請テンプレートを開く</v-btn
              >
              <v-expand-transition>
                <div v-if="showMedalGameTemplate">
                  <p>以下のテンプレートをコピーしてご利用ください。</p>
                  <pre>
[サービス名]: メダルゲーム.jp
[ユーザー名]: 
                  </pre>
                </div>
              </v-expand-transition>
              <br />
              <v-btn
                @click="
                  showMedalGameUsernameCheck = !showMedalGameUsernameCheck
                " style="margin-bottom: 5px"
                >ユーザー名の確認方法
              </v-btn>
              <v-expand-transition>
                <div v-if="showMedalGameUsernameCheck">
                  <img src="../assets/firefox_VS5YPwIHkb.png" style="height: 100px" position="left" />
                  <p>メダルゲーム.jpにログインし、画面右上のアイコンをクリックします。</p>
                  <img
                    src="../assets/firefox_7o0Zs0QIcC.png"
                    style="height: 300px"
                    position="left"
                  />
                  <p>赤枠で囲まれた部分がユーザー名です。</p>
                </div>
              </v-expand-transition>
              <h2>速度制限でも動画を見る</h2>
              <p>ご利用のユーザーID</p>
              <v-btn
                @click="showSpeedLimitTemplate = !showSpeedLimitTemplate" style="margin-bottom: 5px"
                >申請テンプレートを開く</v-btn
              >
              <v-expand-transition>
                <div v-if="showSpeedLimitTemplate">
                  <p>以下のテンプレートをコピーしてご利用ください。</p>
                  <pre>
[サービス名]: 速度制限で動画を見る
[ユーザーID]: 
                  </pre>
                </div>
              </v-expand-transition>
              <br />
              <v-btn
                @click="
                  showSpeedLimitUserIDCheck = !showSpeedLimitUserIDCheck
                " style="margin-bottom: 5px"
                >ユーザーIDの確認方法
              </v-btn>
              <v-expand-transition>
                <div v-if="showSpeedLimitUserIDCheck">
                  <img
                    src="../assets/firefox_X88mP9pUoq.png"
                    style="height: 100px"
                    position="left"
                  />
                  <p>動画一覧をクリックします。</p>
                  <v-divider></v-divider>
                  <img src="../assets/firefox_6h27DH9J7Q.png" style="height: 100px" position="left" />
                  <p>赤枠で囲まれた部分がユーザーIDです。</p>
                  <v-divider></v-divider>
                  <img
                    src="../assets/firefox_keS17grypD.png"
                    style="height: 100px"
                    position="left"
                  />
                  <p>赤枠で囲まれた部分がユーザーIDです。</p>
                </div>
              </v-expand-transition>
            </v-col>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title>特典付与までの流れ</v-card-title>
          <v-card-text>
            <p>・FANBOXにて支援いただいた後、運営よりメッセージをお送りします。</p>
            <img src="../assets/first.png" position="left" />
            <p>・特典を利用したいサービスと必要事項をメッセージよりお送りください。</p>
            <p>※運営からメッセージを受け取る前でも特典の申請が可能です。</p>
            <img src="../assets/second.png" position="left" />
            <p>・特典の付与と同時に運営よりメッセージが送られます。</p>
            <img src="../assets/third.png" position="left" />
            <p>・以上で、特典の付与が完了します。</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title>質問コーナー</v-card-title>
          <v-card-text>
            <h3>Q: 特典は途中で変更できますか？</h3>
            <p>A: 月1回のみ変更が可能です。</p>
            <p>変更する際は、FANBOX内のメッセージ機能にてお問い合わせください。</p>
            <br />
            <h3>Q: 支援を停止した場合、特典も停止されますか？</h3>
            <p>A: 停止されます。支援の継続状況は定期的に確認しているため、確認のタイミングで支援を停止していた場合、特典も停止されます。</p>
            <br />
            <h3>Q: 特典なしで支援をすることは可能ですか？</h3>
            <p>A: もちろん可能です！今後の運営の励みになります！</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <div align="center">
          <a
            href="https://megumiso.fanbox.cc/"
            target="_blank"
            style="font-size: 24px"
            >FANBOXページはこちら！</a
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
  <v-divider></v-divider>
  <div align="center">
    (c) 2024 Megumiso<br />
    Hosted on Cloudflare Pages<br />
    Powered by Vue + Vuetify
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

//読みそ
const showYomisoTemplate = ref(false);
const showYomisoDiscordIDCheck = ref(false);
const showYomisoDiscordIDCheckForPhone = ref(false);

//メダルゲーム.jp
const showMedalGameTemplate = ref(false);
const showMedalGameUsernameCheck = ref(false);

//速度制限でも動画を見る
const showSpeedLimitTemplate = ref(false);
const showSpeedLimitUserIDCheck = ref(false);
</script>
